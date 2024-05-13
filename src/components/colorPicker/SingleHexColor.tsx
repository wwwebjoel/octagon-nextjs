'use client'

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeColorChanged} from "@/store/colors";
import {anchorPointColorChanged, anchorPointShapeChanged} from "@/store/anchor";

export default function SingleHexColor({color}: {color: string}){
    const dispatch = useDispatch()
    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point} : {level: number, id: number, point: boolean} = currentSelectionData;

    const handleClick = (id:number, level: number, color: string)=>{

        dispatch(activeColorChanged({color}))
        if(point){
            dispatch(anchorPointColorChanged({id, level, color}))
        }
    }

    const handleHover = (id:number, level: number, color: string)=>{

        dispatch(activeColorChanged({color}))

    }
    return (
        <div
            style={{backgroundColor: color, width: '30px', height: '28px'}}
            onClick={()=>handleClick(id, level, color)}
            onMouseEnter={()=>handleHover(id, level, color)}
        >
            <div className={`w-full h-full hover:border-[3px] hover:border-white hover:rounded-sm cursor-pointer`}>
            </div>
        </div>
    )
}