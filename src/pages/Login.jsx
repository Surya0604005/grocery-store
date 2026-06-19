import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="login-box">
          <h1>Welcome Back</h1>

          <p>Login to continue shopping</p>

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button>Login</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
