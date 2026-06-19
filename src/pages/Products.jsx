import Navbar from "../components/Navbar";

import ProductCard from "../components/ProductCard";

import { useState } from "react";

import Footer from "../components/Footer";

import { useSearchParams } from "react-router-dom";

function Products() {
  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All",
  );
  return (
    <>
      <Navbar />

      <section className="products-page">
        <div className="products-banner">
          <h1>All Products</h1>

          <p>Browse fresh groceries and everyday essentials.</p>
        </div>

        <div className="search-section">
          <h2>Find Your Favourite Groceries 🛒</h2>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="category-filter">
          <button onClick={() => setSelectedCategory("All")}>All</button>

          <button onClick={() => setSelectedCategory("Dairy")}>🥛 Dairy</button>

          <button onClick={() => setSelectedCategory("Bakery")}>
            🍞 Bakery
          </button>

          <button onClick={() => setSelectedCategory("Fruits")}>
            🍎 Fruits
          </button>

          <button onClick={() => setSelectedCategory("Vegetables")}>
            🥦 Vegetables
          </button>

          <button onClick={() => setSelectedCategory("Meat")}>🥩 Meat</button>

          <button onClick={() => setSelectedCategory("Drinks")}>
            🥤 Drinks
          </button>
        </div>

        <ProductCard search={search} selectedCategory={selectedCategory} />
      </section>

      <Footer />
    </>
  );
}

export default Products;
