from fastapi import FastAPI
from get_question import *

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/getQuestion")
async def root():
    return get_question()