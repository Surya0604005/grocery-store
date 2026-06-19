import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Fresh Groceries Delivered To Your Doorstep</h1>

        <p>
          Shop fresh fruits, vegetables, dairy, bakery items and daily
          essentials all in one place.
        </p>

        <button onClick={() => navigate("/products")}>Shop Now</button>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e"
          alt="Groceries"
        />
      </div>
    </section>
  );
}

export default Hero;
