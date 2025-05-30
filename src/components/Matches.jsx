import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MatchesCard from "../components/MatchesCard";
import { mockUpcomingMatches } from "../data/mockData";

export default function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(mockUpcomingMatches);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">
        All Upcoming Matches
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-6xl mx-auto">
        <motion.div
          className="flex space-x-6 overflow-hidden"
          animate={{
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {matches.map((match, i) => (
            <MatchesCard key={i} match={match} />
          ))}
          {matches.map((match, i) => (
            <MatchesCard key={i + "_clone"} match={match} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
