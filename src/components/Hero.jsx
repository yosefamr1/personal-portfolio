import React from "react";
import bgVideo from "../assets/hero.png";
import itilogo from "../assets/iti-logo.png";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-[#171717] via-[#212121] to-[#27ae60]/35 animate-gradient bg-[length:400%_400%]">
      {/* //for the green gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,203,0,0.25),transparent_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 z-0"></div>
      {/* content  */}
      <div className="flex flex-col sm:flex-row justify-around items-center w-4/5 m-auto h-full sm:gap-12">
        <div className="content text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#08CB00] to-[#27ae60] bg-clip-text text-transparent drop-shadow-[0_0_10px_#08CB00]">
            Hi, I am Youssef Amr
          </h1>
          <p className=" flex justify-center items-center text-gray-300 mt-4 text-lg max-w-md leading-relaxed ">
            Front-End Developer |<img src={itilogo} alt="" className="w-16 h-16" />
            Graduate{" "}
          </p>
        </div>

        <div className="hero_img">
          <img
            src={bgVideo}
            alt="Hero"
            className="w-96 h-96 object-contain drop-shadow-[0_0_40px_#08CB00] animate-float"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
