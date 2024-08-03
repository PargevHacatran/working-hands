from typing import Annotated
from fastapi import APIRouter, Body, HTTPException
from starlette import status

from app.utils.call_password import send_call_password

router = APIRouter(
    prefix="/authorization",
    tags=["authorization"]
)


@router.post("/get-random-code")
def get_code_authorization(number: Annotated[str, Body()]):
    request = send_call_password(destination=number, validate=False)
    response_body = request.json()

    #random_code = "1111"
    random_code = response_body["result"]["code"]
    if request.status_code == 200:
        return {"random_code": random_code}
    else:
        raise HTTPException(status_code=500, detail=status.HTTP_500_INTERNAL_SERVER_ERROR)
