import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Countrycard from "./Countrycard";
import CandidateForm  from "./CandidateForm";


export default function Landing() {
  const [matches, setMatches] = useState([]);

  // useEffect(() => {
  //   setMatches(mockUpcomingMatches);
  // }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[70vh] relative">
        <img 
  src="/landingpage.jpg" 
  alt="Landing Page"
  className="absolute top-0 left-0 w-full h-full object-cover object-top" 
/>
        <div className="relative z-10 flex justify-end items-center h-full">
         <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-4"> <br className="hidden md:block" />
  <span className="text-yellow-600"> Now,getting a job is easy.
</span>
</h2>
        </div>
      </div>
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-lg my-8">
        <h2 className="text-2xl font-bold mb-4 text-amber-600">Welcome to Globalworkspace</h2>
        <p className="text-gray-600 mb-6">
          Globalworkspace is your all-in-one platform for connecting with job opportunities and showcasing your professional journey.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Job Vacancy</strong> Connect to us and move to your new job destination.
          </li>
          <li>
            <strong>📝 Easy Registrations:</strong> Register as a Candidate  and get a smooth onboarding for every job.
          </li>
          <li>
            <strong>🌐 Live Updates:</strong> Get real-time updates on upcoming job vacancy.
          </li>
          <li>
            <strong>📅 Schedule Management:</strong> Stay organized with  scheduling, reminders, and notifications.
          </li>
        </ul>
      </div>

      <section className="bg-gray-50 py-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-amber-600 text-center mb-6">What Can You Do with Globalworkspace?</h2>
        <ul className="text-gray-700 max-w-4xl mx-auto space-y-4 text-lg">
          <li> Register and manage job opportunities and professionals.</li>
          <li>📊 Track live and upcoming job openings with auto-updating cards.</li>
          <li>📈 Maintain real-time job boards and leaderboards.</li>
          <li>🌐 Connect employers and job seekers from local to global level.</li>
        </ul>
      </section>

    </div>

  );
}
