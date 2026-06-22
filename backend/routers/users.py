from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from database import get_db

from models import User

from schemas import UserCreate, UserLogin


router = APIRouter()


@router.post("/register")
def register(

    user: UserCreate,

    db: Session = Depends(get_db)

):

    existing = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing:

        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

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


@router.post("/login")
def login(

    user: UserLogin,

    db: Session = Depends(get_db)

):

    existing = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not existing:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if existing.password != user.password:

        raise HTTPException(
            status_code=401,
            detail="Wrong password"
        )

    return {

        "name": existing.name,

        "email": existing.email

    }
