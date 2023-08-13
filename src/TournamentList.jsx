import React from "react";

const TournamentDetail = ({ tournaments }) => {
  return (
    <div>
      <h2>Tournament Details</h2>
      {tournaments.map((tournament, index) => (
        <div key={index}>
          <p>Event: {tournament.event}</p>
          <p>Start Date: {tournament.startDate}</p>
          <p>End Date: {tournament.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default TournamentDetail;
