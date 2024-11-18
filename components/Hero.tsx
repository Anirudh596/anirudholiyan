"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Hero: React.FC = () => {
  const words = [{ text: "Anirudh" }, { text: "Dholiyan" }];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center relative text-white text-center bg-black"
    >
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="flex flex-col items-center justify-center w-full px-4 relative z-10">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-300 dark:from-gray-400 dark:to-gray-200"
            >
              Hi, I&#39;m
            </h1>
            <TypewriterEffectSmooth
              className="text-4xl sm:text-6xl md:text-8xl font-bold"
              words={words}
            />
          </div>
          
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-100 dark:text-gray-300 max-w-2xl">
            Full-Stack Developer | Cross-Platform Specialist
          </p>

          <a
            href="#projects"
            className="mt-6 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <button
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 
              transition-all hover:bg-slate-900 hover:text-white focus:outline-none 
              focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black animate-shimmer"
              role="button"
              aria-label="View my work"
            >
              View My Work
            </button>
          </a>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Hero;
