// components/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white max-w-7xl mx-auto px-4 py-16 text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg text-gray-400">
        Feel free to reach out for collaboration or just to say hi!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="mailto:anirudhconnect0@gmail.com"
          className="text-purple-400 hover:underline"
        >
          Email: anirudhconnect0@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/anirudholiyan"
          className="text-purple-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Anirudh596"
          className="text-purple-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
