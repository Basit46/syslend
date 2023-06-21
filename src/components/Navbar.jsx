import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[12vh] px-[40px] bg-[#1111114D] text-white backdrop-blur-[20px] flex justify-between items-center">
      <img
        className="w-[157.95px] h-fit"
        src="https://framerusercontent.com/images/HEnhjs6tIeyJr0PpZAySo7Fn5gY.png?scale-down-to=2048"
        alt="logo"
      />
      <ul className="flex gap-[20px] justify-between items-center">
        <li className="hover:text-[#0088ff] cursor-pointer font-[500]">
          Features
        </li>
        <li className="hover:text-[#0088ff] cursor-pointer font-[500]">
          Roadmap
        </li>
        <a
          href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83"
          className="w-[71.16px] h-[40px] grid place-items-center font-[800] text-[#222222] bg-white rounded-[8px]"
        >
          DOCS
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
