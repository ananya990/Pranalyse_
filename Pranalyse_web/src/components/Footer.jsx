import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Pranalyse</h2>
          <p className="text-gray-400 text-sm">
            Analyse Your Prana. <br />
            Move Better. Eat Smarter. Live Better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:text-violet-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-violet-400 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-violet-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-violet-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-white font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mb-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400">
              GitHub
            </a>
          </div>
          <p className="text-gray-400 text-sm">support@onbeat.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pranalyse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
