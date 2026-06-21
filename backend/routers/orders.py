from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from database import get_db

from models import Order

from schemas import OrderCreate

router = APIRouter()


@router.post("/orders")
def add_order(

    order: OrderCreate,

    db: Session = Depends(get_db)

):

    new_order = Order(

        customer=order.customer,

        phone=order.phone,

        address=order.address,

        payment=order.payment,

        status=order.status

    )

    db.add(new_order)

    db.commit()

    db.refresh(new_order)

    return {

        "message": "Order placed"

    }


@router.get("/orders")
def get_orders(

    db: Session = Depends(get_db)

):

    return db.query(Order).all()
