import React from "react";
import hero from "../assets/images/hero.png";
import itilogo from "../assets/images/iti-logo.png";

function Hero() {
  return (
    <div className="relative w-full h-9/12 overflow-hidden mt-16 bg-[linear-gradient(to_top_left,#466173_33%,#ffffff_100%)] bg-fixed">
      {/* moving light layer*/}
      <div className="absolute inset-0 overflow-hidden">
        <div className="moving-light"></div>
      </div>

      {/* content  */}
      <div className="flex flex-col sm:flex-row justify-around items-center w-4/5 m-auto h-full sm:gap-12">
        <div className="content text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#7CFF5C] to-[#00B341] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(124,255,92,0.4)]">
            Hi, I am Youssef Amr
          </h1>
          <p className=" flex justify-center items-center text-gray-300 mt-4 text-lg max-w-md leading-relaxed ">
            <span className="text-2xl text-gray-800 font-bold">
              {" "}
              Front-End Developer{" "}
            </span>{" "}
            |
            <img src={itilogo} alt="" className="w-16 h-16" />
            Graduate
          </p>
        </div>

        <div className="hero_img">
          <img
            src={hero}
            alt="Hero"
            className="w-96 h-96 object-contain drop-shadow-[0_0_40px_#08CB00] animate-float"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
