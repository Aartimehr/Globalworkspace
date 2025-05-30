import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MatchesCard from "./MatchesCard";
import Trending from "./Trending";
import { mockUpcomingMatches } from "../data/mockData";
import TopInspirationChart from "../components/TopInspirationChart";


export default function Landing() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(mockUpcomingMatches);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[70vh] relative">
        <video
        autoPlay
        loop
        muted
          className="absolute top-0 left-0 w-full h-full object-cover object-top">
            <source src="/ball.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        <div className="relative z-10 flex justify-end items-center h-full">
         <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-4"> <br className="hidden md:block" />
  <span className="text-indigo-400">  Fueling Passion. Shaping Legends.
.</span>
</h2>
        </div>
      </div>
      {/* Trending Section */}
     <h2 className="text-2xl font-bold mb-4 text-indigo-700">What You Can Do with CricFolio</h2>
<p className="text-gray-600 mb-6">
  CricFolio is your all-in-one cricket companion, designed to empower players, teams, and tournament organizers.
</p>
<ul className="list-disc pl-6 text-gray-700 space-y-2">
  <li>
    <strong>📊 Track Performances:</strong> Players can view detailed match stats, track their progress across tournaments, and build their digital cricketing portfolio.
  </li>
  <li>
    <strong>📝 Easy Registrations:</strong> Register as a player or organizer effortlessly. CricFolio ensures smooth onboarding for every stakeholder.
  </li>
  <li>
    <strong>🏆 Create & Manage Tournaments:</strong> Organizers can launch tournaments, set fixtures, manage teams, and record live match updates.
  </li>
  <li>
    <strong>🌐 Live Updates:</strong> Get real-time updates on scores, wickets, and top performers — anytime, anywhere.
  </li>
  <li>
    <strong>🥇 Leaderboards & Highlights:</strong> Follow the best players and teams through dynamic leaderboards and match highlight features.
  </li>
  <li>
    <strong>📅 Schedule Management:</strong> Stay organized with automated match scheduling, reminders, and notifications.
  </li>
</ul>
<p className="text-gray-600 mt-6">
  Whether you're an aspiring cricketer or a tournament host, CricFolio is built to streamline your experience and celebrate your love for the game.
</p>
{/* CricFolio Functionality Section (already existing) */}
<section className="bg-gray-50 py-10 px-6 md:px-20">
  <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">What Can You Do with CricFolio?</h2>
  <ul className="text-gray-700 max-w-4xl mx-auto space-y-4 text-lg">
    <li>🏏 Register and manage tournaments and players.</li>
    <li>📊 Track live and upcoming matches with auto-updating match cards.</li>
    <li>📈 Maintain real-time scoreboards and leaderboards.</li>
    <li>🌐 Connect organizers and players from local to national level.</li>
  </ul>
</section>

{/* 🔥 New Inspiration Bar Graph Section */}
<TopInspirationChart />

      {/* Trending Section */}
      <Trending />

    </div>

  );
}
