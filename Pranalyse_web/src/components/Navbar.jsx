// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-violet font-bold text-2xl">
      Pranalyse
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-black">
          <Link to="/about" className="hover:text-lavender">About</Link>
          <Link to="/contact" className="hover:text-violet">Contact</Link>
          <Link to="/yoga" className="hover:text-violet">Yoga</Link>
          <Link to="/physio" className="hover:text-blue">Physio</Link>
          <Link to="/explore" className="hover:text-lavender">Explore</Link>
          <Link to="/diet" className="hover:text-violet">Diet</Link>
          <Link to="/profile" className="hover:text-blue">Profile</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && <HamburgerMenu setIsOpen={setIsOpen} />}
    </nav>
  );
}

export default Navbar;
