from sqlalchemy import Column, Integer, String

from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Product(Base):

    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100))

    category = Column(String(100))

    price = Column(Integer)

    image = Column(String(255))


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(100))

    email = Column(String(100), unique=True)

    password = Column(String(255))


class Order(Base):

    __tablename__ = "orders"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    customer = Column(
        String(100)
    )

    phone = Column(
        String(20)
    )

    address = Column(
        String(255)
    )

    payment = Column(
        String(50)
    )

    status = Column(
        String(50)
    )
