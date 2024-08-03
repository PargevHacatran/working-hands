from pydantic import BaseModel


class Vacancy(BaseModel):
    id: str
    title: str
    price: str
    description: str
    devEmail: str
    deadline: str
    responses: list[str]
    category: str

