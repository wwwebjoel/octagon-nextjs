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

    return (
        <Box>
            <div className={'font-black text-lg mb-5'}>words</div>
            {getNonNullTrapezoidDataValues(octagonState).map((word, index) => (
                <div key={index}>{word}</div>
            ))}
        </Box>
    );
};

export default WordsBox;
