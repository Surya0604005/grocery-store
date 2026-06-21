from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from database import get_db

from models import Product

from schemas import ProductCreate


router = APIRouter()


@router.post("/products")
def add_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    new_product = Product(
        name=product.name,
        category=product.category,
        price=product.price,
        image=product.image
    )

    db.add(new_product)

    db.commit()

    db.refresh(new_product)

    return {
        "message": "Product added successfully"
    }


@router.get("/products")
def get_products(
    db: Session = Depends(get_db)
):

    return db.query(Product).all()


@router.delete("/products/{id}")
def delete_product(
    id: int,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == id
    ).first()

    if product:

        db.delete(product)

        db.commit()

    return {
        "message": "Deleted"
    }


@router.put("/products/{id}")
def update_product(
    id: int,
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    existing = db.query(Product).filter(
        Product.id == id
    ).first()

    if existing:

        existing.name = product.name

        existing.category = product.category

        existing.price = product.price

        existing.image = product.image

        db.commit()

        db.refresh(existing)

    return existing
