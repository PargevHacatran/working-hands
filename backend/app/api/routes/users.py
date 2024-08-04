from typing import Annotated

from fastapi import APIRouter, Body, Path

from app.api.depends import RedisDeps
from app.crud import set_value, get_value, delete_value, get_all_values
from app.models.user import User


router = APIRouter(
    tags=["users"]
)


@router.post("/set-user/")
async def set_user(value: Annotated[User, Body()], redis: RedisDeps):
    await set_value(redis, value.email, dict(value))
    return {"result": value}


@router.get("/get-all-users")
async def get_vacancies(redis: RedisDeps):
    result = []
    all_values = await get_all_values(redis)
    for value in all_values:
        if value.get("email") is not None:
            result.append(value)
    return result


@router.get("/get-user/{email}")
async def get_user(email: Annotated[str, Path()], redis: RedisDeps):
    result = await get_value(redis, email)
    return result


@router.delete("/delete-user/{email}")
async def delete_val(email: Annotated[str, Path()], redis: RedisDeps):
    await delete_value(redis, email)
