import { Link } from "react-router-dom";

import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    setUser(loggedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");

    navigate("/login");

    window.location.reload();
  };

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
          {user ? (
            <div className="profile-menu">
              <img src={user.photo} alt="profile" className="profile-pic" />

              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">👤</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
