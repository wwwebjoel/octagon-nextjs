"use client";

import React from "react";
import { Button4 } from "@/components/common/Buttons";
import headerData from "@/data/header.json";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuItemChanged, layersActivated } from "@/store/header";
import { levelSelected, trapezoidSelected } from "@/store/currentSelection";
import OctagonSVG from "../images/Octagon";
import LayersSVG from "../images/LayersSVG";


const BottomHeader = () => {
  const dispatch = useDispatch();
  const { activeMenuItem, layers }: any = useSelector<any>(
    (state) => state.entities.header
  );

  return (
    <div
      className={
        "h-[70px] w-full bg-black bg-opacity-40 flex items-center justify-center gap-5 transition-all duration-300"
      }
    >
     
      <div className="flex gap-4 text-[#fff] items-center">
        <div>Layers</div>
      <div className="w-12 cursor-pointer" onClick={()=>dispatch(layersActivated())}>
        <LayersSVG />
      </div>
      </div>
      {layers && headerData?.bottomHeader?.map((secondaryItem) => {
        const { title } = secondaryItem;
        return (
          <div key={title} onClick={() => handleClick(title, dispatch)}>
            <Button4 label={title} active={title === activeMenuItem} />
          </div>
        );
      })}

    
    </div>
  );
};

export default BottomHeader;

export const handleClick = (title: string, dispatch: any) => {
  if (title === "essence") {
    dispatch(trapezoidSelected({ level: [2], id: -1 }));
  }
  if (title === "expressions") {
    dispatch(trapezoidSelected({ level: [3], id: -1 }));
  }
  if (title === "environment") {
    dispatch(trapezoidSelected({ level: [4], id: -1 }));
  }
  if (title === "roots") {
    dispatch(trapezoidSelected({ level: [2, 3], id: -1 }));
  }
  if (title === "foundations") {
    dispatch(trapezoidSelected({ level: [2, 3], id: -1 }));
  }
  if (title === "contributions") {
    dispatch(levelSelected({ level: [4], id: -1 }));
  }
  if (title === "constellations") {
    dispatch(levelSelected({ level: [6] }));
  }
  if (title === "distortions") {
    dispatch(trapezoidSelected({ level: [2.5], id: -1 }));
  }
  dispatch(activeMenuItemChanged({ item: title }));
};

