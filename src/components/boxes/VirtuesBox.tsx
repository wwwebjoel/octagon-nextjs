'use client'
import React from 'react'
import {Input1} from "@/components/common/Inputs";
import {Button3} from "@/components/common/Buttons";
import Box from "@/components/common/Box";
import virtuesData from "@/data/virtues.json"
import NavDown from "@/components/images/NavDown";
import {useDispatch, useSelector} from "react-redux";
import {trapezoidDataWritten} from "@/store/octagon";
import {getNonNullTrapezoidDataValues} from "../../../utilities/octagon";
import ApplyToAllButton from "@/components/common/ApplyToAllButton";
import SingleVirtueButton from "@/components/common/SingleVirtueButton";

const VirtuesBox = ()=>{
    const dispatch = useDispatch()
    const octagonState: any = useSelector<any>(state=>state.entities.octagon)

    const handleClick = (virtue : string)=>{
        // if(!getNonNullTrapezoidDataValues(octagonState).includes(virtue)){
        //     dispatch(trapezoidDataWritten({data: virtue}))
        // }
        dispatch(trapezoidDataWritten({data: virtue}))

    }

    return(
        <>
            <Box>
                <div className={'flex gap-4 justify-between align-center'}>
                    <div className={'font-black text-lg mb-5'}>choose your word</div>
                    <NavDown/>
                </div>
                <div>
                    <Input1/>
                    <div className={'flex flex-col gap-2.5 mt-3'}>
                   {
                       virtuesData?.virtues.map((virtue, index)=>{

                           return<div onClick={()=>{handleClick(virtue)}} key={index}>
                               <SingleVirtueButton label={virtue}/>
                           </div>
                       })
                   }
               </div>
           </div>
           <div className={'absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2'}>
               <ApplyToAllButton />
           </div>
            </Box>
        </>
    )
}

export default VirtuesBox