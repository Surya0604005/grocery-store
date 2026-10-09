import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

function Navbar() {
  const navigate = useNavigate();
  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  const { wishlist, cart } = useContext(ProductContext);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

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
            ❤️ <span>{wishlist?.length ?? 0}</span>
          </Link>
        </li>

        <li>
          <Link to="/cart" className="nav-icon">
            🛒 <span>{cart?.length ?? 0}</span>
          </Link>
        </li>

        <li>
          {user ? (
            <div className="profile-menu">
              {user.photo && (
                <img src={user.photo} alt="Profile" className="profile-pic" />
              )}

              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" aria-label="Login">
              👤
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
