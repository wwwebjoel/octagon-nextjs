"use client";
import React from "react";
import { transformNumber } from "../../utilities/transformNumber";
import { useSelector } from "react-redux";
import { newTrapezoidSelected } from "@/store/octagon";
import { useDispatch } from "react-redux";
import { trapezoidSelected } from "@/store/currentSelection";
import { activeBottomMenuItemChanged, activeTopMenuItemChanged } from "@/store/header";

interface TrapezoidProps {
  radius: number;
  gap: number;
  level?: number;
  index?: number;
}

const Trapezoid: React.FC<TrapezoidProps> = ({
  gap,
  radius,
  level = 2,
  index = 0,
}) => {
  const dispatch = useDispatch();

  const thisTrapeZoidData: any = useSelector<any>(
    (state) =>
      state.entities.octagon[`level${level}`]?.trapezoid[transformNumber(index)]
  );

  const thisVirtueData = useSelector((state: any) =>
    state.entities.virtues.find(
      (item: any) => item.virtue === thisTrapeZoidData?.data
    )
  );

  const height = gap * Math.sin((67.5 * Math.PI) / 180);
  const longSide =
    (radius + (level - 1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const shortSide =
    (radius + (level - 2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const sideExtraLength = (longSide - shortSide) / 2;

  const handleClick = (e: React.MouseEvent, data: string) => {
    e.stopPropagation();
    if(level===2){
      dispatch(activeTopMenuItemChanged({item:"perennials"}))
      dispatch(activeBottomMenuItemChanged({item:"essence"}))
    }
    if(level===3){
      dispatch(activeTopMenuItemChanged({item:"perennials"}))
      dispatch(activeBottomMenuItemChanged({item:"roots"}))
    }
    if(level===4){
      dispatch(activeTopMenuItemChanged({item:"annuals"}))
      dispatch(activeBottomMenuItemChanged({item:"foundations"}))
    }
    
    dispatch(
      newTrapezoidSelected({ level: level, id: transformNumber(index) })
    );
    dispatch(trapezoidSelected({ level:[level], id: transformNumber(index), data }));
  };
  const selectedData: any = useSelector<any>(
    (state) => state.entities.currentSelection
  );
  return (
    <>
      {level >1  && (
        <div
          className={"h-0 w-0 relative z-trapezoid"}
          style={{ 
            rotate: `${index * 45 + 112.5}deg` ,
            ...((level - Math.floor(level))
            ? {
             
                zIndex: 99999999999999,
              }
            : {  zIndex: 0 }),
          
          }}
          onClick={(e) => handleClick(e, thisTrapeZoidData.data)}
        >
          <div
            className={`relative transition-all duration-300 ${`${
              !thisVirtueData?.color && selectedData.level.includes(level) && selectedData.trapezoid
                ? "bg-inner-carnationPink bg-opacity-40 "
                : "bg-opacity-50"
            } cursor-pointer bg-gradient-trapezoid-inactive`}  flex justify-center items-center hover:bg-gradient-trapezoid-active text-white`}
            style={{
              ...(thisVirtueData?.color && {
                background: thisVirtueData.color,
              }),
              ...((level - Math.floor(level))
                ? {
                    height: height * (level - Math.floor(level))
                  }
                : { height: height}),

              width: longSide,
              clipPath: `polygon( ${longSide}px 0, ${
                shortSide + sideExtraLength
              }px ${height}px, ${sideExtraLength}px ${height}px, 0 0 )`,
            }}
          >
            {/*Level: {level}*/}
            {/*Index: {transformNumber(index)}*/}

            {thisTrapeZoidData?.selected && (
              <div className="absolute top-0 left-0 pt-4 w-full flex justify-center">
                <div className="bg-white h-3 aspect-square rounded-full animate-ping"></div>
              </div>
            )}

            {thisTrapeZoidData.data}
          </div>
        </div>
      )}
    </>
  );
};

export default Trapezoid;
