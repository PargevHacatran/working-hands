from pydantic import BaseModel


class Vacancy(BaseModel):
    title: str
    price: str
    description: str
    devEmail: str
    deadline: str
    responses: list[str]
    category: str


class VacancyInDB(Vacancy):
    vacancy_id: str
