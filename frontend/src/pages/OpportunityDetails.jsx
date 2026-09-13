import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function OpportunityDetails() {
  const { id } = useParams();

  const [opportunity, setOpportunity] = useState(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/opportunities")
      .then((response) => response.json())
      .then((data) => {
        const selectedOpportunity = data.find(
          (opportunity) => opportunity.id === Number(id)
        );

        setOpportunity(selectedOpportunity);
      })
      .catch((error) => {
        console.error("Error fetching opportunity:", error);
      });
  }, [id]);

  if (!opportunity) {
    return (
      <>
        <Navbar />

        <div className="profile-page">
          <h2>Opportunity not found.</h2>

          <Link to="/opportunities">
            Back to Opportunities
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

          <h1>{opportunity.title}</h1>

          <h2>{opportunity.company}</h2>

          <p>
            <strong>Location:</strong> {opportunity.location}
          </p>

          <p>
            <strong>Type:</strong> {opportunity.type}
          </p>

          <p>
            <strong>Posted by:</strong> {opportunity.postedBy}
          </p>

          <div className="profile-section">
            <h3>Description</h3>

            <p>{opportunity.description}</p>
          </div>

          <button
            onClick={() => setApplied(!applied)}
            className={applied ? "connected-button" : ""}
          >
            {applied ? "✓ Application Submitted" : "Apply Now"}
          </button>

          <br />

          <Link to="/opportunities">
            ← Back to Opportunities
          </Link>

        </div>
      </div>
    </>
  );
}

export default OpportunityDetails;