import React from 'react';
import {transformNumber} from "../../utilities/transformNumber";

interface TrapezoidProps {
    radius: number;
    gap: number;
    level?: number;
    index?: number;
}

const Trapezoid: React.FC<TrapezoidProps> = ({ gap, radius, level= 2, index=0 }) => {

    const height = gap * Math.sin(67.5 * Math.PI/180)
    const longSide = (radius + (level-1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
    const shortSide = (radius + (level-2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
    const sideExtraLength = (longSide-shortSide)/2

    return (
        <>
            {level > 1 &&
                <div className={'h-0 w-0 relative z-trapezoid'} style={{rotate: `${((index) * 45 )+ 112.5}deg`}}>
                <div
                className={' cursor-pointer bg-opacity-50 flex justify-center items-center bg-gradient-trapezoid-inactive'}
                style={{
                    width: longSide,
                    height: height,
                    clipPath: `polygon( ${longSide}px 0, ${shortSide+sideExtraLength}px ${height}px, ${sideExtraLength}px ${height}px, 0 0 )`
                }}>
                    Level: {level}
                    Index: {transformNumber(index)}

                </div>

            </div>}
        </>
    );
};

export default Trapezoid;
