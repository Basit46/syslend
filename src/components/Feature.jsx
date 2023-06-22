import React from "react";

const Feature = ({ svg, title, body }) => {
  return (
    <div className="feature mx-[20px] sm:mx-[30px] w-[300px] sm:w-[330px] min-h-[344px] py-[40px] px-[30px] flex flex-col items-center shadow-[0.3184767494094558px_0.39809593676181976px_2.549057741503143px_-0.9375px_rgba(0,0,0,0.18),0.9658024572418071px_1.207253071552259px_7.730191403171522px_-1.875px_rgba(0,0,0,0.17241),2.5530614085937846px_3.1913267607422307px_20.434461731276638px_-2.8125px_rgba(0,0,0,0.14761),8px_10px_64.03124237432849px_-3.75px_rgba(0,0,0,0.0625)] bg-[#2b1581]">
      <div className="flex-1 h-[100px] w-[100px]  grid place-items-center">
        {svg}
      </div>
      <h1 className="font-manrope font-bold text-white text-xl tracking-[-0.5px] leading-[1.4] text-center">
        {title}
      </h1>
      <p className="mt-[10px] justify-self-end  text-white text-[13px] tracking-normal leading-[1.3] text-center">
        {body}
      </p>
    </div>
  );
};

export default Feature;
