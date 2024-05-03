'use client'
import React from 'react';
import {transformNumber} from "../../utilities/transformNumber";
import {useSelector} from "react-redux";
import {newTrapezoidSelected} from "@/store/octagon"
import {useDispatch} from "react-redux";

interface TrapezoidProps {
    radius: number;
    gap: number;
    level?: number;
    index?: number;
}

const Trapezoid: React.FC<TrapezoidProps> = ({ gap, radius, level= 2, index=0 }) => {

    const dispatch = useDispatch();


    const thisTrapeZoidData: any = useSelector<any>(state=>state.entities.octagon[`level${level}`]?.trapezoid[transformNumber(index)])


    const height = gap * Math.sin(67.5 * Math.PI/180)
    const longSide = (radius + (level-1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
    const shortSide = (radius + (level-2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
    const sideExtraLength = (longSide-shortSide)/2

    const handleClick = ()=>{
        dispatch(newTrapezoidSelected({level: level, id: (transformNumber(index))}))
    }

    return (
        <>
            {level > 1 &&
                <div className={'h-0 w-0 relative z-trapezoid'} style={{rotate: `${((index) * 45 )+ 112.5}deg`}}  onClick = {handleClick}>

                <div
                className={`${thisTrapeZoidData.selected? 'bg-gradient-trapezoid-active': 'bg-gradient-trapezoid-inactive cursor-pointer'} bg-opacity-50 flex justify-center items-center hover:bg-gradient-trapezoid-active text-white`}
                style={{
                    width: longSide,
                    height: height,
                    clipPath: `polygon( ${longSide}px 0, ${shortSide+sideExtraLength}px ${height}px, ${sideExtraLength}px ${height}px, 0 0 )`
                }}>
                    {/*Level: {level}*/}
                    {/*Index: {transformNumber(index)}*/}

                    {thisTrapeZoidData.data}
                </div>

            </div>}
        </>
    );
};

export default Trapezoid;
