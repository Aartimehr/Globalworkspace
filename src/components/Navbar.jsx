import { Link } from 'react-router-dom';
import logo from '../utilities/images/logo1.png';

export default function Navbar() {
  return (
    <nav className="font-bold text-md text-white p-4 bg-black relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Main Navigation Links (Home, About, etc.) */}
          <ul className="flex space-x-8">
            <li className="relative group">
              <Link
                to="/" className="hover:underline decoration-2 underline-offset-4 transition duration-300">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/"
                className="hover:underline decoration-2 underline-offset-4 transition duration-300"
              >
                Leaderboard
              </Link>
            </li>
            <li className="relative group">
              <Link to="/about" 
              className="nav-link">
                About
              </Link>
            </li>
            <li className="relative group">
              <Link to="/tournamentregistration" 
              className="nav-link">
                Tournaments
              </Link>
            </li>
            <li className="relative group">
              <Link to="/PlayerRegistration" 
              className="nav-link">
                Registration
              </Link>
            </li>
          </ul>
        </div>

        {/* Separate Section for "Contact Us" and "Services" */}
        <div className="flex items-center space-x-8 ml-auto">
          <li className="relative group">
            <Link to="/services" 
            className="nav-link">
              Services
            </Link>
          </li>
          <li className="relative group">
            <Link to="/contact" 
            className="nav-link">
              Contact Us
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
