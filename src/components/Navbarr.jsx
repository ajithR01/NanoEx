import React, { useState } from "react";

import logo from "../assets/NRWATokenImages/NanoEX_logo.png";

import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full container mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="NanoEx Logo" className="h-12" />
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-sm">
          <li className="text-green-400">Home</li>
          <li className="hover:text-green-400 transition">About</li>
          <li className="hover:text-green-400 transition">Tokenomics</li>
          <li className="hover:text-green-400 transition">Features</li>
          <li className="hover:text-green-400 transition">Why NanoEx</li>
          <li className="hover:text-green-400 transition">Whitepaper</li>
          <li className="hover:text-green-400 transition">Contact</li>
        </ul>

        <div className="hidden md:flex">
          <Button textContent={"BUY NOW ↗"} />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-white">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </nav>
  );
}
