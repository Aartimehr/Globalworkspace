import { motion } from 'framer-motion';
import PlayerForm from '/src/components/PlayerForm';

export default function PlayerRegistration() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <motion.div
        className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Player Registration</h1>
        <PlayerForm />
      </motion.div>
    </div>
  );
}