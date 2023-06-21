import React from "react";
import Feature from "./Feature";
import { FrameSelect } from "iconoir-react";

const Feature5 = () => {
  return (
    <div>
      <Feature
        svg={<FrameSelect className="text-[#6666FF] w-[60px] h-[60px]" />}
        title={"Governance with Tokenization"}
        body={
          "SYSLEND token holders play a crucial role in governing the protocol, ensuring a decentralized and community-driven platform."
        }
      />
    </div>
  );
};

export default Feature5;
