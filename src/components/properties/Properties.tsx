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
import SizeRangeSlider from "@/components/properties/SizeRangeSlider";
import LuminosityRangeSlider from "@/components/properties/LuminosityRangeSlider";
import PropertiesColors from "@/components/properties/PropertiesColors";
import BalanceLine from "../lines/BalanceLine";
import UnityLine from "../lines/UnityLine";
import OptimismLine from "../lines/OptimismLine";
import ClarityLine from "../lines/ClarityLine";

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
      <SizeRangeSlider />
        <PropertiesColors />
        <LuminosityRangeSlider />
        
        <ClarityLine />
        <br />
        <OptimismLine />
        <br />
        <BalanceLine />
        <br />
        <UnityLine />
    </Box>
  );
};

export default Properties;
