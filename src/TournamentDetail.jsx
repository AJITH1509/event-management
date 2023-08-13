import React from "react";
import "./TournamentDetail.css"; // Import the CSS file

const TournamentDetail = ({ tournament }) => {
  return (
    <div className="tournament-details">
      <h2>Tournament Details</h2>
      <p>
        <strong>Event:</strong> {tournament.event}
      </p>
      <p>
        <strong>Start Date:</strong> {tournament.startDate}
      </p>
      <p>
        <strong>End Date:</strong> {tournament.endDate}
      </p>
    </div>
  );
};

export default TournamentDetail;
