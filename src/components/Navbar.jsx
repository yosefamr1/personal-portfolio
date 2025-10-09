import React from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className=" bg-[#171717] py-3 px-8 flex justify-between items-center ">
      <div className="logo">
        {/* logo & name  */}
        <a className=" w-fit flex gap-3 items-center" href="">
          <img className=" w-16 rounded-4xl" src={logo} alt="" />{" "}
          <h2 className="text-mygreen font-bold text-3xl hover:text-green-hover">
            Youssef Ahmed Amr
          </h2>
        </a>
      </div>
      {/* links  */}
      <div className="mylinks">
        <ul className="flex gap-10 text-lg font-semibold text-mygreen ">
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
    </div>
  );
}

export default Navbar;
