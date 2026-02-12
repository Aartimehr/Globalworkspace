import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../utilities/images/logo1.png';
import CountryCard from './Countrycard';
import { mockUpcomingMatches } from '../data/mockData';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="font-bold text-md text-white p-4 bg-black relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          {/* Main Navigation Links */}
          <ul className="flex space-x-8">
            <li className="relative group">
              <Link to="/" className="hover:underline decoration-2 underline-offset-4 transition duration-400">
                Home
              </Link>
            </li>

            {/* <li className="relative group">
              <Link to="/Leaderboard" className="hover:underline decoration-2 underline-offset-4 transition duration-400">
                Leaderboard
              </Link>
            </li> */}

            {/* ✅ Matches Dropdown Preview */}
            <li
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              {/* <Link to="/matches" className="hover:underline decoration-2 underline-offset-4 transition duration-400">
                Matches
              </Link> */}

              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 p-4 w-[700px]">
                  <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {mockUpcomingMatches.slice(0, 3).map((match, index) => (
                      <div key={index} className="transform scale-90 w-[220px]">
                        <CountryCard match={match} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {/* <li className="relative group">
              <Link to="/PlayerRegistration" className="nav-link">
                Registration
              </Link> */}
            {/* </li> */}
            <li className="relative group">
              <Link to="/CandidateForm" className="nav-link">
               Candidate Form
              </Link>
            </li>
            <li className="relative group">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Services */}
        <div className="flex items-center space-x-8 ml-auto">
          <li className="relative group">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="relative group">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
