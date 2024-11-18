"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-gray-700 rounded-full px-8 py-2 shadow-lg">
      <nav className="flex space-x-4 text-sm sm:text-base">
        <a href="#hero" className="hover:text-purple-400">
          Home
        </a>
        <a href="#about" className="hover:text-purple-400">
          About
        </a>
        <a href="#projects" className="hover:text-purple-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-purple-400">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
