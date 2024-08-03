from pydantic import BaseModel


class Vacancy(BaseModel):
    vacancy_id: str
    title: str
    price: str
    description: str
    devEmail: str
    deadline: str
    responses: list[str]
    category: str

