import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Opportunities() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");

 const [opportunities, setOpportunities] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/opportunities")
    .then((response) => response.json())
    .then((data) => {
      setOpportunities(data);
    })
    .catch((error) => {
      console.error("Error fetching opportunities:", error);
    });
}, []);
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      opportunity.title.toLowerCase().includes(searchText) ||
      opportunity.company.toLowerCase().includes(searchText) ||
      opportunity.postedBy.toLowerCase().includes(searchText);

    const matchesType =
      type === "All Types" || opportunity.type === type;

    const matchesLocation =
      location === "All Locations" ||
      opportunity.location === location;

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <>
      <Navbar />

      <div className="opportunities">
        <div className="opportunities-header">
          <h1>Career Opportunities</h1>

          <p>
            Discover internships, jobs, and referral opportunities shared by
            our alumni network.
          </p>
        </div>

        <div className="opportunity-filters">
          <input
            type="text"
            placeholder="Search jobs, companies, or alumni..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>All Types</option>
            <option>Internship</option>
            <option>Full Time</option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>All Locations</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="opportunity-list">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity, index) => (
              <div className="opportunity-card" key={index}>
                <div className="opportunity-info">
                  <h2>{opportunity.title}</h2>

                  <h3>{opportunity.company}</h3>

                  <p>📍 {opportunity.location}</p>

                  <p>👤 Posted by {opportunity.postedBy}</p>
                </div>

                <div className="opportunity-side">
                  <span className="opportunity-type">
                    {opportunity.type}
                  </span>

                  <Link to={`/opportunities/${opportunity.id}`}>
  <button>View Opportunity</button>
</Link>
                </div>
              </div>
            ))
          ) : (
            <p>No opportunities found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Opportunities;