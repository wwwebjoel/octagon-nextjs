'use client'
import React from 'react';
import Box from "@/components/common/Box";
import {getNonNullTrapezoidDataValues} from "../../../utilities/octagon";
import { useSelector } from "react-redux";

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
    };
    // ...other state slices
}

interface OctagonState {
    [levelKey: string]: Level;
}

const WordsBox: React.FC = () => {
    // Properly type the useSelector hook using the RootState interface
    const octagonState : any = useSelector((state: RootState) => state.entities.octagon);

    // the state as an argument and return an array of strings:
    const words = getNonNullTrapezoidDataValues(octagonState);

    const currentSelection: any = useSelector((state: any) => state.entities.currentSelection);
    const { level, id } = currentSelection || {};

    // Access level and id safely, returning null if either is undefined
    const currentSelectedData: any = useSelector((state: any) =>
        state.entities.octagon[`level${level}`]?.trapezoid[id]?.data
    );

    return (
        <Box>
            <div className={'font-black text-lg mb-5'}>words</div>

           <div className={`flex flex-col gap-[10px]`}>
            { Array.from(new Set(getNonNullTrapezoidDataValues(octagonState))).map((word, index) => (
                <div className={`${currentSelectedData === word ? 'bg-[#FFAC01]': 'bg-[#9D53E7]'} rounded-full flex justify-center p-1`}
                    key={index}>{word}</div>
            ))}
           </div>
        </Box>
    );
};

export default WordsBox;
