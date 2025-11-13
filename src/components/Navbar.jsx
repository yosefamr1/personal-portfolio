import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-1000 w-full bg-[#171717]  px-8 flex justify-between items-center">
      {/* logo & name  */}
      <div className="logo ">
        <Link
          to="hero"
          smooth={true}
          duration={600}
          className=" w-fit flex gap-3 items-center"
          href=""
        >
          <img className=" w-16 rounded-4xl" src={logo} alt="" />{" "}
          <h2 className="text-mygreen font-bold text-2xl md:text-3xl hover:text-green-hover">
            Youssef Amr
          </h2>
        </Link>
      </div>
      {/* links  */}
      <div className="mylinks">
        <ul className="hidden md:flex gap-10 text-lg font-semibold text-mygreen ">
          <li className="hover:text-green-hover">
            <Link
              className="hover:cursor-pointer"
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              About
            </Link>
          </li>

          <li className="hover:text-green-hover">
            <Link
              className="hover:cursor-pointer"
              to="skills"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-green-hover">
            <Link
              className="hover:cursor-pointer"
              to="projects"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              My Work
            </Link>
          </li>
          <li className="hover:text-green-hover">
            <Link
              className="hover:cursor-pointer"
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button
        className="md:hidden text-mygreen hover:text-green-hover"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
      </button>
      {isOpen && (
        <ul className="absolute top-full right-0 bg-[#171717] flex flex-col items-center text-lg font-semibold text-mygreen md:hidden z-10 rounded-2xl">
          <li className="hover:text-green-hover p-4">
            <Link
              className="hover:cursor-pointer"
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              About
            </Link>{" "}
          </li>
          <li className="hover:text-green-hover">
            <Link
              className="hover:cursor-pointer"
              to="skills"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-green-hover p-4">
            <Link
              className="hover:cursor-pointer"
              to="projects"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              My Work
            </Link>
          </li>
          <li className="hover:text-green-hover p-4">
             <Link
              className="hover:cursor-pointer"
              to="contact"
              smooth={true}
              duration={600}
              spy={true}
              offset={-50}
            >
              Contact
            </Link> 
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
