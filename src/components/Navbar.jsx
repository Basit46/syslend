import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoSm from "../assets/logoSm.webp";
import { Link } from "react-scroll";

const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden z-[20] fixed top-0 w-full h-[12vh] px-[40px] bg-[#1111114D] text-white backdrop-blur-[20px] md:flex justify-between items-center">
        <img
          className="w-[157.95px] h-fit"
          src="https://framerusercontent.com/images/HEnhjs6tIeyJr0PpZAySo7Fn5gY.png?scale-down-to=2048"
          alt="logo"
        />
        <ul className="flex gap-[20px] justify-between items-center">
          <Link to="features" offset={-100} smooth={true} duration={500}>
            <li className="hover:text-[#0088ff] cursor-pointer font-[500]">
              Features
            </li>
          </Link>

          <Link to="roadmap" offset={-100} smooth={true} duration={500}>
            <li className="hover:text-[#0088ff] cursor-pointer font-[500]">
              Roadmap
            </li>
          </Link>

          <a
            href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83"
            className="w-[71.16px] h-[40px] grid place-items-center font-[800] text-[#222222] bg-white rounded-[8px]"
          >
            DOCS
          </a>
        </ul>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden z-[20] fixed top-0 w-full h-fit px-[20px] vsm:px-[40px] bg-[#1111114D] text-white backdrop-blur-[20px]">
        <div className="h-[12vh] w-full flex items-center justify-between">
          <img className="w-[40px]" src={logoSm} alt="logo" />
          {openMenu ? (
            <FaTimes
              onClick={() => setOpenMenu(false)}
              className="text-[30px]"
            />
          ) : (
            <FaBars onClick={() => setOpenMenu(true)} className="text-[30px]" />
          )}
        </div>
        <div
          className={`${
            openMenu ? "h-[20vh] pb-[30px]" : "h-0 "
          } duration-500 overflow-hidden px-[40px]`}
        >
          <ul
            className={`${
              openMenu ? "flex" : "hidden"
            }  h-full w-full flex-col gap-[20px] items-center`}
          >
            <Link to="features" offset={-100} smooth={true} duration={500}>
              <li
                onClick={() => setOpenMenu(false)}
                className="hover:text-[#0088ff] cursor-pointer font-[500]"
              >
                Features
              </li>
            </Link>

            <Link to="roadmap" offset={-100} smooth={true} duration={500}>
              <li
                onClick={() => setOpenMenu(false)}
                className="hover:text-[#0088ff] cursor-pointer font-[500]"
              >
                Roadmap
              </li>
            </Link>
            <a
              onClick={() => setOpenMenu(false)}
              target="blank"
              href="https://angry-pyramid-987.notion.site/Documentation-Coming-Soon-3bfb301b92af4c0dba107bbaf80d2c83"
              className="w-full h-[50px] grid place-items-center font-[800] text-[#222222] bg-white rounded-[8px]"
            >
              DOCS
            </a>
          </ul>
        </div>
      </nav>

      {/* Mobile Background */}
      <div
        className={`${
          openMenu ? "h-[32vh]" : "h-[12vh]"
        } md:hidden z-[0] fixed top-0 w-full bg-[#0c0150]`}
      />
    </>
  );
};

export default Navbar;
