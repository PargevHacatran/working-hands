from typing import Annotated
from fastapi import APIRouter, Body, HTTPException

from app.utils.call_password import send_call_password

router = APIRouter(
    prefix="/authorization",
    tags=["authorization"]
)


@router.post("/get-random-code")
def get_code_authorization(number: Annotated[str, Body()]):
    request = send_call_password(destination=number, validate=True)
    response_body = request.json()
    print(response_body)

    if request.status_code == 200 and response_body["success"]:
        random_code = response_body["result"]["code"]
        return {"random_code": random_code}
    else:
        raise HTTPException(
            status_code=500,
            detail=response_body["error"]["descr"],
        )
