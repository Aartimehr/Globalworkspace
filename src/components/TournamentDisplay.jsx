// tournamentdisplay.jsx
import { useState } from 'react';

const dummyTournaments = [
  {
    id: 1,
    tournamentName: 'Summer Bash 2025',
    state: 'Delhi',
    city: 'New Delhi',
    stadiumPark: 'Feroz Shah Kotla Stadium',
    organizerName: 'Delhi Cricket Association',
    startDate: '2025-06-15',
    endDate: '2025-06-30',
    category: 'Open',
    ballType: 'Leather',
    matchStyle: 'T20',
    guidelines: 'Standard T20 rules apply. Matches will be held in the evening.',
    banner: null,
  },
  {
    id: 2,
    tournamentName: 'Corporate Cup',
    state: 'Maharashtra',
    city: 'Mumbai',
    stadiumPark: 'Wankhede Stadium',
    organizerName: 'Mumbai Cricket Association',
    startDate: '2025-07-01',
    endDate: '2025-07-15',
    category: 'Corporate',
    ballType: 'Tennis',
    matchStyle: 'ODI',
    guidelines: 'Corporate teams only, specific rules apply. Lunch will be provided.',
    banner: null,
  },
  {
    id: 3,
    tournamentName: 'Regional Rumble',
    state: 'Karnataka',
    city: 'Bangalore',
    stadiumPark: 'M. Chinnaswamy Stadium',
    organizerName: 'Karnataka State Cricket Association',
    startDate: '2025-08-01',
    endDate: '2025-08-15',
    category: 'Regional',
    ballType: 'Leather',
    matchStyle: 'Test',
    guidelines: 'Teams from South India only. Matches will be played over 5 days.',
    banner: null,
  },
  {
    id: 4,
    tournamentName: 'U19 Challenge',
    state: 'Tamil Nadu',
    city: 'Chennai',
    stadiumPark: 'M.A. Chidambaram Stadium',
    organizerName: 'Tamil Nadu Cricket Association',
    startDate: '2025-09-01',
    endDate: '2025-09-15',
    category: 'Under 19',
    ballType: 'Leather',
    matchStyle: 'ODI',
    guidelines: 'Under 19 players only. Player verification required.',
    banner: null,
  },
  {
    id: 5,
    tournamentName: 'Weekend Warriors',
    state: 'West Bengal',
    city: 'Kolkata',
    stadiumPark: 'Eden Gardens',
    organizerName: 'Cricket Association of Bengal',
    startDate: '2025-10-01',
    endDate: '2025-10-15',
    category: 'Open',
    ballType: 'Tennis',
    matchStyle: 'T20',
    guidelines: 'Weekend matches only. Limited spots available.',
    banner: null,
  },
];

const TournamentDisplay = () => {
  const [selectedTournament, setSelectedTournament] = useState(null);

  const handleTournamentClick = (id) => {
    setSelectedTournament(id);
  };

  const tournament = dummyTournaments.find((t) => t.id === selectedTournament);

  return (
    <div className="flex w-full">
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Registered Tournaments</h1>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Tournament Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                City
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Start Date
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyTournaments.map((tournament) => (
              <tr
                key={tournament.id}
                onClick={() => handleTournamentClick(tournament.id)}
                className="cursor-pointer hover:bg-gray-50"
              >
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{tournament.tournamentName}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{tournament.city}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{tournament.startDate}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-start items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Or Host Your Own</h2>
        {tournament && (
          <div className="bg-white rounded shadow-md p-6 w-full h-full flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{tournament.tournamentName}</h3>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">State:</span> {tournament.state}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">City:</span> {tournament.city}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Stadium/Park:</span> {tournament.stadiumPark}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Organizer:</span> {tournament.organizerName}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Start Date:</span> {tournament.startDate}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">End Date:</span> {tournament.endDate}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Category:</span> {tournament.category}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Ball Type:</span> {tournament.ballType}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Match Style:</span> {tournament.matchStyle}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Guidelines:</span> {tournament.guidelines}
            </p>
          </div>
        )}
        {!tournament && (
          <div className="bg-white rounded shadow-md p-6 w-full h-full flex flex-col justify-center items-center">
            <p className="text-lg text-gray-700 text-center">Click on a tournament name on the left to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentDisplay;