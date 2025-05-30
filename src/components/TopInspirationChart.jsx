import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const inspirationalPlayers = [
  { name: 'M.S. Dhoni', hometown: 'Ranchi', fameScore: 98 },
  { name: 'M. Shami', hometown: 'Amroha', fameScore: 89 },
  { name: 'Umesh Yadav', hometown: 'Nagpur', fameScore: 80 },
  { name: 'T. Natarajan', hometown: 'Salem', fameScore: 85 },
  { name: 'Pravin Tambe', hometown: 'Mumbai (suburbs)', fameScore: 75 }
];

export default function TopInspirationChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6 my-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">
        From Small Towns to Stardom 🌟
      </h2>
      <p className="text-center text-gray-600 mb-6">
        These cricketers started from humble beginnings and made their way to international cricket. Let their journey inspire you!
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={inspirationalPlayers} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="fameScore" fill="#4f46e5" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
