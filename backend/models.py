"""MongoDB document models. ObjectId is never returned raw from the API —
all documents extend BaseDocument which maps `_id` <-> `id` via PyObjectId
and provides to_mongo()/from_mongo() helpers."""

from datetime import datetime, timezone
from typing import Annotated, Any, List, Optional

from bson import ObjectId
from pydantic import BaseModel, BeforeValidator, ConfigDict, Field


def _validate_object_id(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    if isinstance(v, str):
        return v
    raise ValueError("Invalid ObjectId")


PyObjectId = Annotated[str, BeforeValidator(_validate_object_id)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True)

    id: PyObjectId = Field(default_factory=lambda: str(ObjectId()), alias="_id")

    @classmethod
    def from_mongo(cls, doc: Optional[dict]):
        if doc is None:
            return None
        doc = dict(doc)
        doc["_id"] = str(doc["_id"])
        return cls(**doc)

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True, exclude_none=True)
        if data.get("_id"):
            try:
                data["_id"] = ObjectId(data["_id"])
            except Exception:
                pass
        return data


# ---------------------------------------------------------------------------
# Admin user
# ---------------------------------------------------------------------------

class AdminUser(BaseDocument):
    email: str
    password_hash: str
    role: str = "admin"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class LoginRequest(BaseModel):
    email: str
    password: str


# ---------------------------------------------------------------------------
# Project (CMS work item)
# ---------------------------------------------------------------------------

PREDEFINED_TAGS = [
    "Website",
    "Web App",
    "SaaS",
    "Marketing",
    "SAP",
    "Workflow Automation",
]


class Project(BaseDocument):
    title: str
    description: str
    image_url: str
    tags: List[str] = Field(default_factory=list)
    featured: bool = False
    order: int = 0
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ProjectCreate(BaseModel):
    title: str
    description: str
    image_url: str
    tags: List[str] = Field(default_factory=list)
    featured: bool = False
    order: int = 0


class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    tags: Optional[List[str]] = None
    featured: Optional[bool] = None
    order: Optional[int] = None
