import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <Navbar />

      <section className="success-page">
        <div className="success-box">
          <h1>🎉 Order Successful</h1>

          <p>Thank you for shopping with GreenBasket</p>

          <h3>🚚 Estimated Delivery : 30 mins</h3>

          <Link to="/">
            <button>🏠 Back To Home</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Success;
