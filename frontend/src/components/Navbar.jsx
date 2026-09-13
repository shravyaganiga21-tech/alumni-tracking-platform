import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/dashboard" className="logo">
        AlumniConnect
      </Link>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/alumni">Alumni</Link>
        <Link to="/opportunities">Opportunities</Link>
        <Link to="/events">Events</Link>

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

    </nav>
  );
}

export default Navbar;