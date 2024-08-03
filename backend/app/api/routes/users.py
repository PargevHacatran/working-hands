from typing import Annotated

from fastapi import APIRouter, Body, Path

from app.api.depends import RedisDeps
from app.crud import set_value, get_value, delete_value
from app.models.user import User


router = APIRouter(
    tags=["users"]
)


@router.post("/set-user/")
async def set_user(value: Annotated[User, Body()], redis: RedisDeps):
    await set_value(redis, value.email, dict(value))


@router.get("/get-user/{email}")
async def get_user(email: Annotated[str, Path()], redis: RedisDeps):
    result = await get_value(redis, email)
    return result


@router.delete("/delete-user/{login}")
async def delete_val(email: Annotated[str, Path()], redis: RedisDeps):
    await delete_value(redis, email)
