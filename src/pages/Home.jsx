import Navbar from "../components/Navbar";

import TopSlider from "../components/TopSlider";

import Hero from "../components/Hero";

import CategoryCards from "../components/CategoryCards";

import ProductCard from "../components/ProductCard";

import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <TopSlider />

      <Hero />

      <CategoryCards />

      <section className="featured-products">
        <h2>Featured Products</h2>

        <ProductCard search="" selectedCategory="All" />
      </section>

      <Footer />
    </>
  );
}

export default Home;
