import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password) {
      localStorage.setItem("loggedIn", "true");

      alert("Login successful!");

      navigate("/dashboard");
    } else {
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>AlumniConnect</h1>

        <h2>Welcome Back</h2>

        <p className="auth-subtitle">
          Login to continue your alumni journey
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit" className="auth-button">
            Login
          </button>

        </form>


        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;