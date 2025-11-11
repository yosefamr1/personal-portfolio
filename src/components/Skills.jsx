import React from "react";
import Marquee from "react-fast-marquee";
import { DiVisualstudio } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSass,
  SiFirebase,
  SiSupabase,
  SiCplusplus,
  SiMysql,
  SiGithub,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="min-h-52 w-3/4 p-3 m-auto my-12 rounded-4xl flex flex-col items-center justify-center bg-[linear-gradient(120deg,hsla(0,0%,100%,.10),hsla(0,100%,100%,.03))] font-[Poppins]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#08CB00]">
        My Skills
      </h2>

      {/* Animated Skills Row */}
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex gap-16 items-center text-6xl">
          <FaHtml5 className="text-[#E34F26] ml-12" />
          <FaCss3Alt className="text-[#1572B6]" />
          <SiSass className="text-[#CC6699]" />
          <FaJsSquare className="text-[#F7DF1E]" />
          <SiTypescript className="text-[#3178C6]" />
          <FaReact className="text-[#61DBFB]" />
          <FaAngular className="text-[#DD0031]" />
          <FaGitAlt className="text-[#F05033]" />
          <SiGithub className="text-[#fff]" />
          <SiFirebase className="text-[#FFA611]" />
          <SiSupabase className="text-[#3ECF8E]" />
          <SiCplusplus className="text-[#00599C]" />
          <FaJava className="text-[#E76F00]" />
          <SiMysql className="text-[#4479A1]" />
          <DiVisualstudio className="text-[#007ACC]" />
        </div>
      </Marquee>

      {/* Optional text description under icons */}
      <p className="text-center text-gray-300 mt-8 max-w-2xl m-auto leading-relaxed">
        Skilled in developing responsive, clean, and interactive web
        applications using modern technologies like React, Angular, and
        TypeScript — with solid knowledge of OOP, APIs, and UI/UX principles.
      </p>
    </section>
  );
}

export default Skills;
