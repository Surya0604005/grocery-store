import { Link } from "react-router-dom";

import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

function Navbar() {
  const {
    wishlist,

    cart,
  } = useContext(ProductContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🍃 GreenBasket
      </Link>

      <ul className="nav-links">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/manage-products">Manage Products</Link>
          </li>

          <li>
            <Link to="/wishlist" className="nav-icon">
              ❤️
              <span>{wishlist.length}</span>
            </Link>
          </li>

          <li>
            <Link to="/cart" className="nav-icon">
              🛒
              <span>{cart.length}</span>
            </Link>
          </li>

          <li>
            <Link to="/login">👤</Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
