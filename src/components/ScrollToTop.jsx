import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  return (
    <Link to="hero" smooth={true} duration={1000}>
      <div className="fixed right-[40px] bottom-[60px] h-[60px] w-[60px] rounded-full bg-white text-black grid place-items-center">
        <IoIosArrowUp className="text-[30px]" />
      </div>
    </Link>
  );
};

export default ScrollToTop;
