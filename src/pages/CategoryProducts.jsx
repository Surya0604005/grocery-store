import Navbar from "../components/Navbar";

import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { categoryName } = useParams();

  const products = [
    {
      id: 1,

      name: "Chicken",

      category: "meat-seafood",
    },

    {
      id: 2,

      name: "Bread",

      category: "bakery",
    },

    {
      id: 3,

      name: "Tomato",

      category: "vegetables",
    },

    {
      id: 4,

      name: "Apple",

      category: "fruits",
    },

    {
      id: 5,

      name: "Milk",

      category: "dairy",
    },

    {
      id: 6,

      name: "Soft Drink",

      category: "drinks",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === categoryName,
  );

  return (
    <>
      <Navbar />

      <section className="category-products">
        <h1>{categoryName}</h1>

        <div className="category-products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="category-product-card">
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CategoryProducts;
