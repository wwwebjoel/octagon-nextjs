import React from "react";
import Box from "@/components/common/Box";
import AnchorBox from "../boxes/AnchorBox";
import Clarity from "../anchors/Clarity";
import Unity from "../anchors/Unity";
import Balance from "../anchors/Balance"
import Optimism from "../anchors/Optimism"
import Patience from "../anchors/Patience"
import Flow from "../anchors/Flow"
import Aspiration from "../anchors/Aspiration"
import Boundary from "../anchors/Boundaries"
import RangeSlider from "../common/RangeSlider";

const items = [
    { icon: <Clarity />, title: "clarity" },
    { icon: <Unity />, title: "unity" },
    { icon: <Balance />, title: "balance" },
    { icon: <Optimism />, title: "optimism" },
    { icon: <Patience />, title: "patience" },
    { icon: <Boundary />, title: "boundary" },
    { icon: <Flow />, title: "flow" },
    { icon: <Aspiration />, title: "aspiration" }
  ];
  
const Properties = () => {
  return (
    <Box>
      <div className={`grid grid-cols-2 gap-[10px]`}>
        {items.map((item)=>{
            return(
                <AnchorBox key={item.title} icon={item.icon} title={item.title} />
            )
        })}
      </div>
      <RangeSlider />
    </Box>
  );
};

export default Properties;
