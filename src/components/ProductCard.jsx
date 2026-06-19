import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import { FaHeart } from "react-icons/fa";

function ProductCard({
  search,

  selectedCategory,
}) {
  const products = [
    {
      id: 1,
      name: "Milk",
      category: "Dairy",
      price: 60,
      image: "/milk.png",
    },

    {
      id: 2,
      name: "Bread",
      category: "Bakery",
      price: 40,
      image: "/bread.png",
    },

    {
      id: 3,
      name: "Apple",
      category: "Fruits",
      price: 120,
      image: "/apple.png",
    },

    {
      id: 4,
      name: "Soft Drink",
      category: "Drinks",
      price: 80,
      image: "/drink.png",
    },
  ];

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
