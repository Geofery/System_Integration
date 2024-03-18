from fastapi import FastAPI, Request, Response
import json
import random

#poetry init-n
#poetry add uvicorn fastapi
#poetry shell
#uvicorn main:app --reload 

app = FastAPI()
subscribers = []

@app.post("/subscribe")
async def dad_joke_subscribe(request: Request, response: Response):
    body = await request.json()
    url = body.get("url")
    if url:
        subscribers.append(url)
        response.status_code = 201
        return {"data": "WARNING! BAD DAD JOKES AHEAD!"}
    else: 
        response.status_code = 400


@app.delete("/unsubscribe")
async def dad_joke_unsubscribe(request: Request, response: Response):
    body = await request.json()
    url = body.get("url")
    if url in subscribers:
        subscribers.remove(url)
        response.status_code = 201
        return {"data": "What is a lawyer's farewell phrase? \nI'm going to sue you!"}
    else: 
        response.status_code = 400

@app.get("/ping")
async def ping(request: Request):
    for url in subscribers:
        await recieved(request, url)
        await failed(request, url)
        await refunded(request, url)

@app.get("/recieved")
async def recieved(request: Request, url: str):
        return {"data": "Payment recieved"}

@app.get("failed")
async def failed(request: Request, url: str):
    return {"data": "Payment failed"}

app.get("/refunded")
async def refunded(request: Request, url: str):
    return {"data": "Payment refunded"}
