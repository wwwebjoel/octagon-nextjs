"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { transformNumber } from "../../utilities/transformNumber";
import { useSelector } from "react-redux";
import { newTrapezoidSelected } from "@/store/octagon";
import { useDispatch } from "react-redux";
import { trapezoidSelected } from "@/store/currentSelection";
import { activeMenuItemChanged } from "@/store/header";
import { gsap } from "gsap";

interface TrapezoidProps {
  radius: number;
  gap: number;
  level?: number;
  index?: number;
  angle?: number;
}

const Trapezoid: React.FC<TrapezoidProps> = ({
  gap,
  radius,
  level = 2,
  index = 0,
  angle = 0,
}) => {
  const dispatch = useDispatch();
  const trapezoidRef = useRef(null);

  const thisTrapezoidData = useSelector(
    (state: any) =>
      state.entities.octagon[`level${level}`]?.trapezoid[transformNumber(index)]
  );

  const thisVirtueData = useSelector((state: any) =>
    state.entities.virtues.find(
      (item: any) => item.virtue === thisTrapezoidData?.data
    )
  );

  const selectedData = useSelector(
    (state: any) => state.entities.currentSelection
  );

  const height = gap * Math.sin((67.5 * Math.PI) / 180);
  const longSide =
    (radius + (level - 1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const shortSide =
    (radius + (level - 2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
  const sideExtraLength = (longSide - shortSide) / 2;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, data: string) => {
      e.stopPropagation();
      dispatch(newTrapezoidSelected({ level, id: transformNumber(index) }));
      dispatch(
        trapezoidSelected({ level: [level], id: transformNumber(index), data })
      );
    },
    [dispatch, index, level]
  );

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".trapezoid", {
      duration: 0.2,
      rotation: 0,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  });

  useEffect(() => {
    const tl1 = gsap.timeline();
    tl1.fromTo(".trapezoid-block", {
      rotation: 90,
      opacity: 0,
      scale: 1.25,
      x: "50%",
      y: "-50%",
    }, {
      duration: 0.8,
      rotation: 0,
      opacity: 0.4,
      scale: 1,
      x: 0,
      y: "50%",
      ease: "none",});

    return () => {
      tl1.kill();
    };
  });

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.to("#level4Id", {
  //     duration: 2,
  //     rotationX: -360,
  //     ease: "power2.inOut",
  //     delay: 1,
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // });

  return (
    <>
      {level > 1 && (
        <div
          id={level === 4 ? "level4Id" : "levelId"}
          ref={trapezoidRef}
          className="h-0 w-0 relative z-trapezoid"
          style={{
            rotate: `${index * 45 + 112.5}deg`,
            zIndex: level - Math.floor(level) ? 999999999999 : 0,
          }}
          onClick={(e) => handleClick(e, thisTrapezoidData.data)}
        >
          <div
            className={`trapezoid relative transition-all duration-300 rotate-180 origin-center ${`${
              !thisVirtueData?.color &&
              selectedData.level.includes(level) &&
              selectedData.trapezoid
                ? level === 2.5
                  ? "bg-[#e35f01]"
                  : "bg-inner-carnationPink bg-opacity-40 "
                : "bg-opacity-50"
            } cursor-pointer bg-gradient-trapezoid-inactive`}  flex justify-center items-center hover:bg-gradient-trapezoid-active text-white`}
            style={{
              background: thisVirtueData?.color || undefined,
              height: height * (level - Math.floor(level)) || height,
              width: longSide,
              clipPath: `polygon(${longSide}px 0, ${
                shortSide + sideExtraLength
              }px ${height}px, ${sideExtraLength}px ${height}px, 0 0)`,
            }}
          >
            {thisTrapezoidData?.selected && (
              <div className="absolute top-0 left-0 pt-4 w-full flex justify-center">
                <div className="bg-white h-3 aspect-square rounded-full animate-ping"></div>
              </div>
            )}
            <div className={`${angle < 180 ? "rotate-180" : "rotate-0"}`}>
              {thisTrapezoidData.data}
            </div>
          </div>
          {selectedData.level.includes(level) && level !== 2.5 && (
            <div
              style={{
                height: height * (level - Math.floor(level)) || height,
                width: longSide,
                clipPath: `polygon(${longSide}px 0, ${
                  shortSide + sideExtraLength
                }px ${height}px, ${sideExtraLength}px ${height}px, 0 0)`,
              }}
              className={`trapezoid-block absolute left-0 top-0 w-full h-full rotate-90 bg-inner-carnationPink opacity-0 scale-125 translate-x-1/2 -translate-y-1/2`}
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default Trapezoid;
