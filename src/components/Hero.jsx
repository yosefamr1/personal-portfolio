import React from "react";
import hero from "../assets/images/hero.png";
import itilogo from "../assets/images/iti-logo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden mt-16 bg-[linear-gradient(to_top_left,#466173_33%,#ffffff_100%)] bg-fixed">
      {/* moving light layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="moving-light"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* content */}
      <div className="flex flex-col sm:flex-row justify-around items-center w-4/5 m-auto h-full sm:gap-12 relative z-10">
        <div className="content text-center sm:text-left animate-fadeIn">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#7CFF5C] to-[#00B341] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(124,255,92,0.4)]">
            Hi, I am Youssef Amr
          </h1>

          <p className="flex justify-center sm:justify-start items-center gap-2 text-gray-300 mt-4 text-lg max-w-md leading-relaxed">
            <span className="text-2xl text-gray-800 font-bold">
              Front-End Developer
            </span>
            |
            <img src={itilogo} alt="ITI Logo" className="w-12 h-12" />
            Graduate
          </p>

          {/* buttons + social icons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-6">
            {/* buttons */}
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-2 bg-[#08CB00] text-black font-semibold rounded-full shadow-md hover:scale-105 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border border-[#08CB00] text-[#08CB00] font-semibold rounded-full hover:bg-[#08CB00]/10 transition"
              >
                Contact Me
              </a>
            </div>

            {/* social icons */}
            <div className="flex justify-center sm:justify-start gap-6 text-2xl">
              <a
                href="https://github.com/Youssefamr1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#08CB00] transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-amr1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#08CB00] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#08CB00] transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* hero image */}
        <div className="hero_img animate-float">
          <img
            src={hero}
            alt="Hero"
            className="w-80 h-80 sm:w-96 sm:h-96 object-contain drop-shadow-[0_0_40px_#08CB00]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
