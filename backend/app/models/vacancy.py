from pydantic import BaseModel


class Vacancy(BaseModel):
    id: str
    title: str
    price: int
    description: str
    devEmail: str
    deadline: str
    responses: list[str]
