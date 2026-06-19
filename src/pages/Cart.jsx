import Navbar from "../components/Navbar";

import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(ProductContext);

  const total = cart.reduce(
    (sum, product) => sum + product.price,

    0,
  );

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <h1>My Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-state">
            <h2>🛒 Your cart is empty</h2>
          </div>
        ) : (
          <>
            <div className="cart-grid">
              {cart.map((product) => (
                <div key={product.id} className="cart-card">
                  <img src={product.image} alt={product.name} />

                  <h3>{product.name}</h3>

                  <h4>₹{product.price}</h4>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total : ₹{total}</h2>

              <Link to="/checkout">
                <button>💳 Proceed To Checkout</button>
              </Link>
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Cart;
