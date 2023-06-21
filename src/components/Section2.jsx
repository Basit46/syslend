import React from "react";
import syscoinImg from "../assets/syscoinImg.webp";
import section2 from "../assets/section2.webp";

const Section2 = () => {
  return (
    <div className="section2 h-[100vh] w-full pb-[50px] text-white flex justify-center gap-[50px] items-end">
      <div className="w-[40%]">
        <h1 className="font-manrope font-extrabold text-[63px] tracking-[-0.8px] leading-[1.3]">
          Tapping into
          <br className="hidden vsm:block" /> SYSCOIN's
          <br className="hidden vsm:block" /> Potential
        </h1>
        <div className="mt-[40px] flex ">
          <img
            className="w-[256px] ml-[-45px] "
            src={syscoinImg}
            alt="syscoin"
          />
          <p className="font-manrope font-semibold text-xl tracking-normal leading-[130%]">
            SYScoin harnesses Bitcoin security, leverages NEVM Smart contracts
            and Scale the blockchain with Layer 2 Rollux (ZK Rollups)
          </p>
        </div>
      </div>
      <div className="w-[40%]">
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
