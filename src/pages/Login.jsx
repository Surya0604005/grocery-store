import { auth, provider } from "../firebase";

import { signInWithPopup } from "firebase/auth";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(
        auth,

        provider,
      );

      console.log(result.user);

      localStorage.setItem(
        "user",

        JSON.stringify({
          name: result.user.displayName,

          email: result.user.email,

          photo: result.user.photoURL,
        }),
      );

      alert(`Welcome ${result.user.displayName}`);
      window.location.href = "/";
    } catch (error) {
      console.log(error);

      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="login-box">
          <h1>Welcome Back</h1>

          <p>Login to continue shopping</p>

          <button className="google-btn" onClick={googleLogin}>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width="20"
            />
            Continue with Google
          </button>

          <div className="divider">OR</div>

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
