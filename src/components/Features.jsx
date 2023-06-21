import React, { useRef, useEffect } from "react";
import { useState } from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";

const Features = () => {
  const slideRef = useRef();
  const [count, setCount] = useState(0);
  useEffect(() => {
    let slide = 380;
    let slidCount = 0;
    const timeInt = setInterval(() => {
      if (slidCount < 5) {
        slideRef.current.style.transition = "1s";
        slideRef.current.style.transform = `translateX(-${slide}px)`;
        setCount((prev) => prev + 1);
        slidCount += 1;
        slide += 380;
      } else {
        slidCount = 0;
        setCount(0);
        slide = 0;
        slideRef.current.style.transition = "0s";
        slideRef.current.style.transform = `translateX(-${slide}px)`;
      }
    }, 1000);
    return () => {
      clearInterval(timeInt);
    };
  }, []);
  return (
    <div className="w-full bg-[#2b1581] h-fit grid place-items-center">
      <div className="features w-[95vw] h-fit my-[50px] py-[20px] rounded-[22px]">
        <h1 className="font-manrope font-bold text-center text-white text-[47px] tracking-[-1.5px] leading-[1.2]">
          SYSLEND Features
        </h1>
        <p className="font-sans text-center text-[rgba(233,231,231,0.81)] text-base tracking-[0.14em] leading-[1.2]">
          more than you think
        </p>

        <div className="mt-[50px] w-full overflow-x-hidden">
          <div ref={slideRef} className="slide w-fit duration-200">
            <div className="flex gap-x-[50px] px-[50px]">
              <Feature1 />
              {/* <Feature2 /> */}
              <Feature3 />
              <Feature4 />
              <Feature5 />

              <Feature1 />
              {/* <Feature2 /> */}
              <Feature3 />
              <Feature4 />
              <Feature5 />
            </div>
          </div>
        </div>

        <div className="mt-[40px] mx-auto bg-[#00333333] w-[90px] h-[30px] rounded-[50px] flex justify-evenly items-center">
          <div
            className={`${
              count === 0 || count === 4 ? "opacity-100" : "opacity-50"
            } w-[10px] h-[10px] rounded-full bg-white`}
          />
          <div
            className={`${
              count === 1 ? "opacity-100" : "opacity-50"
            } w-[10px] h-[10px] rounded-full bg-white`}
          />
          <div
            className={`${
              count === 2 ? "opacity-100" : "opacity-50"
            } w-[10px] h-[10px] rounded-full bg-white`}
          />
          <div
            className={`${
              count === 3 ? "opacity-100" : "opacity-50"
            } w-[10px] h-[10px] rounded-full bg-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
