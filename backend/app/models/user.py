from typing import Annotated

from pydantic import BaseModel, Field


class User(BaseModel):
    login: Annotated[str, Field(default="email@example.com")]
    role: Annotated[str, Field(default="worker")]
    phone: Annotated[str, Field(default="9123456789")]
    name: Annotated[str, Field(default="Иванов Иван")]
    position: Annotated[str, Field(default="Плиточник", description="Должность")]
    balance: int
