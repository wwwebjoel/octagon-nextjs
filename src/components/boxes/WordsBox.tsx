import React from 'react';
import Box from '@/components/common/Box';
import { getNonNullTrapezoidDataValues } from '../../../utilities/octagon';
import { useSelector } from 'react-redux';

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
            level: number;
            id: number;
        };
    };
}

interface OctagonState {
    [levelKey: string]: Level;
}

const WordsBox: React.FC = () => {
    // Properly type the useSelector hook using the RootState interface
    const octagonState: OctagonState = useSelector((state: RootState) => state.entities.octagon);
    const virtuesData: any[] = useSelector((state: RootState) => state.entities.virtues);
    const currentSelection = useSelector((state: RootState) => state.entities.currentSelection);
    const { level, id } = currentSelection || {};

    // Access level and id safely, returning null if either is undefined
    const currentSelectedData = octagonState[`level${level}`]?.trapezoid[id]?.data;

    return (
        <Box>
            <div className={'font-black text-lg mb-5'}>words</div>

            <div className={`flex flex-col gap-[10px]`}>
                {Array.from(new Set(getNonNullTrapezoidDataValues(octagonState))).map((word, index) => {
                    const thisVirtueData = virtuesData.find((item) => item.virtue === word);
                    return (
                        <div
                            className={`${!thisVirtueData?.color && (currentSelectedData === word ? 'bg-[#FFAC01]' : 'bg-[#9D53E7]')} rounded-full flex justify-center p-1`}
                            style={{
                                ...(thisVirtueData?.color && { background: thisVirtueData.color }),
                            }}
                            key={index}
                        >
                            {word}
                        </div>
                    );
                })}
            </div>
        </Box>
    );
};

export default WordsBox;
