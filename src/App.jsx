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

import { Navigate } from "react-router-dom";

import Register from "./pages/Register";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            localStorage.getItem("user") ? <Home /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            localStorage.getItem("user") ? <Navigate to="/" /> : <Login />
          }
        />

        <Route path="/products" element={<Products />} />

        <Route
          path="/manage-products"
          element={
            <ProtectedRoute>
              <ManageProducts />
            </ProtectedRoute>
          }
        />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/category/:categoryName" element={<CategoryProducts />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
