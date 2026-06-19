import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2>🛒 Grocery Store</h2>

          <p>
            Your trusted destination for fresh fruits, vegetables, dairy
            products and everyday essentials.
          </p>

          <div className="social-icons">
            <div>
              <FaInstagram />
            </div>

            <div>
              <FaYoutube />
            </div>

            <div>
              <FaFacebookF />
            </div>

            <div>
              <FaWhatsapp />
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3>Categories</h3>

          <p>🥩 Meat & Seafood</p>

          <p>🍞 Bakery</p>

          <p>🥦 Vegetables</p>

          <p>🥛 Dairy</p>

          <p>🥤 Drinks</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/wishlist">Wishlist</Link>

          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-col">
          <h3>Stay in the Loop 🥬</h3>

          <p>Weekly grocery offers & fresh product updates.</p>

          <input type="email" placeholder="your@email.com" />

          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Grocery Store. Made with ❤️ for shoppers.
      </div>
    </footer>
  );
}

export default Footer;
