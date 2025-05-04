// TournamentRegistration.jsx
import TournamentForm from '/src/components/TournamentForm';
import TournamentDisplay from './TournamentDisplay'; // Import the new component

export default function TournamentRegistration() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <TournamentDisplay />
      
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Or Host Your Own</h1>
        <TournamentForm />
      </div>
    </div>
  );
}