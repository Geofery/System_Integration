from fastapi import FastApi 

app = FastApi()

@app.get('/')
def root():
    return ''