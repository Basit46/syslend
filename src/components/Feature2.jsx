import React from "react";
import Feature from "./Feature";
import { GlassEmpty } from "iconoir-react";

const Feature2 = () => {
  return (
    <div>
      <Feature
        svg={<GlassEmpty className="text-[#6666FF] w-[60px] h-[60px]" />}
        title={"Trustless & Transparent"}
        body={
          "SYSLEND's decentralized nature ensures transparency and security in every transaction, eliminating the need for intermediaries."
        }
      />
    </div>
  );
};

export default Feature2;
