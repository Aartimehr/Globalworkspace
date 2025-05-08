import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TournamentDisplay = () => {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/tournaments/');
        if (!response.ok) {
          throw new Error('Failed to fetch tournaments');
        }
        const data = await response.json();
        setTournaments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const handleTournamentClick = (id) => {
    setSelectedTournament(id);
  };

  const handleRegisterClick = () => {
    navigate('/playerform');
  };

  const tournament = tournaments.find((t) => t.id === selectedTournament);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-gray-600">Loading tournaments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

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
              {tournaments.map((tournament) => (
                <tr
                  key={tournament.id}
                  onClick={() => handleTournamentClick(tournament.id)}
                  className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    {tournament.tournament_name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {tournament.city}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    {tournament.start_date}
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{tournament.tournament_name}</h3>
              {tournament.banner_url && (
                <img 
                  src={tournament.banner_url} 
                  alt="Tournament Banner" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">State:</span> {tournament.state}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">City:</span> {tournament.city}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Venue:</span> {tournament.stadium_park}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Organizer:</span> {tournament.organizer_name}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Starts:</span> {tournament.start_date}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Ends:</span> {tournament.end_date}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Category:</span> {tournament.category}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Ball Type:</span> {tournament.ball_type}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Style:</span> {tournament.match_style}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Guidelines:</span> {tournament.guidelines}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Created:</span> {new Date(tournament.created_at).toLocaleDateString()}
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