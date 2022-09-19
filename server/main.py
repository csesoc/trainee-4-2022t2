from fastapi import FastAPI
from get_question import *

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/code/questions")
async def fetch_questions(difficulty: str):
    return get_question(difficulty)