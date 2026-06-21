import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

function Checkout() {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState("");

  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");

  const [payment, setPayment] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setCustomer(user.name);
    }
  }, []);

  const placeOrder = async () => {
    if (!phone || !address || !payment) {
      alert("Fill all fields");

      return;
    }

    try {
      await api.post(
        "/orders",

        {
          customer,

          phone,

          address,

          payment,

          status: "Pending",
        },
      );

      alert("Order placed successfully");

      navigate("/success");
    } catch (error) {
      console.log(error);

      alert("Order failed");
    }
  };

  return (
    <>
      <Navbar />

      <section className="checkout-page">
        <div className="checkout-box">
          <h1>Checkout</h1>

          <input type="text" value={customer} readOnly />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <h2>Select Payment Method</h2>

          <div className="payment-options">
            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="UPI"
                onChange={(e) => setPayment(e.target.value)}
              />

              <span>📱 UPI</span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="Card"
                onChange={(e) => setPayment(e.target.value)}
              />

              <span>💳 Card</span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="Cash On Delivery"
                onChange={(e) => setPayment(e.target.value)}
              />

              <span>💵 Cash On Delivery</span>
            </label>
          </div>

          <button onClick={placeOrder}>Proceed To Payment</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Checkout;
