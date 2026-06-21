from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from database import engine

from models import Base

from routers import products

from routers import users

from routers import orders

app = FastAPI()

app.add_middleware(

    CORSMiddleware,

    allow_origins=["http://localhost:5173"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

Base.metadata.create_all(bind=engine)

app.include_router(products.router)

app.include_router(users.router)

app.include_router(orders.router)


@app.get("/")
def home():

    return {

        "message": "GreenBasket Backend Running"

    }
