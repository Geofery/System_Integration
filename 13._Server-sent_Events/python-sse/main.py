import asyncio
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import StreamingResponse
from datetime import datetime

app = FastAPI()

templates = Jinja2Templates(directory ="templates")

#poetry init-n
#poetry add uvicorn fastapi
#poetry shell
#poetry add fastapi jinja2
#uvicorn main:app --reload 
#to run the application. 
#ssh -R Roed:80:localhost:8000 serveo.net
#https://roed.serveo.net/ to see the time

@app.get("/")
def serve_root_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

async def date_generator():
    while True:
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        yield f"data: {now}\n\n"
        await asyncio.sleep(1)


async def deliver_joke():
    while True:
        joke = "Did you hear about the first restaurant to open on the moon?"
        yield f"data: {joke}/n/n"
        await asyncio.sleep(5)
        punchline = "It had great food, but no atmosphere."
        yield f"data: {punchline}/n/n"


@app.get("/sse")
def sse():
    return StreamingResponse(date_generator(), media_type="text/event-stream")

@app.get("/joke")
def joke():
    return StreamingResponse(deliver_joke(), media_type="text/event-stream")
