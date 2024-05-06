'use client'
import React from 'react';
import Point from '@/components/Point';
import { anchorPointSelected, anchorPointsSelectionReset } from '@/store/anchor';
import { useDispatch, useSelector } from 'react-redux';
import { pointSelected } from '@/store/currentSelection';

interface PointsProps {
    radius: number;
    gap?: number;
    level?: number;
}

const Points: React.FC<PointsProps> = ({ radius, gap=0, level=1 }) => {

    const dispatch = useDispatch();

    const handleClick = (level: number, id: number)=>{
        dispatch(anchorPointsSelectionReset())
        dispatch(pointSelected({level, id}))
        dispatch(anchorPointSelected({level, id}))   
    }

    const r = radius + gap *(level-1)
    const iPoints = Array.from({ length: 8 }).map((_, index) => {
        const angle = (45 * index)
        return (
            <div
                onClick={()=>handleClick(level, index+1)}
                key={index}
                className="absolute h-0 w-0 overflow-visible cursor-pointer"
                style={{
                    left: `${r * Math.cos(angle * Math.PI / 180)}px`,
                    top: `${r * Math.sin(angle * Math.PI / 180)}px`
                }}
            >
                <Point level={level} id={index+1}/>
            </div>
        );
    });

    return <>{iPoints}</>;
};

export default Points;
