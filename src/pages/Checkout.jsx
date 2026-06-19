import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Checkout() {
  return (
    <>
      <Navbar />

      <section className="checkout-page">
        <div className="checkout-box">
          <h1>Checkout</h1>

          <input type="text" placeholder="Full Name" />

          <input type="text" placeholder="Phone Number" />

          <textarea placeholder="Delivery Address"></textarea>

          <h2>Select Payment Method</h2>

          <div className="payment-options">
            <label className="payment-option">
              <input type="radio" name="payment" />

              <span>📱 UPI</span>
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />

              <span>💳 Card</span>
            </label>

            <label className="payment-option">
              <input type="radio" name="payment" />

              <span>💵 Cash On Delivery</span>
            </label>
          </div>

          <Link to="/success">
            <button>Proceed To Payment</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;
