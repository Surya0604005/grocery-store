import { Link } from "react-router-dom";

import meat from "/meat.png";

import bakery from "/bakery.png";

import vegetables from "/vegetables.png";

import fruits from "/fruits.png";

import dairy from "/dairy.png";

import drinks from "/drinks.png";

function CategoryCards() {
  const categories = [
    {
      name: "Meat",

      image: meat,

      filter: "Meat",
    },

    {
      name: "Bakery",

      image: bakery,

      filter: "Bakery",
    },

    {
      name: "Vegetables",

      image: vegetables,

      filter: "Vegetables",
    },

    {
      name: "Fruits",

      image: fruits,

      filter: "Fruits",
    },

    {
      name: "Dairy",

      image: dairy,

      filter: "Dairy",
    },

    {
      name: "Drinks",

      image: drinks,

      filter: "Drinks",
    },
  ];

  return (
    <section className="categories">
      <h2>Shop By Category</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.filter}`}
            className="category-card"
          >
            <img src={category.image} alt={category.name} />

            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;
