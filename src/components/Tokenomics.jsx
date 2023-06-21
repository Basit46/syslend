import React from "react";
import tokenTable from "../assets/tokenTable.webp";
import tokenChart from "../assets/tokenChart.webp";

const Tokenomics = () => {
  return (
    <div className="h-fit mb-[30px] bg-[#1c1358]">
      <div className="mx-[30px] md:mx-[40px] h-fit bg-[rgba(230,209,209,0.1)] py-[50px] md:py-[100px] px-[20px] md:px-[61px] rounded-[25px] font-bold text-[#e3e3e3] text-[21px] md:text-[35px] tracking-[-0.6px] leading-[1.4] text-center">
        <span className="text-[#0099FF]">$LEND</span> is the governance token of
        Syslend, a decentralized lending protocol. Holders of{" "}
        <span className="text-[#0099FF]">$LEND</span> have the power to
        participate in decision-making processes regarding the protocol's
        operation, voting on proposals, and shaping its future development.
      </div>

      <h1 className="font-manrope mt-[20px] mb-[50px] font-bold text-white text-[36px] md:text-[71px] tracking-[-1.5px] underline leading-[1.2] text-center">
        TOKENOMICS
      </h1>
      <div className="px-[40px] flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full md:w-[90%] lg:w-[57%]">
          <img src={tokenTable} alt="table" />
        </div>
        <div className="w-[500px] vsm:w-[600px] lg:h-fit lg:flex-1">
          <img src={tokenChart} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
