"""Custom email/password JWT authentication for the admin CMS.
Single seeded admin account — no public registration."""

import os
from datetime import datetime, timedelta, timezone

import bcrypt
import jwt
from bson import ObjectId
from fastapi import HTTPException, Request

from models import AdminUser

JWT_ALGORITHM = "HS256"
ACCESS_TOKEN_MINUTES = 60 * 12  # 12h — convenient for a low-traffic admin panel
REFRESH_TOKEN_DAYS = 7
MAX_LOGIN_ATTEMPTS = 5
LOCKOUT_MINUTES = 15


def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))


def get_jwt_secret() -> str:
    return os.environ["JWT_SECRET"]


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_MINUTES),
        "type": "access",
    }
    return jwt.encode(payload, get_jwt_secret(), algorithm=JWT_ALGORITHM)


def create_refresh_token(user_id: str) -> str:
    payload = {
        "sub": user_id,
        "exp": datetime.now(timezone.utc) + timedelta(days=REFRESH_TOKEN_DAYS),
        "type": "refresh",
    }
    return jwt.encode(payload, get_jwt_secret(), algorithm=JWT_ALGORITHM)


def _extract_token(request: Request) -> str:
    token = request.cookies.get("access_token")
    if not token:
        auth_header = request.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            token = auth_header[7:]
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return token


async def get_current_admin(request: Request) -> AdminUser:
    from server import db  # local import avoids circular import at module load

    token = _extract_token(request)
    try:
        payload = jwt.decode(token, get_jwt_secret(), algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
        doc = await db.admin_users.find_one({"_id": ObjectId(payload["sub"])})
        if not doc:
            raise HTTPException(status_code=401, detail="Admin not found")
        return AdminUser.from_mongo(doc)
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


async def check_brute_force(db, identifier: str):
    record = await db.login_attempts.find_one({"identifier": identifier})
    if record and record.get("count", 0) >= MAX_LOGIN_ATTEMPTS:
        locked_until = record.get("locked_until")
        if locked_until and locked_until > datetime.now(timezone.utc):
            raise HTTPException(
                status_code=429,
                detail="Too many failed login attempts. Try again later.",
            )


async def record_failed_login(db, identifier: str):
    record = await db.login_attempts.find_one({"identifier": identifier})
    count = (record.get("count", 0) if record else 0) + 1
    locked_until = None
    if count >= MAX_LOGIN_ATTEMPTS:
        locked_until = datetime.now(timezone.utc) + timedelta(minutes=LOCKOUT_MINUTES)
    await db.login_attempts.update_one(
        {"identifier": identifier},
        {"$set": {"count": count, "locked_until": locked_until}},
        upsert=True,
    )


async def clear_login_attempts(db, identifier: str):
    await db.login_attempts.delete_one({"identifier": identifier})


async def seed_admin(db):
    admin_email = os.environ.get("ADMIN_EMAIL", "admin@example.com").lower()
    admin_password = os.environ.get("ADMIN_PASSWORD", "admin123")
    existing = await db.admin_users.find_one({"email": admin_email})
    if existing is None:
        admin = AdminUser(email=admin_email, password_hash=hash_password(admin_password))
        await db.admin_users.insert_one(admin.to_mongo())
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.admin_users.update_one(
            {"email": admin_email},
            {"$set": {"password_hash": hash_password(admin_password)}},
        )
