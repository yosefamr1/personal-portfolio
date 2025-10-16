import React from "react";
import aboutImg from "../assets/images/about.png";

function About() {
  return (
    <section id="about" className="w-full mt-12">
      <div className="content w-4/5 m-auto p-20 flex flex-col-reverse md:flex-row justify-around items-center gap-12 border-1 border-mygreen rounded-2xl ">
        <div className="text flex flex-col items-center w-1/2">
          <p>
            I’m Youssef Amr, a passionate Front-End Developer with a solid
            foundation in HTML, CSS, JavaScript, React, and Angular. I
            specialize in building responsive, user-friendly, and visually
            engaging web applications with clean, modern code. I hold a
            Bachelor’s degree from the Faculty of Business – Management
            Information System (GPA: 3.4 – Excellent), and I’m a graduate of the
            Information Technology Institute (ITI), where I completed an
            intensive Front-End Development program. My technical background
            includes hands-on experience with TypeScript, Git, and REST API
            integration, along with a strong understanding of UI/UX principles
            and object-oriented programming. I’m always exploring new
            technologies to enhance my skills and create meaningful,
            high-quality digital experiences.
          </p>
          <button className="w-fit mt-8 px-8 py-3 text-lg font-semibold text-white border-2 border-[#08CB00] rounded-2xl bg-transparent transition-all duration-300  hover:bg-[#08CB00] hover:text-[#171717] hover:shadow-[0_0_15px_#08CB00]ve:scale-95">
            My Resume!
          </button>
        </div>
        <div className="about_img w-1/2 ">
          <img
            src={aboutImg}
            alt="About Me"
            className="w-full h-full object-contain drop-shadow-[0_0_40px_#08CB00] animate-float"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
