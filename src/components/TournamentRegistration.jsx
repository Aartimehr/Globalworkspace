// TournamentRegistration.jsx
// import React from 'react';
import TournamentForm from './TournamentForm'; // Import the TournamentForm component

export default function TournamentRegistration() {
  return (
    <div className= "bg-register bg-cover bg-center min-h-screen overflow-hidden flex items-center justify-center">
    <div className="bg-white/80 backdrop-blur-md rounded-2xl flex justify-center shadow-lg p-10 max-w-5xl mx-4 md:mx-auto">
      <div className="max-w-2xl w-full backdrop-blur-md shadow-lg">
        <TournamentForm />
      </div>
    </div>
    </div>
  );
}