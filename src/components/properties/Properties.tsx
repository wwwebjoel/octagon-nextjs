import React from "react";
import Box from "@/components/common/Box";
import MediumBox from "@/components/common/MediumBox";
import Clarity from "../anchors/Clarity";
import Unity from "../anchors/Unity";
import Balance from "../anchors/Balance"
import Optimism from "../anchors/Optimism"
import Patience from "../anchors/Patience"
import Flow from "../anchors/Flow"
import Aspiration from "../anchors/Aspiration"
import Boundary from "../anchors/Boundaries"
const Properties = () => {
  return (
    <Box>
      <div className={`grid grid-cols-2 gap-[10px]`}>
        <MediumBox selected={true} icon={<Clarity selected={true}/>} title={"clarity"} />

        <MediumBox icon={<Unity/>} title={"unity"} />

        <MediumBox icon={<Balance/>} title={"balance"} />

        <MediumBox icon={<Optimism/>} title={"optimism"} />

        <MediumBox icon={<Patience/>} title={"patience"} />

        <MediumBox icon={<Boundary/>} title={"boundary"} />

        <MediumBox icon={<Flow/>} title={"flow"} />

        <MediumBox icon={<Aspiration/>} title={"aspiration"} />
      </div>
    </Box>
  );
};

export default Properties;
