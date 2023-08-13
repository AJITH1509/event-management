const ParticipantList = ({ participants }) => {
  return (
    <div>
      <h2>Participants</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ParticipantList;
