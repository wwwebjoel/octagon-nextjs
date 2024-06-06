// "use client";
// import React, { useEffect } from "react";
// import { transformNumber } from "../../utilities/transformNumber";
// import { useSelector } from "react-redux";
// import { newTrapezoidSelected } from "@/store/octagon";
// import { useDispatch } from "react-redux";
// import { trapezoidSelected } from "@/store/currentSelection";
// import {
//   activeBottomMenuItemChanged,
//   activeTopMenuItemChanged,
// } from "@/store/header";
// import { gsap } from "gsap/dist/gsap";

// interface TrapezoidProps {
//   radius: number;
//   gap: number;
//   level?: number;
//   index?: number;
// }

// const Trapezoid: React.FC<TrapezoidProps> = ({
//   gap,
//   radius,
//   level = 2,
//   index = 0,
// }) => {
//   const dispatch = useDispatch();

//   const thisTrapeZoidData: any = useSelector<any>(
//     (state) =>
//       state.entities.octagon[`level${level}`]?.trapezoid[transformNumber(index)]
//   );

//   const thisVirtueData = useSelector((state: any) =>
//     state.entities.virtues.find(
//       (item: any) => item.virtue === thisTrapeZoidData?.data
//     )
//   );

//   const height = gap * Math.sin((67.5 * Math.PI) / 180);
//   const longSide =
//     (radius + (level - 1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
//   const shortSide =
//     (radius + (level - 2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
//   const sideExtraLength = (longSide - shortSide) / 2;

//   const handleClick = (e: React.MouseEvent, data: string) => {
//     e.stopPropagation();
//     if (level === 2) {
//       dispatch(activeTopMenuItemChanged({ item: "perennials" }));
//       dispatch(activeBottomMenuItemChanged({ item: "essence" }));
//     }
//     if (level === 3) {
//       dispatch(activeTopMenuItemChanged({ item: "perennials" }));
//       dispatch(activeBottomMenuItemChanged({ item: "roots" }));
//     }
//     if (level === 4) {
//       dispatch(activeTopMenuItemChanged({ item: "annuals" }));
//       dispatch(activeBottomMenuItemChanged({ item: "foundations" }));
//     }

//     dispatch(
//       newTrapezoidSelected({ level: level, id: transformNumber(index) })
//     );
//     dispatch(
//       trapezoidSelected({ level: [level], id: transformNumber(index), data })
//     );
//   };
//   const selectedData: any = useSelector<any>(
//     (state) => state.entities.currentSelection
//   );

//   const tl = gsap.timeline({ repeat: 0 });

//   useEffect(() => {
//     tl.to(".trapezoid", {
//       duration: 3,
//       rotation: 360,
//     });
//   }, []);

//   return (
//     <>
//       {level > 1 && (
//         <div
//           className={"h-0 w-0 relative z-trapezoid"}
//           style={{
//             rotate: `${index * 45 + 112.5}deg`,
//             ...(level - Math.floor(level)
//               ? {
//                   zIndex: 99999999999999,
//                 }
//               : { zIndex: 0 }),
//           }}
//           onClick={(e) => handleClick(e, thisTrapeZoidData.data)}
//         >
//           <div
//             className={`trapezoid relative transition-all duration-300 ${`${
//               !thisVirtueData?.color &&
//               selectedData.level.includes(level) &&
//               selectedData.trapezoid
//                 ? "bg-inner-carnationPink bg-opacity-40 "
//                 : "bg-opacity-50"
//             } cursor-pointer bg-gradient-trapezoid-inactive`}  flex justify-center items-center hover:bg-gradient-trapezoid-active text-white`}
//             style={{
//               ...(thisVirtueData?.color && {
//                 background: thisVirtueData.color,
//               }),
//               ...(level - Math.floor(level)
//                 ? {
//                     height: height * (level - Math.floor(level)),
//                   }
//                 : { height: height }),

//               width: longSide,
//               clipPath: `polygon( ${longSide}px 0, ${
//                 shortSide + sideExtraLength
//               }px ${height}px, ${sideExtraLength}px ${height}px, 0 0 )`,
//             }}
//           >
//             {/*Level: {level}*/}
//             {/*Index: {transformNumber(index)}*/}

//             {thisTrapeZoidData?.selected && (
//               <div className="absolute top-0 left-0 pt-4 w-full flex justify-center">
//                 <div className="bg-white h-3 aspect-square rounded-full animate-ping"></div>
//               </div>
//             )}

//             {thisTrapeZoidData.data}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Trapezoid;

"use client";
import React, { useCallback, useEffect } from "react";
import { transformNumber } from "../../utilities/transformNumber";
import { useSelector } from "react-redux";
import { newTrapezoidSelected } from "@/store/octagon";
import { useDispatch } from "react-redux";
import { trapezoidSelected } from "@/store/currentSelection";
import {
  activeBottomMenuItemChanged,
  activeTopMenuItemChanged,
} from "@/store/header";
import { gsap } from "gsap";

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

      const menuChanges: any = {
        2: { top: "perennials", bottom: "essence" },
        3: { top: "perennials", bottom: "roots" },
        4: { top: "annuals", bottom: "foundations" },
      };

      const { top, bottom } = menuChanges[level] || {};
      if (top && bottom) {
        dispatch(activeTopMenuItemChanged({ item: top }));
        dispatch(activeBottomMenuItemChanged({ item: bottom }));
      }

      dispatch(newTrapezoidSelected({ level, id: transformNumber(index) }));
      dispatch(
        trapezoidSelected({ level: [level], id: transformNumber(index), data })
      );
    },
    [dispatch, index, level]
  );

  useEffect(() => {
    const tl = gsap.timeline()
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
    const tl1 = gsap.timeline()
    tl1.to(".trapezoid-block", {
      duration: .8,
      rotation: 0,
      opacity: .4,
      scale: 1,
      x:0,
      y:"50%",
      ease: "none",
    });

    return () => {
      tl1.kill();
    };
  });

  return (
    <>
      {level > 1 && (
        <div
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
                ? level===2.5? "bg-[#e35f01]" :"bg-inner-carnationPink bg-opacity-40 "
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
            {thisTrapezoidData.data}
          </div>
          {selectedData.level.includes(level) && level!==2.5  && <div 
           style={{
            height: height * (level - Math.floor(level)) || height,
            width: longSide,
            clipPath: `polygon(${longSide}px 0, ${
              shortSide + sideExtraLength
            }px ${height}px, ${sideExtraLength}px ${height}px, 0 0)`,
          }}
          className={`trapezoid-block absolute left-0 top-0 w-full h-full rotate-90 bg-inner-carnationPink opacity-0 scale-125 translate-x-1/2 -translate-y-1/2`}></div>}

        </div>
      )}
    </>
  );
};

export default Trapezoid;
