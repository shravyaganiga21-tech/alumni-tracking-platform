import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <h1>
            Welcome {user ? user.name : ""} 👋
          </h1>

          {user && (
            <p>
              You are logged in as <strong>{user.role}</strong>.
            </p>
          )}

          <p>
            Connect with alumni, discover opportunities, and grow your career.
          </p>
        </div>


        {/* Quick Statistics */}
        <div className="dashboard-stats">

          <div className="stat-card">
            <h2>🎓</h2>
            <h3>3+</h3>
            <p>Alumni</p>
          </div>

          <div className="stat-card">
            <h2>💼</h2>
            <h3>3+</h3>
            <p>Opportunities</p>
          </div>

          <div className="stat-card">
            <h2>📅</h2>
            <h3>3+</h3>
            <p>Upcoming Events</p>
          </div>

          <div className="stat-card">
            <h2>🤝</h2>
            <h3>10+</h3>
            <p>Connections</p>
          </div>

        </div>


        {/* Dashboard Cards */}
        <div className="dashboard-cards">

          {/* STUDENT DASHBOARD */}
          {(!user || user.role === "Student") && (
            <>
              <div className="dashboard-card">
                <h2>🎓 Alumni Network</h2>

                <p>
                  Find alumni based on company, industry, skills, and
                  experience.
                </p>

                <Link to="/alumni">
                  <button>Explore Alumni</button>
                </Link>
              </div>


              <div className="dashboard-card">
                <h2>💼 Opportunities</h2>

                <p>
                  Discover internships, jobs, referrals, and career
                  opportunities.
                </p>

                <Link to="/opportunities">
                  <button>View Opportunities</button>
                </Link>
              </div>


              <div className="dashboard-card">
                <h2>📅 Events</h2>

                <p>
                  Join alumni meetups, workshops, mentoring sessions, and
                  events.
                </p>

                <Link to="/events">
                  <button>Explore Events</button>
                </Link>
              </div>
            </>
          )}


          {/* ALUMNI DASHBOARD */}
          {user && user.role === "Alumni" && (
            <>
              <div className="dashboard-card">
                <h2>👥 Alumni Network</h2>

                <p>
                  Explore the alumni community and connect with fellow
                  professionals.
                </p>

                <Link to="/alumni">
                  <button>View Alumni</button>
                </Link>
              </div>


              <div className="dashboard-card">
                <h2>💼 Opportunities</h2>

                <p>
                  Share jobs, internships, and referral opportunities with
                  students.
                </p>

                <Link to="/opportunities">
                  <button>Manage Opportunities</button>
                </Link>
              </div>


              <div className="dashboard-card">
                <h2>📅 Events</h2>

                <p>
                  Participate in and organize networking sessions and
                  mentoring events.
                </p>

                <Link to="/events">
                  <button>Manage Events</button>
                </Link>
              </div>
            </>
          )}

        </div>


        {/* Career Connections */}
        <div className="dashboard-highlight">
          {/* Quick Actions */}
<div className="dashboard-highlight">
  <h2>⚡ Quick Actions</h2>

  <div className="quick-actions">

    <Link to="/alumni">
      <button>🔎 Find Alumni</button>
    </Link>

    <Link to="/opportunities">
      <button>💼 Find Opportunities</button>
    </Link>

    <Link to="/events">
      <button>📅 Browse Events</button>
    </Link>

  </div>
</div>
          <h2>🌟 Career Connections</h2>

          <p>
            AlumniConnect helps students get guidance and opportunities
            directly from experienced alumni.
          </p>
        </div>

      </div>
    </>
  );
}

export default Dashboard;