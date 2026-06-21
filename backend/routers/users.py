from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from database import get_db

from models import User

from schemas import UserCreate

router = APIRouter()


@router.post("/register")
def register(

    user: UserCreate,

    db: Session = Depends(get_db)

):

    new_user = User(

        name=user.name,

        email=user.email,

        password=user.password

    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {

        "message": "Registered successfully"

    }
