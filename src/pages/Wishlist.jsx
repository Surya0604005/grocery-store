import Navbar from "../components/Navbar";

import { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

import Footer from "../components/Footer";

function Wishlist() {
  const { wishlist } = useContext(ProductContext);

  return (
    <>
      <Navbar />

      <section className="wishlist-page">
        <h1>My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="empty-state">
            <h2>❤️ Your wishlist is empty</h2>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <div key={product.id} className="wishlist-card">
                <img src={product.image} alt={product.name} />

                <h3>{product.name}</h3>

                <h4>₹{product.price}</h4>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Wishlist;
