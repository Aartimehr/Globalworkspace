import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTournamentClick = (id) => {
    setSelectedTournament(id);
  };

  const handleRegisterClick = () => {
    navigate('/playerform'); // Navigate to the PlayerForm route
  };

  const tournament = dummyTournaments.find((t) => t.id === selectedTournament);

  return (
    <div className="flex w-full rounded-lg shadow-md overflow-hidden">
      <div className="w-1/2 bg-white p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Available Tournaments</h1>
        <div className="overflow-y-auto h-[400px]">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Tournament
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  City
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Starts
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {dummyTournaments.map((tournament) => (
                <tr
                  key={tournament.id}
                  onClick={() => handleTournamentClick(tournament.id)}
                  className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    {tournament.tournamentName}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {tournament.city}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {tournament.startDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 p-6 flex flex-col justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Tournament Details</h2>
        {tournament ? (
          <div className="bg-white rounded-md shadow-sm p-6 w-full flex flex-col justify-between items-start h-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{tournament.tournamentName}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">State:</span> {tournament.state}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">City:</span> {tournament.city}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Venue:</span> {tournament.stadiumPark}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Organizer:</span> {tournament.organizerName}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Starts:</span> {tournament.startDate}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Ends:</span> {tournament.endDate}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Category:</span> {tournament.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Ball Type:</span> {tournament.ballType}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Style:</span> {tournament.matchStyle}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Guidelines:</span> {tournament.guidelines}
              </p>
            </div>
            <button
              onClick={handleRegisterClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register Now
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-md shadow-sm p-6 w-full flex flex-col items-center justify-center h-full">
            <p className="text-sm text-gray-600 text-center mb-4">Click on a tournament on the left to see the details and register.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentDisplay;