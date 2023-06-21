import React from "react";
import syscoinImg from "../assets/syscoinImg.webp";
import section2 from "../assets/section2.webp";

const Section2 = () => {
  return (
    <div className="section2 h-fit lg:h-[100vh] w-full py-[100px] lg:py-[0px] lg:pb-[50px] text-white flex flex-col lg:flex-row justify-center gap-[50px] items-center lg:items-end">
      <div className="w-full xmd:w-[60%] lg:w-[40%]">
        <h1 className="text-center lg:text-left font-manrope font-extrabold text-[28px] md:text-[50px] lg:text-[63px] tracking-[-0.8px] leading-[1.3]">
          Tapping into
          <br className="hidden lg:block" /> SYSCOIN's
          <br className="hidden lg:block" /> Potential
        </h1>
        <div className="w-full lg:w-fit mt-[5px] md:mt-[40px] flex gap-[30px] lg:gap-0 items-center lg:items-start">
          <img
            className="hidden xmd:block w-[155px] h-[70px] lg:h-fit lg:w-[256px] lg:ml-[-45px] "
            src={syscoinImg}
            alt="syscoin"
          />
          <p className="font-manrope font-semibold text-center xmd:text-left text-[13px] md:text-[17px] lg:text-xl tracking-normal leading-[130%]">
            SYScoin harnesses Bitcoin security, leverages NEVM Smart contracts
            and Scale the blockchain with Layer 2 Rollux (ZK Rollups)
          </p>
        </div>
      </div>
      <div className="w-[80%] lg:w-[40%]">
        <img
          className="h-fit w-full object-cover"
          src={section2}
          alt="section2_img"
        />
      </div>
    </div>
  );
};

export default Section2;
