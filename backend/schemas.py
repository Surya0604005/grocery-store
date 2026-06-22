from pydantic import BaseModel


class ProductCreate(BaseModel):

    name: str

    category: str

    price: int

    image: str


class ProductResponse(ProductCreate):

    id: int

    class Config:

        from_attributes = True


class UserCreate(BaseModel):

    name: str

    email: str

    password: str


class UserLogin(BaseModel):

    email: str

    password: str


class OrderCreate(BaseModel):

    customer: str

    total: int

    phone: str

    address: str

    payment: str

    status: str
