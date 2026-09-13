import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function AlumniProfile() {
  const { id } = useParams();

  const [alumni, setAlumni] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/alumni")
      .then((response) => response.json())
      .then((data) => {
        const person = data.find(
          (alumni) => alumni.id === Number(id)
        );

        setAlumni(person);
      })
      .catch((error) => {
        console.error("Error fetching alumni:", error);
      });
  }, [id]);

  if (!alumni) {
    return (
      <>
        <Navbar />

        <div className="profile-page">
          <h2>Alumni profile not found.</h2>

          <Link to="/alumni">
            Back to Alumni Directory
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-card">

          <div className="profile-circle">
            {alumni.name.charAt(0)}
          </div>

          <h1>{alumni.name}</h1>

          <h2>{alumni.role}</h2>

          <p>
            <strong>Company:</strong> {alumni.company}
          </p>

          <p>
            <strong>Industry:</strong> {alumni.industry}
          </p>

          <p>
            <strong>Experience:</strong> {alumni.experience}
          </p>

          <p>
            <strong>Education:</strong> {alumni.education}
          </p>

          <div className="profile-section">
            <h3>About</h3>
            <p>{alumni.about}</p>
          </div>

          <div className="profile-section">
            <h3>Skills</h3>

            <div className="skills-container">
              {alumni.skills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

         <button
  onClick={() => setConnected(!connected)}
  className={connected ? "connected-button" : ""}
>
  {connected ? "✓ Request Sent" : "Connect with Alumni"}
</button>

          <br />

          <Link to="/alumni">
            ← Back to Alumni Directory
          </Link>

        </div>
      </div>
    </>
  );
}

export default AlumniProfile;