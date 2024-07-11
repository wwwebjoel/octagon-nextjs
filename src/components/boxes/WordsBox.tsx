import React from "react";
import Box from "@/components/common/Box";
import { getNonNullTrapezoidDataValues } from "../../../utilities/octagon";
import { useSelector } from "react-redux";
import SingleWord from "./SingleWord";

interface Trapezoid {
  selected: boolean;
  data: string | null;
}

interface Level {
  level: number;
  selected: boolean;
  trapezoid: Record<number, Trapezoid>;
}

interface RootState {
  entities: {
    octagon: OctagonState;
    // Add other state slices if needed
    virtues: any[]; // Assuming the structure of the virtues slice
    currentSelection: {
      level: number[];
      id: number;
    };
  };
}

interface OctagonState {
  [levelKey: string]: Level;
}

const WordsBox: React.FC = () => {
  // Properly type the useSelector hook using the RootState interface
  const octagonState: OctagonState = useSelector(
    (state: RootState) => state.entities.octagon
  );
  const currentSelection = useSelector(
    (state: RootState) => state.entities.currentSelection
  );
  const { level, id } = currentSelection || {};

  // Access level and id safely, returning null if either is undefined
  const currentSelectedData =
    octagonState[`level${level}`]?.trapezoid[id]?.data;

  return (
   <div className="w-full max-w-[220px] m-auto">
     <Box>
      <div className={"font-black text-lg mb-5"}>words</div>

      <div className={`flex flex-col gap-[10px]`}>
        {Array.from(new Set(getNonNullTrapezoidDataValues(octagonState))).map(
          (word, index) => {
            return (
              <React.Fragment key={index}>
                <SingleWord
                  word={word}
                  currentSelectedData={currentSelectedData}
                />
              </React.Fragment>
            );
          }
        )}
      </div>
    </Box>
   </div>
  );
};

export default WordsBox;
