import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        document.body.scrollTop || document.documentElement.scrollTop;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Link to="hero" smooth={true} duration={1000}>
      <div
        className={`${
          scrollPosition < 200 ? "opacity-0" : "opacity-1"
        } z-[1] duration-200 fixed right-[20px] vsm:right-[40px] bottom-[20px] vsm:bottom-[60px] h-[60px] w-[60px] rounded-full bg-white text-black grid place-items-center`}
      >
        <IoIosArrowUp className="text-[30px]" />
      </div>
    </Link>
  );
};

export default ScrollToTop;
