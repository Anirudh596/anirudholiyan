// components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-black text-white max-w-7xl mx-auto px-4 py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <p className="text-lg text-gray-400 text-center">
        I'm a passionate Software Developer with experience in building scalable
        cross-platform applications. Skilled in React, React Native, Node.js,
        and other modern technologies, I enjoy solving real-world problems and
        delivering impactful solutions.
      </p>
    </section>
  );
};

export default About;