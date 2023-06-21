import React from "react";
import roadmapImg from "../assets/roadmapImg.webp";

const Roadmap = () => {
  return (
    <div className="roadmap bg-[#0C0150] h-fit w-full pt-[30px]">
      <h1 className="font-poppins font-bold text-white text-[86px] tracking-[-1.5px] underline leading-[1.2] text-center">
        Roadmap
      </h1>
      <p className="font-manrope font-bold text-white text-[23px] tracking-[0.7px] leading-[1.4] text-center">
        SYSLEND Development Timeline
      </p>
      <div>
        <img src={roadmapImg} alt="roadmap" />
      </div>
    </div>
  );
};

export default Roadmap;
