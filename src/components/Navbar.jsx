import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../utilities/images/logo1.png';
import CountryCard from './Countrycard';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="font-bold text-md text-white p-4 bg-blue-300 relative z-20">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-8 w-full md:w-auto overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          
          {/* Home */}
          <li className="relative group p-2 md:p-0">
            <Link to="/" className="hover:underline decoration-2 underline-offset-4 transition duration-400">
              Home
            </Link>
          </li>

          {/* Dropdown Example (Desktop Only) */}
          <li
            className="relative p-2 md:p-0"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-blue-300 shadow-lg rounded-md z-50 p-4 w-[700px] hidden md:block">
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

          {/* Candidate Form */}
          <li className="relative group p-2 md:p-0">
            <Link to="/CandidateForm" className="nav-link">
              Candidate Form
            </Link>
          </li>

          {/* About */}
          <li className="relative group p-2 md:p-0">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          {/* Services */}
          <li className="relative group p-2 md:p-0">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>

          {/* Contact */}
          <li className="relative group p-2 md:p-0">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
