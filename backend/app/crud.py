import json

from redis.asyncio import Redis


async def get_value(redis: Redis, key: str):
    result = await redis.get(key)
    if result is not None:
        return json.loads(result)
    return result


async def set_value(redis: Redis, key: bytes | str | memoryview, value: int | str | list | dict):
    await redis.set(key, json.dumps(value))


async def delete_value(redis: Redis, key: str):
    await redis.delete(key)
