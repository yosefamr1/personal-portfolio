import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-[#171717] py-3 px-8 flex justify-between items-center relative">
      {/* logo & name  */}
      <div className="logo ">
        <a className=" w-fit flex gap-3 items-center" href="">
          <img className=" w-16 rounded-4xl" src={logo} alt="" />{" "}
          <h2 className="text-mygreen font-bold text-2xl md:text-3xl hover:text-green-hover">
            Youssef Amr
          </h2>
        </a>
      </div>
      {/* links  */}
      <div className="mylinks">
        <ul className="hidden md:flex gap-10 text-lg font-semibold text-mygreen ">
          <li className="hover:text-green-hover">
            <a href="">About</a>
          </li>
          <li className="hover:text-green-hover">
            <a href="">My Work</a>
          </li>
          <li className="hover:text-green-hover">
            <a href="">Skills</a>
          </li>
          <li className="hover:text-green-hover">
            <a href="">Contact</a>
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
        <ul className="absolute top-full left-0 w-full bg-[#171717] flex flex-col items-center gap-6 py-6 text-lg font-semibold text-mygreen md:hidden z-10">
          <li className="hover:text-green-hover">
            <a href="#">About</a>
          </li>
          <li className="hover:text-green-hover">
            <a href="#">My Work</a>
          </li>
          <li className="hover:text-green-hover">
            <a href="#">Skills</a>
          </li>
          <li className="hover:text-green-hover">
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
