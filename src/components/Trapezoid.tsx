import React from 'react';

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
                <div className={'h-0 w-0 relative z-trapezoid'} style={{rotate: `${(index * 45 )+ 112.5}deg`}}>
                <div
                className={' cursor-pointer bg-opacity-50 flex justify-center items-center'}
                style={{
                    width: longSide,
                    height: height,
                    background: 'linear-gradient(0deg, rgba(254, 121, 249, 0.6) 0%, rgba(160, 107, 228, 0.6) 43%, rgba(86, 74, 141, 0.6) 100%)',
                    clipPath: `polygon( ${longSide}px 0, ${shortSide+sideExtraLength}px ${height}px, ${sideExtraLength}px ${height}px, 0 0 )`
                }}>
                    Data
                </div>

            </div>}
        </>
    );
};

export default Trapezoid;
