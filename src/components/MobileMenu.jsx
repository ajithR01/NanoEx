import React from "react";

//icons
import logo from "../assets/NRWATokenImages/NanoEX_logo.png";

import Footer from "./Footer";

export default function MobileMenu({ onClose }) {
  return (
    <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center px-4 py-6">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <img src={logo} alt="NanoEx Logo" className="h-10" />
        <button onClick={onClose} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="flex flex-col text-center gap-6 font-semibold text-lg mt-20">
        <li className="text-green-400">Home</li>
        <li className="hover:text-green-400 transition">About</li>
        <li className="hover:text-green-400 transition">Tokenomics</li>
        <li className="hover:text-green-400 transition">Features</li>
        <li className="hover:text-green-400 transition">Why NanoEx</li>
        <li className="hover:text-green-400 transition">Whitepaper</li>
        <li className="hover:text-green-400 transition">Contact</li>
      </ul>

      <div>
        <Footer />
      </div>
    </div>
  );
}
