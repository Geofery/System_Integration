from fastapi import FastAPI, HTTPException
import requests
from dynamicFileReader import read_file
from datetime import datetime

app = FastAPI()
acceptable_formats = ["csv", "json", "xml", "txt", "yaml"]

@app.get("/express/{file_format}")
async def get_express_data(file_format: str):
    responses = [requests.get(f'http://127.0.0.1:3000/{file_format}').json() for _ in [None] if file_format.lower() in acceptable_formats]
    if responses:
        return responses[0]
    else:
        raise HTTPException(status_code=404, detail="Valid file formats are: csv, json, xml, txt, or yaml")
    

@app.get("/fastapi/{file_format}")
async def get_file_data(file_format: str):
    data = read_file(file_format)
    return {'data': data}

@app.get("/datetime")
async def get_date_time():
    return {'datetime': datetime.now().strftime('%Y-%m-%d %H:%M:%S')}