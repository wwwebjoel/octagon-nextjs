'use client'

import React from "react";
import {useSelector} from "react-redux";

export function ActiveColorBox(){
    const activeColor : any = useSelector<any>(state=>state.entities.colors.activeColor)
    return (
        <div
            className={`w-[72px] shrink-0 aspect-square rounded-[10px] overflow-hidden`}
            style={{backgroundColor: activeColor}}
        >

        </div>
    )
}