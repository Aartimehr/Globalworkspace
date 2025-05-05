import { useState, useCallback, useMemo } from 'react'; // Added useMemo
import { Search, Users, MapPin, BarChart, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Dummy Data Generation (No changes needed here, but ensure it provides consistent data)
const generateDummyPlayers = () => {
    const states = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal'];
    const regions = ['North', 'West', 'South', 'East', 'Central'];
    const indianNames = [
        'Virat Kohli', 'Rohit Sharma', 'MS Dhoni', 'Sachin Tendulkar', 'Yuvraj Singh',
        'Suresh Raina', 'Jasprit Bumrah', 'Hardik Pandya', 'Ravindra Jadeja', 'KL Rahul',
        'Rishabh Pant', 'Shikhar Dhawan', 'Ajinkya Rahane', 'VVS Laxman', 'Sourav Ganguly',
        'Anil Kumble', 'Harbhajan Singh', 'Zaheer Khan', 'Kapil Dev', 'Irfan Pathan'
    ];
    const players = [];
    const numPlayers = 20;

    for (let i = 0; i < numPlayers; i++) {
        const runs = Math.floor(Math.random() * 500);
        const balls = Math.floor(Math.random() * 300) + 50;
        const wickets = Math.floor(Math.random() * 10);
        const ballsBowled = Math.floor(Math.random() * 200);
        const runsConceded = Math.floor(Math.random() * 300);

        players.push({
            id: i + 1,
            name: indianNames[i % indianNames.length], // Use modulo to avoid running out of names if numPlayers > names.length
            state: states[Math.floor(Math.random() * states.length)],
            region: regions[Math.floor(Math.random() * regions.length)],
            tournamentsPlayed: Math.floor(Math.random() * 10) + 1,
            runs,
            balls,
            sixes: Math.floor(Math.random() * 20),
            fours: Math.floor(Math.random() * 30),
            wickets,
            ballsBowled,
            runsConceded,
        });
    }
    return players;
};

// Calculate Stats (No changes needed here)
const calculateStats = (player) => {
    const strikeRate = player.balls > 0 ? (player.runs / player.balls) * 100 : 0;
    const economy = player.ballsBowled > 0 ? player.runsConceded / (player.ballsBowled / 6) : 0;
    return {
        ...player,
        strikeRate: parseFloat(strikeRate.toFixed(2)),
        economy: parseFloat(economy.toFixed(2)),
    };
};


const Leaderboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // Memoize the initial full list of players so we don't regenerate it constantly
    // and can always filter from the original source.
    const initialPlayers = useMemo(() => generateDummyPlayers().map(calculateStats), []);

    const [players, setPlayers] = useState(initialPlayers); // Start with the full list
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('name'); // Removed TS type hint
    const [message, setMessage] = useState(null); // Use null for no message

    // Simulate fetching data - **Crucially, filter from initialPlayers**
    const fetchData = useCallback((query, type) => {
        setLoading(true);
        setMessage(null); // Clear previous messages

        // Simulate API delay
        setTimeout(() => {
            let results = [];
            const lowerCaseQuery = query.toLowerCase().trim();

            if (type === 'name') {
                if (!lowerCaseQuery) {
                    // If search query is empty, show all players or a message
                    results = [...initialPlayers]; // Show all
                    // OR: setMessage("Please enter a player name."); results = [];
                } else {
                    // Find players whose names *include* the query (more user-friendly)
                    const foundPlayers = initialPlayers.filter(p =>
                        p.name.toLowerCase().includes(lowerCaseQuery)
                    );
                    if (foundPlayers.length > 0) {
                        results = foundPlayers; // Show matching players
                    } else {
                        setMessage(`Player matching "${query}" not registered with us.`);
                        results = [];
                    }
                }
            } else { // type === 'location'
                const parts = query.split(',').map(s => s.trim().toLowerCase());
                const stateQuery = parts[0] || '';
                const regionQuery = parts[1] || '';

                if (!stateQuery && !regionQuery) {
                    // If location query is empty, show all or a message
                     results = [...initialPlayers]; // Show all
                    // OR: setMessage("Please enter State, Region"); results = [];
                } else {
                     const filteredPlayers = initialPlayers.filter(p => {
                         const pStateLower = p.state.toLowerCase();
                         const pRegionLower = p.region.toLowerCase();
                         // Match if state query exists and matches OR region query exists and matches
                         // Modify this logic if you need *both* to match strictly
                         const stateMatch = stateQuery ? pStateLower.includes(stateQuery) : false;
                         const regionMatch = regionQuery ? pRegionLower.includes(regionQuery) : false;
                         // Adjust logic: match if EITHER state or region query is empty OR it matches the player's data
                         const matchState = !stateQuery || pStateLower.includes(stateQuery);
                         const matchRegion = !regionQuery || pRegionLower.includes(regionQuery);
                         // Require both if both are provided
                         return matchState && matchRegion;
                     });

                    if (filteredPlayers.length > 0) {
                        // Sort by a relevant metric, e.g., Strike Rate descending
                        results = [...filteredPlayers].sort((a, b) => b.strikeRate - a.strikeRate);
                    } else {
                        setMessage(`No players found for location matching "${query}".`);
                        results = [];
                    }
                }
            }
            setPlayers(results); // Update the displayed players
            setLoading(false);
        }, 500); // Simulated 500ms delay
    }, [initialPlayers]); // Depend on the memoized initialPlayers list

    // Handle search submission
    const handleSearch = () => {
        // Trim query before searching
        fetchData(searchQuery.trim(), searchType);
    };

    // Clear search and reset to the full initial data
    const clearSearch = useCallback(() => {
        setSearchQuery('');
        setPlayers(initialPlayers); // Reset using the memoized initial list
        setMessage(null);
        setSearchType('name'); // Reset search type as well
    }, [initialPlayers]); // Depend on initialPlayers

    // No initial fetch needed in useEffect if using dummy data initialized in useMemo/useState
    // useEffect(() => {
    //   // If fetching from an API initially, do it here
    // }, []);

    return (
        // Added min-h-screen and padding
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 text-white">
            {/* // Use max-w-6xl or similar for wider tables, mx-auto to center */}
            <div className="max-w-6xl mx-auto space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-6">
                    Leaderboard
                </h1>

                {/* Search Bar - Adjusted layout for responsiveness */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6">
                    {/* Input Group */}
                    <div className="flex-grow flex items-center gap-2 border border-gray-700 rounded-lg px-4 py-2 bg-black/30 focus-within:ring-2 focus-within:ring-yellow-500">
                        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder={searchType === 'name' ? 'Search by Player Name...' : 'Search by State, Region... (e.g., Delhi, North)'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent text-white border-none focus:outline-none placeholder:text-gray-500"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                    </div>

                    {/* Search Type Buttons */}
                    <div className="flex items-center justify-center gap-2 flex-shrink-0">
                        <button
                            onClick={() => setSearchType('name')}
                             // Added conditional styling for active button
                            className={`flex items-center px-4 py-2 border rounded-md transition-colors duration-200 ${
                                searchType === 'name'
                                ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400 ring-1 ring-yellow-500'
                                : 'bg-black/20 text-gray-300 border-gray-700 hover:bg-gray-700/50 hover:border-gray-500'
                            }`}
                        >
                            <Users className='mr-2 w-4 h-4'/>
                            Name
                        </button>
                        <button
                            onClick={() => setSearchType('location')}
                            className={`flex items-center px-4 py-2 border rounded-md transition-colors duration-200 ${
                                searchType === 'location'
                                ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400 ring-1 ring-yellow-500'
                                : 'bg-black/20 text-gray-300 border-gray-700 hover:bg-gray-700/50 hover:border-gray-500'
                            }`}
                        >
                            <MapPin className='mr-2 w-4 h-4'/>
                            Location
                        </button>
                    </div>

                     {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-2 flex-shrink-0">
                        <button
                            onClick={handleSearch}
                            className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Searching...
                                </>
                            ) : (
                                'Search'
                            )}
                        </button>
                        <button
                            onClick={clearSearch}
                            className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-300"
                            disabled={loading} // Disable clear while loading too
                        >
                            Clear
                        </button>
                     </div>
                </div>

                {/* Display message if set */}
                <AnimatePresence>
                    {message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                            className="bg-red-900/30 border border-red-700/50 text-red-300 px-4 py-3 rounded-lg text-center font-medium"
                        >
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Leaderboard Table - Use standard HTML table elements */}
                {/* Conditionally render table wrapper only if NOT loading and there's NO message OR if there ARE players */}
                {!loading && !message && players.length > 0 && (
                    <div className="bg-black/30 border border-gray-700 rounded-lg shadow-xl overflow-x-auto"> {/* Added overflow-x-auto for smaller screens */}
                        <table className="w-full min-w-[800px] table-fixed"> {/* min-w ensures table doesn't collapse too much */}
                             <thead className='bg-gray-800/50'> {/* Changed from <tableheader> */}
                                <tr> {/* Changed from <tablerow> */}
                                    {/* Use <th> for header cells */}
                                    {/* Added Padding (p-3), text alignment, and fixed width where appropriate */}
                                    <th className="p-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider w-[180px]"> {/* Width example */}
                                        <div className='flex items-center gap-2'>
                                            <Users className='w-4 h-4'/> Player
                                        </div>
                                    </th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider w-[120px]">State</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider w-[120px]">Region</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider w-[140px]">
                                        <div className='flex items-center gap-1 justify-center'>
                                            <BarChart className='w-4 h-4'/> Tournaments
                                        </div>
                                    </th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">Runs</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">Balls</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">SR</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">6s</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">4s</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">Wkts</th>
                                    <th className="p-3 text-center text-sm font-semibold text-gray-300 uppercase tracking-wider">Econ</th>
                                </tr>
                            </thead>
                            {/* Use <tbody> */}
                            <tbody className='divide-y divide-gray-700'>
                                <AnimatePresence>
                                    {players.map((player) => (
                                        // Use motion.tr for animating table rows
                                        <motion.tr
                                            key={player.id}
                                            className="hover:bg-gray-800/40 transition-colors duration-150"
                                            layout // Add layout prop for smoother animations when list changes
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Use <td> for data cells */}
                                            {/* Added padding (p-3) and text alignment */}
                                            <td className="p-3 text-left text-gray-200 font-medium whitespace-nowrap">{player.name}</td>
                                            <td className="p-3 text-center text-gray-400">{player.state}</td>
                                            <td className="p-3 text-center text-gray-400">{player.region}</td>
                                            <td className="p-3 text-center text-gray-400">{player.tournamentsPlayed}</td>
                                            <td className="p-3 text-center text-gray-300">{player.runs}</td>
                                            <td className="p-3 text-center text-gray-400">{player.balls}</td>
                                            <td className="p-3 text-center text-yellow-400 font-semibold">{player.strikeRate}</td>
                                            <td className="p-3 text-center text-yellow-400 font-semibold">{player.sixes}</td>
                                            <td className="p-3 text-center text-yellow-400 font-semibold">{player.fours}</td>
                                            <td className="p-3 text-center text-blue-400 font-semibold">{player.wickets}</td>
                                            <td className="p-3 text-center text-blue-400 font-semibold">{player.economy}</td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                )}

                 {/* Show loader when loading */}
                 {loading && (
                     <div className="flex justify-center items-center p-10">
                         <Loader2 className="h-8 w-8 text-yellow-500 animate-spin" />
                         <span className="ml-3 text-gray-400">Loading players...</span>
                    </div>
                 )}

                {/* // Message shown when not loading, no error message exists, but the player list is empty after a search */}
                {!loading && !message && players.length === 0 && searchQuery && (
                     <div className="text-center text-gray-500 py-8">
                         No players match your current search criteria.
                     </div>
                )}

                 {/* // Message shown when not loading, no error message exists, and the initial list might be empty (edge case) */}
                {!loading && !message && players.length === 0 && !searchQuery && (
                     <div className="text-center text-gray-500 py-8">
                         There are currently no players on the leaderboard.
                     </div>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;