import { useEffect, useState } from "react";

import api from "../services/api";

import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import { FaHeart } from "react-icons/fa";

function ProductCard({
  search = "",

  selectedCategory = "All",
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("/products")

      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const {
    wishlist,

    setWishlist,

    cart,

    setCart,
  } = useContext(ProductContext);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const toggleCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name

        .toLowerCase()

        .includes(search.toLowerCase()),
  );

  return (
    <section className="products">
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div
              className={`wishlist-icon

${wishlist.some((item) => item.id === product.id) ? "active" : ""}`}
              onClick={() => toggleWishlist(product)}
            >
              <FaHeart />
            </div>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <h4>₹{product.price}</h4>

            <button
              className={`cart-btn

${cart.some((item) => item.id === product.id) ? "active" : ""}`}
              onClick={() => toggleCart(product)}
            >
              🛒 Add To Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
