import React, { useState } from "react";
import "./TournamentForm.css"; // Import the CSS file

const TournamentForm = ({ onSubmit }) => {
  const [event, setEvent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ event, startDate, endDate, participants: [] });
    setEvent("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="tournament-form">
      <h2>Create Tournament</h2>
      <form onSubmit={handleSubmit}>
        <label>Event:</label>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TournamentForm;
