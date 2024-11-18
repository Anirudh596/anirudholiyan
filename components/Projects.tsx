// components/Projects.tsx
import React from "react";

const projects = [
  {
    title: "Ozone",
    description:
      "A full-fledged e-commerce platform for a sanitary company with cross-platform support for iOS and Android.",
    link: "https://play.google.com/store/apps/details?id=com.ozone_india.ozoneindia&hl=en_IN&pli=1",
    image: "/images/ozone.png",
  },
  {
    title: "PowerFactorshop",
    description:
      "An app designed for an electrical goods company to streamline product browsing and purchase.",
    link: "https://play.google.com/store/apps/details?id=com.powerfactorshop",
    image: "/images/powerfactorshop.png",
  },
  {
    title: "FoneLane",
    description:
      "A marketplace for refurbished mobiles and accessories, built with React and Tailwind CSS.",
    link: "https://fonelane.com",
    image: "/images/fonelane.png",
  },
  {
    title: "Vonzee",
    description:
      "E-commerce site offering a variety of mobile covers with a user-friendly design.",
    link: "https://vonzee.in",
    image: "/images/vonzee.png",
  },
  {
    title: "Dizoro",
    description:
      "An e-commerce site for accessories with responsive and modern UI.",
    link: "https://dizoro.in",
    image: "/images/dizoro.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <p className="text-center text-gray-400 mb-12">
          These are some of my notable projects showcasing expertise in
          full-stack development and cross-platform applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-black border border-gray-700 rounded-lg overflow-hidden shadow-md"
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between h-48">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-purple-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
