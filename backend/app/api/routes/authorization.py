from typing import Annotated
from fastapi import APIRouter, Body, HTTPException
from starlette import status

from app.utils.generate_random_code import generate_random_code
from app.utils.send_random_code import generate_text_message, send_random_code

router = APIRouter(
    prefix="/authorization",
    tags=["authorization"]
)


@router.post("/get-random-code")
def get_code_authorization(number: Annotated[str, Body()]):
    random_code = generate_random_code(code_size=4)
    text = generate_text_message(random_code=random_code)

    request = send_random_code(destination=number, text=text)
    if request.status_code == 200:
        return {"random_code": random_code}
    else:
        raise HTTPException(status_code=500, detail=status.HTTP_500_INTERNAL_SERVER_ERROR)
