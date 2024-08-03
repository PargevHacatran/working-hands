from fastapi import APIRouter

from app.api.routes import users, authorization, vacancies

api_router = APIRouter()
api_router.include_router(users.router)
api_router.include_router(authorization.router)
api_router.include_router(vacancies.router)
