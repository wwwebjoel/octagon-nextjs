'use client'
import React from 'react';
import {transformNumber} from "../../utilities/transformNumber";
import {useSelector} from "react-redux";
import {newTrapezoidSelected} from "@/store/octagon"
import {useDispatch} from "react-redux";
import {trapezoidSelected} from "@/store/currentSelection";

interface TrapezoidProps {
    radius: number;
    gap: number;
    level?: number;
    index?: number;
}

const Trapezoid: React.FC<TrapezoidProps> = ({ gap, radius, level= 2, index=0 }) => {

    const dispatch = useDispatch();


    const thisTrapeZoidData: any = useSelector<any>(state=>state.entities.octagon[`level${level}`]?.trapezoid[transformNumber(index)])

    const thisVirtueData = useSelector((state: any) => state.entities.virtues.find((item:any) => item.virtue === thisTrapeZoidData?.data));


    const height = gap * Math.sin(67.5 * Math.PI/180)
    const longSide = (radius + (level-1) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
    const shortSide = (radius + (level-2) * gap) / Math.sqrt(1 + 1 / Math.sqrt(2));
    const sideExtraLength = (longSide-shortSide)/2

    const handleClick = (data:string)=>{
        dispatch(newTrapezoidSelected({level: level, id: (transformNumber(index))}))
        dispatch(trapezoidSelected({level, id: (transformNumber(index)), data}))
    }
    const selectedLevel:any = useSelector<any>(state=>state.entities.currentSelection.level)
    return (
        <>
            {level > 1 &&
                <div className={'h-0 w-0 relative z-trapezoid'} style={{rotate: `${((index) * 45 )+ 112.5}deg`}}  onClick = {()=>handleClick(thisTrapeZoidData.data)}>

                <div
                className={`${thisTrapeZoidData.selected? 'bg-gradient-trapezoid-active' :`${!thisVirtueData?.color && selectedLevel === level? 'bg-inner-carnationPink bg-opacity-70': 'bg-opacity-50' } cursor-pointer bg-gradient-trapezoid-inactive`}  flex justify-center items-center hover:bg-gradient-trapezoid-active text-white`}
                style={{
                    ...(thisVirtueData?.color && !thisTrapeZoidData.selected && {background: thisVirtueData.color}),
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
