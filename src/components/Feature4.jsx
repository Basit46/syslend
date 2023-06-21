import React from "react";
import Feature from "./Feature";
import { WebWindow } from "iconoir-react";

const Feature4 = () => {
  return (
    <div>
      <Feature
        svg={<WebWindow className="text-[#6666FF] w-[60px] h-[60px]" />}
        title={"On-Demand Lending & Borrowing"}
        body={
          "Instant lending or borrowing without waiting for a counterparty, SYSLEND streamlines the process for both lenders and borrowers."
        }
      />
    </div>
  );
};

export default Feature4;
