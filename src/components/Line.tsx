import { lineSelected } from "@/store/currentSelection";
import { linesSelectionReset } from "@/store/lines";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OptimismLine from "./lines/OptimismLine";
import ClarityLine from "./lines/ClarityLine";
import BalanceLine from "./lines/BalanceLine";
import UnityLine from "./lines/UnityLine";
import StarLine from "./lines/StarLine";

interface LineProps {
  side: number;
  index?: number;
  level?: number;
  constellation?: boolean;
}

const Line: React.FC<LineProps> = ({
  side,
  index = 0,
  level = 1,
  constellation = false,
}) => {
  const dispatch = useDispatch();

  const currentSelectionData: any = useSelector<any>(
    (state) => state.entities.currentSelection
  );

  const lineData: any = useSelector<any>(
    (state) => state.entities.lines[`level${level}`].line[`${index + 1}`]
  );

  const { selected, type, size, color, luminosity } = lineData;

  const handleClick = (level: number, id: number) => {
    // dispatch(anchorPointsSelectionReset())
    // dispatch(pointSelected({level, id}))
    // dispatch(anchorPointSelected({level, id}))
    if (!constellation) {
      dispatch(linesSelectionReset());
      dispatch(lineSelected({ level: [level], id }));
    }
  };

  return (
    <div
      className={"h-0 w-0 relative overflow-visible"}
      style={{ rotate: `${index * 45 + 112.5}deg` }}
      onClick={() => handleClick(level, index + 1)}
    >
      <div
        className={`
                rounded-full absolute top-0 left-0 -translate-y-1/2  cursor-pointer ${
                  selected && "animate-pulse"
                }`}
        style={{
          width: `${side}px`,
        }}
      >
        <DrawLine
          type={type}
          level={level}
          currentSelectionData={currentSelectionData}
          // height={
          //   level === 1
          //     ? size
          //     : currentSelectionData.level === level ||
          //       currentSelectionData.level === level + 1
          //     ? size
          //     : size / level
          // }
          height={size / level}
          color={color || "#fff"}
        />

        {/* {constellation && <StarLine height={1} color={color || "#fff"} />} */}
      </div>
    </div>
  );
};

export default Line;

const DrawLine = ({
  height,
  type,
  level,
  currentSelectionData,
  color,
}: {
  height: number;
  type: string | null;
  level: number;
  currentSelectionData: string;
  color: string;
}) => {
  return (
    <>
      {!type &&
        (level !== 2.5 ? (
          <ClarityLine height={height} color={color} />
        ) : (
          <UnityLine height={height} color={color} />
        ))}

      {type === "optimism" && <OptimismLine height={height} color={color} />}
      {type === "balance" && <BalanceLine height={height} color={color} />}
      {type === "unity" && <UnityLine height={height} color={color} />}
      {type === "clarity" && <ClarityLine height={height} color={color} />}
    </>
  );
};
