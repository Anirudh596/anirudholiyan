// components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center"
    >
      <h1 className="text-4xl sm:text-6xl font-bold">
        Hi, I'm Anirudh Dholiyan
      </h1>
      <p className="mt-4 text-lg sm:text-xl">
        Full-Stack Developer | Cross-Platform Specialist
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
