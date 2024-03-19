from fastapi import FastAPI, Request, Response
from mysql.connector import (connection)
from dotenv import dotenv_values


env_variables = dotenv_values()
cnx = connection.MySQLConnection(user = env_variables["USER_NAME"], password = env_variables["DB_PASSWORD"],
                              host = env_variables["DB_HOST"],
                              port = env_variables["DB_PORT"],
                              database = env_variables["DB_CHOICE"])

async def insert_event(event, url):
    cursor = cnx.cursor()
    query = ("INSERT INTO events (event_type, url) VALUES (%s, %s)")
    cursor.execute(query, (event, url))
    cnx.commit()
    cursor.close()

#Needs to be rewritten. 
async def get_subscribers():
    cursor = cnx.cursor()
    query = ("SELECT * FROM events")
    cursor.execute(query)
    subscribers = cursor.fetchall()
    cursor.close()
    return subscribers

#poetry init-n
#poetry add uvicorn fastapi
#poetry shell
#uvicorn main:app --reload 

app = FastAPI()
subscribers = []

@app.post("/payment/success")
async def payment_success(request: Request, response: Response):
    body = await request.json()
    url = body.get("url")
    await insert_event("payment_success", url)
    return {"url": url, "event": "Payment successful"}

@app.post("/payment/failed")
async def payment_failed(request: Request, response: Response):
    body = await request.json()
    url = body.get("url")
    await insert_event("payment_failed", url)
    return {"url": url, "event": "Payment failed"}

@app.post("/payment/refunded")
async def payment_refunded(request: Request, response: Response):
    body = await request.json()
    url = body.get("url")
    await insert_event("payment_refunded", url)
    return {"url": url, "event": "Payment refunded"}









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
async def ping():
    for url in subscribers:
        await recieved()
        await failed()
        await refunded()

async def recieved():
        return {"data": "Payment recieved"}

async def failed():
    return {"data": "Payment failed"}

async def refunded():
    return {"data": "Payment refunded"}
