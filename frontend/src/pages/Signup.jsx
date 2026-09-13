import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");

  const handleSignup = (e) => {
    e.preventDefault();

    // Check all fields
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Check email format
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Check if account already exists
    const existingUser = localStorage.getItem("user");

    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (user.email === email) {
        alert("An account with this email already exists.");
        return;
      }
    }

    // Save user
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name,
        email: email,
        role: role,
      })
    );

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>AlumniConnect</h1>

        <h2>Create Account</h2>

        <p className="auth-subtitle">
          Join your college alumni network
        </p>


        <form onSubmit={handleSignup}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <label>Account Type</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Student">Student</option>
            <option value="Alumni">Alumni</option>
          </select>


          <button type="submit" className="auth-button">
            Create Account
          </button>

        </form>


        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;