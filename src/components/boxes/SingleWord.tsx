import { changeVirtue } from "@/store/virtues";
import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

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

interface Level {
  level: number;
  selected: boolean;
  trapezoid: Record<number, Trapezoid>;
}
interface Trapezoid {
  selected: boolean;
  data: string | null;
}

const SingleWord = ({
  word,
  currentSelectedData,
}: {
  word: string;
  currentSelectedData: string | null;
}) => {
  const [newWord, setNewWord] = useState<string>(word);

  const dispatch = useDispatch();

  const virtuesData: any[] = useSelector(
    (state: RootState) => state.entities.virtues
  );
  const thisVirtueData = virtuesData.find((item) => item.virtue === word);

  const thisVirtueDataIndex = virtuesData.findIndex(
    (item: any) => item.virtue === word
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewWord(e.target.value);
    if (newWord.trim() !== "") {
        console.log(thisVirtueDataIndex)
      dispatch(
        changeVirtue({ newVirtue: newWord, index: thisVirtueDataIndex })
      );
    }
  };

  return (
    <div
      className={`${
        !thisVirtueData?.color &&
        (currentSelectedData === word ? "bg-[#FFAC01]" : "bg-[#9D53E7]")
      } rounded-full flex justify-center p-1`}
      style={{
        ...(thisVirtueData?.color && { background: thisVirtueData.color }),
      }}
    >
      <input
        className="text-white bg-transparent flex justify-center focus:outline-none"
        value={newWord}
        onChange={handleChange}
      />
    </div>
  );
};

export default SingleWord;
