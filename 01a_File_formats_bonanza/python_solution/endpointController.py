from fastapi import FastAPI, HTTPException
import requests

app = FastAPI()
acceptable_formats = ["csv", "json", "xml", "txt", "yaml"]

@app.get("/{fileformat}")
async def get_express_data(fileformat: str):
    [response := requests.get(f'http://127.0.0.1:3000/{fileformat}').json() for _ in [None] if fileformat.lower() in acceptable_formats]
    if "response" in locals():
        return response
    else:
        raise HTTPException(status_code=404, detail="Valid fileformats are: csv, json, xml, txt or yaml")