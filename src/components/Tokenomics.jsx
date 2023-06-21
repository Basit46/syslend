import React from "react";
import tokenTable from "../assets/tokenTable.webp";
import tokenChart from "../assets/tokenChart.webp";

const Tokenomics = () => {
  return (
    <div className="mb-[30px] bg-[#1c1358]">
      <div className="mx-[40px] h-fit bg-[rgba(230,209,209,0.1)] py-[100px] px-[61px] rounded-[25px] font-bold text-[#e3e3e3] text-[35px] tracking-[-0.6px] leading-[1.4] text-center">
        <span className="text-[#0099FF]">$LEND</span> is the governance token of
        Syslend, a decentralized lending protocol. Holders of{" "}
        <span className="text-[#0099FF]">$LEND</span> have the power to
        participate in decision-making processes regarding the protocol's
        operation, voting on proposals, and shaping its future development.
      </div>

      <h1 className="font-manrope mt-[20px] mb-[50px] font-bold text-white text-[76px] tracking-[-1.5px] underline leading-[1.2] text-center">
        TOKENOMICS
      </h1>
      <div className="px-[40px] flex items-center justify-center">
        <div className="w-[57%]">
          <img src={tokenTable} alt="table" />
        </div>
        <div className="flex-1">
          <img src={tokenChart} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
