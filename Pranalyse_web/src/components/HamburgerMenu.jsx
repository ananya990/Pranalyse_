// HamburgerMenu.jsx
import React from "react";
import { Link } from "react-router-dom";

function HamburgerMenu({ setIsOpen }) {
  return (
    <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full flex flex-col items-center py-6 space-y-4 z-40">
      {["About","Contact", "Yoga","Physio","Explore","Diet","Profile"].map((page) => (
        <Link
          key={page}
          to={`/${page.toLowerCase()}`}
          className="text-black text-lg hover:text-violet"
          onClick={() => setIsOpen(false)}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}

export default HamburgerMenu;
