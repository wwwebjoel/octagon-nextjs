'use client'
import React from 'react';
import Box from "@/components/common/Box";
import { useSelector } from "react-redux";
import { transformNumber } from "../../../utilities/transformNumber";

interface Trapezoid {
    selected: boolean;
    data: string | null;
}

interface Level {
    octagon: (state: State) => State;
    level: number;
    selected: boolean;
    trapezoid: Record<number, Trapezoid>;
}

interface State {
    [levelKey: string]: Level;
}

const getNonNullTrapezoidDataValues = (state: State): string[] => {
    const nonNullDataValues: string[] = [];

    Object.values(state).forEach(level => {
        Object.values(level.trapezoid).forEach(trapezoid => {
            if (trapezoid.data !== null) {
                nonNullDataValues.push(trapezoid.data);
            }
        });
    });

    return nonNullDataValues;
};

const WordsBox: React.FC = () => {

    const octagonData: any = useSelector<State>(state => state.entities.octagon);

    return (
        <Box>
            <div className={'font-black text-lg mb-5'}>words</div>
            {getNonNullTrapezoidDataValues(octagonData).map((word, index) => (
                <div key={index}>{word}</div>
            ))}
        </Box>
    );
};

export default WordsBox;
