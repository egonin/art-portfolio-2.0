from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Remplacez "*" par l'URL de votre frontend si nécessaire
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/data")
async def get_data():
    with open("../data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    print("Data :", data)
    return JSONResponse(content=data)
