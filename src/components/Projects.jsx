import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import HealthyHive from "../assets/images/Projects/Healthyhive.png";
import BookingApp from "../assets/images/Projects/BookingApp.png";
import MovieApp from "../assets/images/Projects/MovieApp.png";

function Projects() {
  const projects = [
    {
      title: "HealthyHive",
      description: `A responsive e-commerce app for healthy food and care products with search, cart, and wishlist features.`,
      tech: [
        "React",
        "TailwindCSS",
        " Redux Toolkit",
        " React Router",
        "Supabase",
      ],
      img: HealthyHive,
      link: "https://healthy-hive.netlify.app/",
      github: "https://github.com/OmarIsmail277/HealthyHive",
    },
    {
      title: "Booking App",
      description:
        "Travel & hotel booking web app with package search, smooth navigation, and a modern styled UI",
      tech: ["React", "TailwindCSS", " Redux Toolkit", " React Router"],
      img: BookingApp,
      link: "https://booking-app-silk-tau.vercel.app/",
      github: "https://github.com/yosefamr1/Booking_App",
    },
    {
      title: "Movie App",
      description:
        "Angular Movie app - Movie browsing platform with category filtering and API integration.",
      tech: ["Angular", "TypeScript", " REST API","PrimeNg"],
      img: MovieApp,
      link: "https://yosefamr1.github.io/movie_app__final_project/",
      github: "https://github.com/yosefamr1/movie_app__final_project",
    },
  ];

  return (
    <section id="projects" className="relative bg-[#0f0f0f] py-20 px-8 text-white overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#1a1a1a_1px,transparent_1px),linear-gradient(90deg,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      {/* Section content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#08CB00] mb-14 text-center tracking-wide">
          My Projects
        </h2>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#171717] border border-[#08CB00]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#08CB00]/60"
            >
              {/* Project image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#08CB00] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-[#08CB00]/20 text-[#08CB00] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#08CB00] text-[#08CB00] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#08CB00] hover:text-[#171717]"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-500 text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-300 hover:text-[#171717]"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
