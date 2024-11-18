"use client";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const projects = [
  {
    title: "Ozone",
    description:
      "A full-fledged e-commerce platform for a sanitary company with cross-platform support for iOS and Android.",
    link: "https://play.google.com/store/apps/details?id=com.ozone_india.ozoneindia&hl=en_IN&pli=1",
    image: "/ozone.png",
    vertical: true,
  },
  {
    title: "FoneLane",
    description:
      "A marketplace for refurbished mobiles and accessories, built with React and Tailwind CSS.",
    link: "https://fonelane.com",
    image: "/fonelane.png",
    vertical: false,
  },
  {
    title: "Vonzee",
    description:
      "E-commerce site offering a variety of mobile covers with a user-friendly design.",
    link: "https://vonzee.in",
    image: "/vonzee.png",
    vertical: false,
  },
  {
    title: "PowerFactorshop",
    description:
      "An app designed for an electrical goods company to streamline product browsing and purchase.",
    link: "https://play.google.com/store/apps/details?id=com.powerfactorshop",
    image: "/pfs.png",
    vertical: true,
  },
  {
    title: "Dizoro",
    description:
      "An e-commerce site for accessories with responsive and modern UI.",
    link: "https://dizoro.in",
    image: "/dizoro.png",
    vertical: false,
  },
  {
    title: "Elzzi",
    description:
      "An e-commerce site for accessories with responsive and modern UI offering a variety of mobile covers with a user-friendly design.",
    link: "https://dizoro.in",
    image: "/elzzi.png",
    vertical: false,
  },
  {
    title: "Kite Active",
    description:
      "An Travel Planner and Booker website with responsive design and I built this project in less time as well. Also i'm working on this project migrating to React",
    link: "https://kiteactive.com",
    image: "/kite.png",
    vertical: false,
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
        <BentoGrid className="gap-6">
          {projects.map((project, index) => (
            <BentoGridItem
              key={index}
              className={project.vertical ? "md:row-span-2" : "md:row-span-1"}
              title={
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.title}
                </a>
              }
              description={project.description}
              header={
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={600}
                    className={`w-full h-full object-fit ${
                      project.vertical ? "aspect-[2/5]" : "aspect-[4/3]"
                    }`}
                  />
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;
