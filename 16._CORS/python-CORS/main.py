from datetime import datetime
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI() 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.get("/timestamp")
def get_current_time():
    return {"time": datetime.now()}
