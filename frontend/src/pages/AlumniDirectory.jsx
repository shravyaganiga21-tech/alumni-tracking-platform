import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function AlumniDirectory() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All Industries");

  
const [alumni, setAlumni] = useState([]);
useEffect(() => {
  fetch("http://localhost:5000/api/alumni")
    .then((response) => response.json())
    .then((data) => {
      setAlumni(data);
    })
    .catch((error) => {
      console.error("Error fetching alumni:", error);
    });
}, []);
  const filteredAlumni = alumni.filter((person) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      person.name.toLowerCase().includes(searchText) ||
      person.company.toLowerCase().includes(searchText) ||
      person.role.toLowerCase().includes(searchText);

    const matchesIndustry =
      industry === "All Industries" ||
      person.industry === industry;

    return matchesSearch && matchesIndustry;
  });

  return (
    <>
      <Navbar />

      <div className="directory">
        <div className="directory-header">
          <h1>Alumni Directory</h1>

          <p>
            Discover alumni, learn from their experience, and build meaningful
            career connections.
          </p>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search by name, company, or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option>All Industries</option>
            <option>Technology</option>
            <option>Consulting</option>
            <option>Finance</option>
            <option>Healthcare</option>
          </select>
        </div>

        <div className="alumni-grid">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((person, index) => (
              <div className="alumni-card" key={index}>
                <div className="profile-circle">
                  {person.name.charAt(0)}
                </div>

                <h2>{person.name}</h2>

                <p className="role">{person.role}</p>

                <p>
                  <strong>Company:</strong> {person.company}
                </p>

                <p>
                  <strong>Industry:</strong> {person.industry}
                </p>

                <p>
                  <strong>Experience:</strong> {person.experience}
                </p>

                <Link to={`/alumni/${person.id}`}>
  <button>View Profile</button>
</Link>
              </div>
            ))
          ) : (
            <p>No alumni found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AlumniDirectory;