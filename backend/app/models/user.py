from typing import Annotated

from pydantic import BaseModel, Field


class User(BaseModel):
    email: Annotated[str, Field(default="email@example.com")]
    tel: Annotated[str, Field(default="9123456789")]
    name: Annotated[str, Field(default="Иванов Иван")]
    position: Annotated[str, Field(default="Плиточник", description="Должность")]
    role: Annotated[str, Field(default="worker")]
    password: str
    