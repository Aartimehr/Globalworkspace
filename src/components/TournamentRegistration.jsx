import { motion } from 'framer-motion';
import TournamentForm from '/src/components/TournamentForm';
import PlayerForm from '/src/components/PlayerForm';

export default function TournamentRegistration() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Tournament Registration (Left side) */}
      <motion.div 
        className="w-1/2 p-8" 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Tournament Registration</h1>
        <TournamentForm />
      </motion.div>

      {/* Player Registration (Right side) */}
      <motion.div 
        className="w-1/2 p-8 bg-white" 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Player Registration</h1>
        <PlayerForm />
      </motion.div>
    </div>
  );
}
