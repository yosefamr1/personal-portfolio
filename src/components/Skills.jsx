import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaAngular,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiFirebase,
  SiSupabase,
  SiGithub,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

function Skills() {
  return (
    <section className="min-h-52 w-3/4 p-3 m-auto my-12 rounded-4xl flex flex-col items-center justify-center bg-[linear-gradient(120deg,hsla(0,0%,100%,.10),hsla(0,100%,100%,.03))] font-[Poppins]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#08CB00]">
        My Skills
      </h2>

      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="flex gap-16 items-center text-6xl">
          <FaHtml5 className="text-[#E34F26]" />
          <FaCss3Alt className="text-[#1572B6]" />
          <FaJsSquare className="text-[#F7DF1E]" />
          <SiTypescript className="text-[#3178C6]" />
          <FaReact className="text-[#61DBFB]" />
          <FaAngular className="text-[#DD0031]" />
          <SiTailwindcss className="text-[#38BDF8]" />
          <SiBootstrap className="text-[#7952B3]" />
          <SiSass className="text-[#CC6699]" />
          <FaGitAlt className="text-[#F05033]" />
          <SiGithub className="text-[#fff]" />
          <SiFirebase className="text-[#FFA611]" />
          <SiSupabase className="text-[#3ECF8E]" />
          <SiNodedotjs className="text-[#83CD29]" />
          <SiExpress className="text-[#F7DF1E]" />
        </div>
      </Marquee>
    </section>
  );
}

export default Skills;
