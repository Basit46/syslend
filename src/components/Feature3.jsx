import React from "react";
import Feature from "./Feature";
import { AiOutlineUser } from "react-icons/ai";

const Feature3 = () => {
  return (
    <div>
      <Feature
        svg={<AiOutlineUser className="text-[#6666FF] w-[60px] h-[60px]" />}
        title={"Access to finance for all"}
        body={
          "SYSLEND offers equal opportunities for everyone to lend, borrow and earnyield, democratizing the lending market."
        }
      />
    </div>
  );
};

export default Feature3;
