from typing import Annotated
from fastapi import APIRouter, Body, Path

from app.api.depends import RedisDeps
from app.crud import set_value, get_value, get_all_values
from app.models.vacancy import Vacancy

router = APIRouter(
    prefix="/vacancies",
    tags=["vacancies"]
)


@router.get("/get-vacancy/{vacancy_id}")
async def get_vacancy(vacancy_id: Annotated[str, Path()], redis: RedisDeps):
    result = await get_value(redis, vacancy_id)
    return result


@router.get("/get-vacancies")
async def get_vacancies(redis: RedisDeps):
    result = []
    all_values = await get_all_values(redis)
    for value in all_values:
        if value.get("id") is not None:
            result.append(value)
    return result


@router.post("/set-vacancy")
async def get_vacancy(value: Annotated[Vacancy, Body()], redis: RedisDeps):
    vacancy_id = value.id
    await set_value(redis, vacancy_id, dict(value))


@router.put("/update-responses/{vacancy_id}")
async def update_responses(
        vacancy_id: Annotated[str, Path()],
        new_response: Annotated[str, Body()],
        redis: RedisDeps,
):
    vacancy = await get_value(redis, vacancy_id)
    new_responses = vacancy["responses"]
    new_responses.append(new_response)

    vacancy["responses"] = new_responses

    await set_value(redis, vacancy_id, vacancy)
