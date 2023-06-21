import React from "react";
import Feature from "./Feature";
import { Asana } from "iconoir-react";

const Feature1 = () => {
  return (
    <Feature
      svg={<Asana className="text-[#6666FF] w-[60px] h-[60px]" />}
      title={"Pool-Based Lending & Borrowing"}
      body={
        "SYSLEND's pool-based model provides flexibility for lenders and borrowers, avoiding the constraints of traditional peer-to-peer lending."
      }
    />
  );
};

export default Feature1;
