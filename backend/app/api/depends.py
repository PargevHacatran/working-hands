from typing import Annotated

from fastapi import Depends
from redis import asyncio as aioredis
from redis.asyncio import Redis


def get_redis() -> Redis:
    redis = aioredis.from_url("redis://localhost", encoding="utf8", decode_responses=True)
    return redis


RedisDeps = Annotated[Redis, Depends(get_redis)]
