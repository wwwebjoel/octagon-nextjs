"use client";

import React from "react";
import { Button4 } from "@/components/common/Buttons";
import headerData from "@/data/header.json";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuItemChanged } from "@/store/header";
import { levelSelected, trapezoidSelected } from "@/store/currentSelection";
import OctagonSVG from "../images/Octagon";

const BottomHeader = () => {
  const dispatch = useDispatch();
  const { activeMenuItem }: any = useSelector<any>(
    (state) => state.entities.header
  );

  
  return (
    <div
      className={
        "h-[70px] w-full bg-black bg-opacity-40 flex items-center justify-center gap-5"
      }
    >
      {/* {headerData?.topHeader
        ?.find((item) => item?.title === activeTopMenuItem)
        ?.bottomHeader?.map((secondaryItem) => {
          const { title } = secondaryItem;
          return (
            <div key={title} onClick={() => handleClick(title)}>
              <Button2 label={title} active={title === activeBottomMenuItem} />
            </div>
          );
        })} */}

      {headerData?.bottomHeader?.map((secondaryItem) => {
          const { title } = secondaryItem;
          return (
            <div key={title} onClick={() => handleClick(title, dispatch)}>
              <Button4 label={title} active={title === activeMenuItem} />
            </div>
          );
        })} 

      <Layers />
    </div>
  );
};

export default BottomHeader;

export const handleClick = (title: string, dispatch: any) => {
  if (title === "essence") {
    dispatch(trapezoidSelected({ level: [2], id: -1 }));
  }
  if (title === "roots") {
    dispatch(trapezoidSelected({ level: [2, 3], id: -1 }));
  }
  if (title === "foundations") {
    dispatch(trapezoidSelected({ level: [2, 3], id: -1 }));
  }
  if (title === "constellations") {
    dispatch(levelSelected({ level: [6] }));
  }
  if (title === "distortions") {
    dispatch(trapezoidSelected({ level: [2.5], id: -1 }));
  }
  if (title === "environment") {
    dispatch(trapezoidSelected({ level: [4], id: -1 }));
  }
  dispatch(activeMenuItemChanged({ item: title }));
};

const Layers = () => {
  const activeMenuItem = useSelector(
    (state: any) => state.entities.header.activeMenuItem
  );

  const menuItems = {
    roots: 4,
    foundations: 3,
    essence: 2,
    contributions: 1,
    constellations: 0,
  };
  return (
    <div className="items-center flex flex-col pt-10 pl-5">
      {Array.from({ length: 5 }, (_, i) => {
        const isActive = Object.entries(menuItems).some(
          ([key, value]) => activeMenuItem === key && i === value
        );

        return (
          <div key={i} className="relative" style={{ zIndex: 10 - i }}>
            <OctagonSVG active={isActive} width="50px" marginTop="-40px"/>
          </div>
        );
      })}
    </div>
  );
};
