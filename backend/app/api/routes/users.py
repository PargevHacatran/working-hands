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
    await set_value(redis, value.login, dict(value))


@router.get("/get-user/{login}")
async def get_user(login: Annotated[str, Path()], redis: RedisDeps):
    result = await get_value(redis, login)
    return result


@router.delete("/delete-user/{login}")
async def delete_val(login: Annotated[str, Path()], redis: RedisDeps):
    await delete_value(redis, login)
