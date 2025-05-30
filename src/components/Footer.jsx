// Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo / Description */}
        <div>
          <h2 className="text-xl font-bold text-indigo-500 mb-2">CricFolio</h2>
          <p className="text-sm text-gray-400">
            Your cricket journey starts here. From street to stadium, we power your progress.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/matches" className="hover:text-white transition">Matches</Link></li>
            <li><Link to="/Leaderboard" className="hover:text-white transition">Leaderboard</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social or Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400">Email: support@cricfolio.com</p>
          <p className="text-sm text-gray-400">Phone: +91-9876543210</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} CricFolio. All rights reserved.
      </div>
    </footer>
  );
}

