'use client'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeColorChanged, colorSaved} from "@/store/colors";
import {anchorPointColorChanged} from "@/store/anchor";

function ColorPlusIcon({position}:{position:number}){
    const dispatch = useDispatch()
    const activeColor : any = useSelector<any>(state=>state.entities.colors.activeColor)
    const savedColor : any = useSelector<any>(state=>state.entities.colors.savedColors[position])
    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point} : {level: number, id: number, point: boolean} = currentSelectionData;

    const handleClick = ()=>{
        if(savedColor){
            dispatch(activeColorChanged({color: savedColor}))
            if(point){
                dispatch(anchorPointColorChanged({id, level, color:savedColor}))
            }
        } else {
            dispatch(colorSaved({position, color: activeColor}))

        }
    }

    return (
        <>
            <div className={'h-7 aspect-square rounded-full flex items-center justify-center cursor-pointer'}
            style={{backgroundColor: savedColor? savedColor : `#272332`}}
                 onClick={handleClick}
            >
                {!savedColor && <div className={`text-[#EBEBF5] opacity-60 text-[32px]`}>+</div>}
            </div>

        </>
    );
}

export default ColorPlusIcon;