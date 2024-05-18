import React from "react";
import Box from "@/components/common/Box";
import AnchorBox from "../boxes/AnchorBox";
import Clarity from "../anchors/Clarity";
import Unity from "../anchors/Unity";
import Balance from "../anchors/Balance";
import Optimism from "../anchors/Optimism";
import Patience from "../anchors/Patience";
import Flow from "../anchors/Flow";
import Aspiration from "../anchors/Aspiration";
import Boundary from "../anchors/Boundaries";
import RangeSlider from "../common/RangeSlider";
import SizeRangeSlider from "@/components/properties/SizeRangeSlider";
import LuminosityRangeSlider from "@/components/properties/LuminosityRangeSlider";
import PropertiesColors from "@/components/properties/PropertiesColors";
import BalanceLine from "../lines/BalanceLine";
import UnityLine from "../lines/UnityLine";
import OptimismLine from "../lines/OptimismLine";
import ClarityLine from "../lines/ClarityLine";
import { Button1 } from "../common/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  anchorModuleActivated,
  pathModuleActivated,
  wordsModuleActivated,
} from "@/store/modules";
import VirtuesBox from "../boxes/VirtuesBox";

const anchorTypes = [
  { icon: <Clarity />, title: "clarity" },
  { icon: <Unity />, title: "unity" },
  { icon: <Balance />, title: "balance" },
  { icon: <Optimism />, title: "optimism" },
  { icon: <Patience />, title: "patience" },
  { icon: <Boundary />, title: "boundary" },
  { icon: <Flow />, title: "flow" },
  { icon: <Aspiration />, title: "aspiration" },
];

const lineTypes = [
  { icon: <ClarityLine />, title: "clarity" },
  { icon: <UnityLine />, title: "unity" },
  { icon: <BalanceLine />, title: "balance" },
  { icon: <OptimismLine />, title: "optimism" },
];

const Properties = () => {
  const dispatch = useDispatch();

  const {
    anchor,
    path,
    words,
  }: { anchor: boolean; path: boolean; words: boolean } = useSelector(
    (state: any) => state.entities.modules.propertiesBox.type
  );

  return (
    <Box>
      <div
        className={"bg-white overflow-hidden w-max flex mb-4 rounded-[20px]"}
      >
        <div onClick={() => dispatch(wordsModuleActivated())}>
          {" "}
          <Button1 label="words" active={words} smallText={true} />
        </div>
        <div onClick={() => dispatch(anchorModuleActivated())}>
          {" "}
          <Button1 label="anchors" active={anchor} smallText={true} />
        </div>
        <div onClick={() => dispatch(pathModuleActivated())}>
          {" "}
          <Button1 label="paths" active={path} smallText={true} />
        </div>
      </div>
      {words ? (
        <div>
          <VirtuesBox />
        </div>
      ) : (
        <>
          {anchor && (
            <div className={`grid grid-cols-2 gap-[10px]`}>
              {anchorTypes.map((item) => {
                return (
                  <AnchorBox
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    property="anchor"
                  />
                );
              })}
            </div>
          )}
          {path && (
            <div className={`grid grid-cols-2 gap-[10px]`}>
              {lineTypes.map((item) => {
                return (
                  <div key={item.title} className="w-full">
                    <AnchorBox
                      icon={item.icon}
                      title={item.title}
                      property="line"
                    />
                  </div>
                );
              })}
            </div>
          )}
          <SizeRangeSlider />
          <PropertiesColors />
          <LuminosityRangeSlider />
        </>
      )}
    </Box>
  );
};

export default Properties;
