from fastapi import FastAPI, Request, Response
from mysql.connector import (connection)
from dotenv import dotenv_values
import requests

#poetry init-n
#poetry add uvicorn fastapi
#poetry shell
#uvicorn main:app --reload 
#ssh -R 80:localhost:8000 serveo.net

env_variables = dotenv_values()
app = FastAPI()

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
@app.get("/ping")
async def get_subscribers():
    cursor = cnx.cursor()
    query = ("SELECT * FROM events")
    cursor.execute(query)
    subscribers = cursor.fetchall()
    cursor.close()
    for subscriber in subscribers:
         requests.post(subscriber[2], json={"event": subscriber[1]})
    return {"data": "subscribers notified"} 

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