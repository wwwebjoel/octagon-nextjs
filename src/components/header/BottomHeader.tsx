"use client";

import React from "react";
import { Button4 } from "@/components/common/Buttons";
import headerData from "@/data/header.json";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuItemChanged, layersActivated } from "@/store/header";
import { levelSelected, menuClicked, trapezoidSelected } from "@/store/currentSelection";
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
        "h-[56px] w-full flex items-center justify-center gap-2 transition-all duration-300 border-t border-portfolio-indigo/10"
      }
      style={{ background: 'rgba(6, 5, 15, 0.95)', backdropFilter: 'blur(12px)' }}
    >
     
      <div className="flex gap-2 text-white/50 items-center border-r border-portfolio-indigo/20 pr-4 mr-2">
        <div className="text-xs font-semibold tracking-widest uppercase text-portfolio-slate">Layers</div>
        <div className="w-7 cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={() => dispatch(layersActivated())}>
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
  if (title === "about") {
    dispatch(trapezoidSelected({ level: [2], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "skills") {
    dispatch(trapezoidSelected({ level: [3], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "projects") {
    dispatch(trapezoidSelected({ level: [4], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "web dev") {
    dispatch(trapezoidSelected({ level: [2], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "tools") {
    dispatch(trapezoidSelected({ level: [3], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "automation") {
    dispatch(trapezoidSelected({ level: [2.5], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "services") {
    dispatch(levelSelected({ level: [4], id: -1 }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  if (title === "contact") {
    dispatch(levelSelected({ level: [4] }));
    dispatch(menuClicked({menuClicked: 1}))
  }
  dispatch(activeMenuItemChanged({ item: title }));
  dispatch(menuClicked({menuClicked: 1}))
};

