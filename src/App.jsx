import React, { useState } from "react";
import TournamentList from "./TournamentList";
import TournamentDetail from "./TournamentDetail";
import TournamentForm from "./TournamentForm";
import ParticipantList from "./ParticipantList";
import ParticipantForm from "./ParticipantForm";

const App = () => {
  const [tournaments, setTournaments] = useState(data);
  const [selectedTournament, setSelectedTournament] = useState(null);

  const handleSelectTournament = (tournament) => {
    setSelectedTournament(tournament);
  };

  const handleCreateTournament = (newTournament) => {
    setTournaments([...tournaments, newTournament]);
  };

  const handleCreateParticipant = (newParticipant) => {
    const updatedTournaments = tournaments.map((tournament) => {
      if (tournament === selectedTournament) {
        return {
          ...tournament,
          participants: [...tournament.participants, newParticipant],
        };
      }
      return tournament;
    });

    setTournaments(updatedTournaments);
  };

  return (
    <div>
      <h1>Tournament Management App</h1>
      <TournamentList
        tournaments={tournaments}
        onSelectTournament={handleSelectTournament}
      />
      {/* <TournamentDetail tournament={selectedTournament} /> */}
      <TournamentForm onSubmit={handleCreateTournament} />

      {selectedTournament && (
        <div>
          <ParticipantList participants={selectedTournament.participants} />
          <ParticipantForm
            onSubmit={(newParticipant) =>
              handleCreateParticipant(newParticipant)
            }
          />
        </div>
      )}
    </div>
  );
};

const data = [
  {
    event: "Tech Buzz",
    startDate: "2023-08-28",
    endDate: "2023-08-29",
    participants: [{ name: "ajith", age: "26" }],
  },
];

export default App;
