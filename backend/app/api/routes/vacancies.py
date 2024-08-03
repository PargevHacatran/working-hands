import uuid
from typing import Annotated
from fastapi import APIRouter, Body, Path, HTTPException
from starlette import status

from app.api.depends import RedisDeps
from app.crud import set_value, get_value, get_all_values, delete_value
from app.models.vacancy import Vacancy, VacancyInDB

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
        if value.get("id") is not None or value.get("vacancy_id") is not None:
            result.append(value)
    return result


@router.post("/set-vacancy")
async def get_vacancy(value: Annotated[Vacancy, Body()], redis: RedisDeps):
    vacancy_id = str(uuid.uuid4())
    vacancy_in_db = VacancyInDB(vacancy_id=vacancy_id, **dict(value))
    await set_value(redis, vacancy_id, dict(vacancy_in_db))
    return {"result": vacancy_in_db}


@router.post("/update-responses/{vacancy_id}")
async def update_responses(
        vacancy_id: Annotated[str, Path()],
        new_response: Annotated[str, Body(description="new_response (email)")],
        redis: RedisDeps,
):
    vacancy = await get_value(redis, vacancy_id)

    if vacancy is not None:
        responses = vacancy.get("responses")
        if responses is not None:
            responses.append(new_response)
            vacancy["responses"] = responses
            await set_value(redis, vacancy_id, vacancy)
            return {"result": vacancy}
        else:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="responses in vacancy is null")
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="vacancy_id not exist")


@router.delete("/delete-vacancy/")
async def delete_vacancy_by_id(vacancy_id: Annotated[str, Body()], redis: RedisDeps):
    await delete_value(redis, vacancy_id)
