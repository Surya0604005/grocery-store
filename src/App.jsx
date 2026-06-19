import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Products from "./pages/Products";

import ManageProducts from "./pages/ManageProducts";

import Cart from "./pages/Cart";

import Wishlist from "./pages/Wishlist";

import CategoryProducts from "./pages/CategoryProducts";

import Login from "./pages/Login";

import Checkout from "./pages/Checkout";

import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/products" element={<Products />} />

        <Route path="/manage-products" element={<ManageProducts />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/category/:categoryName" element={<CategoryProducts />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
