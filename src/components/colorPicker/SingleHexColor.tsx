'use client'

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {activeColorChanged, propertiesColorChanged} from "@/store/colors";
import {anchorPointColorChanged, anchorPointShapeChanged} from "@/store/anchor";
import { lineColorChanged } from "@/store/lines";
import { addVirtueColor } from "@/store/virtues";

export default function SingleHexColor({color, index}: {color: string; index: number}){
    const dispatch = useDispatch()
    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point, line, trapezoid} : {level: number[]; id: number; point: boolean; line: boolean; trapezoid: boolean;} = currentSelectionData;

    const selectedTrapezoidData: any = useSelector(
        (state: any) => state.entities.octagon[`level${level}`]?.trapezoid[id]?.data
      );

    const handleClick = (id:number, level: number, color: string)=>{

        dispatch(activeColorChanged({color}))

        dispatch(propertiesColorChanged({position: index+1, color}))

        if(point){
            dispatch(anchorPointColorChanged({id, level, color}))
        }
        if(line){
            dispatch(lineColorChanged({ id, level, color }));
        }

        if(trapezoid){
            if(selectedTrapezoidData){
                dispatch(addVirtueColor({ virtue: selectedTrapezoidData, color }));
            }
        }
    }

    const handleHover = (id:number, level: number, color: string)=>{

        dispatch(activeColorChanged({color}))

    }
    return (
        <div
            style={{backgroundColor: color, width: '30px', height: '28px'}}
            onClick={()=>handleClick(id, level[0], color)}
            onMouseEnter={()=>handleHover(id, level[0], color)}
        >
            <div className={`w-full h-full hover:border-[3px] hover:border-white hover:rounded-sm cursor-pointer`}>
            </div>
        </div>
    )
}