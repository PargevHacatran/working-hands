from typing import Annotated
from fastapi import APIRouter, Body, HTTPException

from app.api.depends import RedisDeps
from app.crud import get_value, set_value
from app.utils.call_password import send_call_password

router = APIRouter(
    prefix="/authorization",
    tags=["authorization"]
)


@router.post("/get-random-code")
async def get_code_authorization(number: Annotated[str, Body()], redis: RedisDeps):
    key_password_number = f"password_{number}"
    cache_random_code = await get_value(redis, key_password_number)
    if cache_random_code is None:
        request = send_call_password(destination=number, validate=False)
        response_body = request.json()
        print(response_body)

        if request.status_code == 200 and response_body["success"]:
            random_code = response_body["result"]["code"]
            await set_value(redis, key_password_number, random_code, expire=1 * 60)
            return {"random_code": random_code}
        else:
            raise HTTPException(
                status_code=500,
                detail=response_body["error"]["descr"],
            )
    else:
        return {"random_code": cache_random_code}
