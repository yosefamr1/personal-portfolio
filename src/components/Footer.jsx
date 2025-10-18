import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0f0f0f] via-[#171717] to-[#1f1f1f] text-gray-300 py-8 border-t border-[#08CB00]/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name / Role */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-[#08CB00]">Youssef Amr</h1>
          <p className="text-sm text-gray-400">
            Front-End Developer | Angular & React Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-[#08CB00] transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#08CB00] transition cursor-pointer">
            Projects
          </li>
          <li className="hover:text-[#08CB00] transition cursor-pointer">
            Skills
          </li>
          <li className="hover:text-[#08CB00] transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yosefamr1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-[#08CB00] transition cursor-pointer" />
          </a>
          <a
            href="https://linkedin.com/in/yousefamr"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-[#08CB00] transition cursor-pointer" />
          </a>
          <a href="mailto:youssefamr@gmail.com">
            <FaEnvelope className="hover:text-[#08CB00] transition cursor-pointer" />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6 border-t border-[#08CB00]/10 pt-4">
        © {new Date().getFullYear()} Youssef Amr — Crafted with ❤️ using React
      </div>
    </footer>
  );
}

export default Footer;
