from typing import Annotated

from fastapi import APIRouter, Body


router = APIRouter(
    prefix="/authorization",
    tags=["authorization"]
)


@router.post("/set-code")
def set_code_authorization(code: Annotated[str, Body()]):
    pass
