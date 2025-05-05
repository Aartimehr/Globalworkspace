import TournamentDisplay from './TournamentDisplay';

export default function PlayerRegistration() {
  return (
    <div className= "bg-register bg-cover bg-center min-h-screen overflow-hidden flex items-center justify-center">
    {/* <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-4"> */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-5xl mx-4 md:mx-auto">
        <div className=" py-6 px-8">
          <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
          Player <span className="text-yellow-500">Registration</span>
        </h1>
          <p className="text-black text-center mt-1 text-xl">Find and register for upcoming cricket tournaments</p>
        </div>
        <div className="p-6">
          <TournamentDisplay />
        </div>
      </div>
    {/* </div> */}
    </div>
  );
}
