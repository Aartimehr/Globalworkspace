// src/components/MatchesSlider.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountryCard from "./Countrycard";
// import { mockUpcomingMatches } from "../data/mockData";

export default function UpcomingVacancy() {
  const [matches, setMatches] = useState([]);

  // useEffect(() => {
  //   setMatches(mockUpcomingMatches);
  // }, []);

  return (
    <div className="absolute left-0 top-full w-full bg-white shadow-xl z-40 p-4 hidden group-hover:block">
      <div className="overflow-x-auto scrollbar-hide">
        <motion.div
          className="flex space-x-6"
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
            <CountryCard key={i} match={match} />
          ))}
          {matches.map((match, i) => (
            <CountryCard key={i + "_clone"} match={match} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
