from fastapi import FastAPI, APIRouter, Depends, HTTPException, Request, Response
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from bson import ObjectId

from models import (
    AdminUser,
    LoginRequest,
    Project,
    ProjectCreate,
    ProjectUpdate,
    PREDEFINED_TAGS,
)
from auth import (
    create_access_token,
    create_refresh_token,
    verify_password,
    get_current_admin,
    seed_admin,
    check_brute_force,
    record_failed_login,
    clear_login_attempts,
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ---------------------------------------------------------------------------
# Admin auth
# ---------------------------------------------------------------------------

class AdminUserPublic(BaseModel):
    id: str
    email: str
    role: str
    access_token: Optional[str] = None


def _cookie_kwargs():
    return dict(httponly=True, secure=False, samesite="lax", path="/")


@api_router.post("/auth/login", response_model=AdminUserPublic)
async def admin_login(payload: LoginRequest, response: Response, request: Request):
    email = payload.email.lower().strip()
    # Keyed by email only (not client IP) — this is a single-admin CMS behind
    # a proxy where request.client.host is not a stable per-client identifier.
    await check_brute_force(db, email)

    doc = await db.admin_users.find_one({"email": email})
    if not doc or not verify_password(payload.password, doc["password_hash"]):
        await record_failed_login(db, email)
        raise HTTPException(status_code=401, detail="Invalid email or password")

    await clear_login_attempts(db, email)
    admin = AdminUser.from_mongo(doc)
    access_token = create_access_token(admin.id, admin.email)
    refresh_token = create_refresh_token(admin.id)
    response.set_cookie(key="access_token", value=access_token, max_age=60 * 60 * 12, **_cookie_kwargs())
    response.set_cookie(key="refresh_token", value=refresh_token, max_age=60 * 60 * 24 * 7, **_cookie_kwargs())
    return AdminUserPublic(id=admin.id, email=admin.email, role=admin.role, access_token=access_token)


@api_router.post("/auth/logout")
async def admin_logout(response: Response):
    response.delete_cookie("access_token", path="/")
    response.delete_cookie("refresh_token", path="/")
    return {"message": "Logged out"}


@api_router.get("/auth/me", response_model=AdminUserPublic)
async def admin_me(admin: AdminUser = Depends(get_current_admin)):
    return AdminUserPublic(id=admin.id, email=admin.email, role=admin.role)


# ---------------------------------------------------------------------------
# Tags
# ---------------------------------------------------------------------------

@api_router.get("/tags", response_model=List[str])
async def list_tags():
    distinct_tags = await db.projects.distinct("tags")
    merged = sorted(set(PREDEFINED_TAGS) | set(distinct_tags))
    return merged


# ---------------------------------------------------------------------------
# Projects (CMS work items)
# ---------------------------------------------------------------------------

@api_router.get("/projects", response_model=List[Project], response_model_by_alias=False)
async def list_projects(featured: Optional[bool] = None, tag: Optional[str] = None):
    query = {}
    if featured is not None:
        query["featured"] = featured
    if tag:
        query["tags"] = tag
    cursor = db.projects.find(query).sort([("order", 1), ("created_at", -1)])
    docs = await cursor.to_list(1000)
    return [Project.from_mongo(d) for d in docs]


@api_router.get("/projects/{project_id}", response_model=Project, response_model_by_alias=False)
async def get_project(project_id: str):
    try:
        doc = await db.projects.find_one({"_id": ObjectId(project_id)})
    except Exception:
        raise HTTPException(status_code=404, detail="Project not found")
    if not doc:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project.from_mongo(doc)


@api_router.post("/projects", response_model=Project, response_model_by_alias=False)
async def create_project(payload: ProjectCreate, admin: AdminUser = Depends(get_current_admin)):
    project = Project(**payload.model_dump())
    await db.projects.insert_one(project.to_mongo())
    return project


@api_router.put("/projects/{project_id}", response_model=Project, response_model_by_alias=False)
async def update_project(
    project_id: str, payload: ProjectUpdate, admin: AdminUser = Depends(get_current_admin)
):
    updates = {k: v for k, v in payload.model_dump(exclude_none=True).items()}
    if updates:
        try:
            result = await db.projects.update_one(
                {"_id": ObjectId(project_id)}, {"$set": updates}
            )
        except Exception:
            raise HTTPException(status_code=404, detail="Project not found")
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Project not found")
    doc = await db.projects.find_one({"_id": ObjectId(project_id)})
    if not doc:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project.from_mongo(doc)


@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str, admin: AdminUser = Depends(get_current_admin)):
    try:
        result = await db.projects.delete_one({"_id": ObjectId(project_id)})
    except Exception:
        raise HTTPException(status_code=404, detail="Project not found")
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"message": "Project deleted"}


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Include the router in the main app
app.include_router(api_router)

# Configure CORS origins safely
cors_origins_raw = os.environ.get('CORS_ORIGINS', '')
if cors_origins_raw:
    cors_origins = [origin.strip() for origin in cors_origins_raw.split(',') if origin.strip()]
    if "*" in cors_origins:
        logger.warning("CORS_ORIGINS contains '*' which is invalid when allow_credentials=True. Removing '*' to prevent crash.")
        cors_origins = [o for o in cors_origins if o != "*"]
else:
    # Default origins for local development to avoid crashing Starlette when allow_credentials=True
    cors_origins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=cors_origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


DEMO_PROJECTS = [
    {
        "title": "Furniture Co. Marketing Site",
        "description": "A full redesign of a home-furnishings brand's website — new visual identity, a CMS the marketing team can run without a developer, and a checkout flow that cut cart abandonment noticeably in the first quarter post-launch.",
        "image_url": "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
        "tags": ["Website"],
        "highlights": [
            "Custom web design with responsive layouts across devices",
            "Integrated headless CMS for quick marketing content updates",
            "Streamlined checkout process that increased conversion by 18%"
        ],
        "featured": True,
        "order": 0,
    },
    {
        "title": "Fintech SaaS Dashboard",
        "description": "A multi-tenant analytics dashboard for a fintech startup — real-time transaction insights, role-based access, and a component system built to support their next three product lines without a rebuild.",
        "image_url": "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
        "tags": ["SaaS", "Web App"],
        "highlights": [
            "Real-time transaction insights via WebSockets",
            "Advanced role-based access control (RBAC) security",
            "Reusable visual component library for scalability"
        ],
        "featured": True,
        "order": 1,
    },
    {
        "title": "Retail Mobile Companion App",
        "description": "A companion web app for a retail chain's loyalty program — browsing, rewards tracking, and push-style notifications, all in a lightweight interface their in-store staff also use on tablets.",
        "image_url": "https://images.unsplash.com/photo-1548094891-c4ba474efd16",
        "tags": ["Web App"],
        "highlights": [
            "Seamless loyalty rewards tracker interface",
            "Push notifications for active store promotions",
            "Optimized layout for fast tablet and mobile views"
        ],
        "featured": True,
        "order": 2,
    },
    {
        "title": "Growth Marketing Analytics Suite",
        "description": "An internal reporting suite pulling together paid, organic, and lifecycle email data into one view — replacing five disconnected spreadsheets with a single source of truth for the growth team.",
        "image_url": "https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg",
        "tags": ["Marketing", "SaaS"],
        "highlights": [
            "Consolidated organic, paid, and email campaign data",
            "Interactive charting for quick performance analysis",
            "Custom API integrations with top marketing tools"
        ],
        "featured": False,
        "order": 3,
    },
    {
        "title": "Enterprise SAP Cloud Migration",
        "description": "A phased S/4HANA migration for a mid-size manufacturer — data validation, parallel testing, and a rollback plan at every stage, completed with zero unplanned downtime.",
        "image_url": "https://images.unsplash.com/photo-1762163516269-3c143e04175c",
        "tags": ["SAP"],
        "highlights": [
            "Zero unplanned downtime during transition stages",
            "Automatic data validation before migration batches",
            "Comprehensive roll-back plans for risk mitigation"
        ],
        "featured": True,
        "order": 4,
    },
    {
        "title": "Ops Workflow Automation Platform",
        "description": "An end-to-end automation layer connecting a logistics company's CRM, email, and internal tools — cutting manual data entry across their fulfillment pipeline by the majority of what a two-person team used to handle by hand.",
        "image_url": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        "tags": ["Workflow Automation"],
        "highlights": [
            "Reduced manual logistics entry tasks by 60%",
            "Seamless integrations between CRM and email clients",
            "Real-time pipeline exception monitoring and alerts"
        ],
        "featured": True,
        "order": 5,
    },
    {
        "title": "D2C Ecommerce Storefront Revamp",
        "description": "A ground-up storefront rebuild for a direct-to-consumer brand — faster load times, a streamlined checkout, and integrated email marketing that turned repeat purchase rate into their best-performing channel.",
        "image_url": "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
        "tags": ["Website", "Marketing"],
        "highlights": [
            "Lightning-fast page load times under 1.2s",
            "Streamlined product page layouts and filters",
            "Integrated automated lifecycle marketing triggers"
        ],
        "featured": False,
        "order": 6,
    },
    {
        "title": "Internal Ops Dashboard for Logistics",
        "description": "A custom internal dashboard replacing a patchwork of spreadsheets for a logistics team — live shipment tracking, automated exception alerts, and a single view for a team that used to start every morning stitching reports together.",
        "image_url": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
        "tags": ["SaaS", "Workflow Automation"],
        "highlights": [
            "Unified shipment tracking map interface",
            "Automated exception alerts for delayed packages",
            "Daily automated reporting compilation module"
        ],
        "featured": False,
        "order": 7,
    },
]


@app.on_event("startup")
async def on_startup():
    await db.admin_users.create_index("email", unique=True)
    await db.login_attempts.create_index("identifier", unique=True)
    await seed_admin(db)

    existing_count = await db.projects.count_documents({})
    if existing_count == 0:
        docs = []
        for item in DEMO_PROJECTS:
            project = Project(**item)
            docs.append(project.to_mongo())
        if docs:
            await db.projects.insert_many(docs)
        logger.info(f"Seeded {len(docs)} demo projects")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()