from typing import Annotated

from fastapi import FastAPI, Path, Body
from redis import asyncio as aioredis

from app.crud import set_value, get_value, delete_value
from app.models.user import User

app = FastAPI()


redis = aioredis.from_url("redis://localhost", encoding="utf8", decode_responses=True)


@app.post("/set-user/")
async def set_user(value: Annotated[User, Body()]):
    await set_value(redis, value.login, dict(value))


@app.get("/get-user/{login}")
async def get_user(login: Annotated[str, Path()]):
    result = await get_value(redis, login)
    return result


@app.delete("/delete-user/{login}")
async def delete_val(login: Annotated[str, Path()]):
    await delete_value(redis, login)
