import { useState } from "react";

const ParticipantForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age });
    setName("");
    setAge("");
  };

  return (
    <div>
      <h2>Create Participant</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
export default ParticipantForm;
