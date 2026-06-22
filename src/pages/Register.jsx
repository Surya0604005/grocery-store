import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await api.post(
        "/register",

        {
          name,

          email,

          password,
        },
      );

      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.detail || "Registration failed");

      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="login-box">
          <h1>Create Account</h1>

          <p>Register to continue shopping</p>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={registerUser}>Register</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
