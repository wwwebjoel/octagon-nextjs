'use client'
import React from 'react'
import {Input1} from "@/components/common/Inputs";
import {Button3} from "@/components/common/Buttons";
import Box from "@/components/common/Box";
import virtuesData from "@/data/virtues.json"
import NavDown from "@/components/images/NavDown";
import {useDispatch} from "react-redux";
import {trapezoidDataWritten} from "@/store/octagon";

const VirtuesBox = ()=>{
    const dispatch = useDispatch()

    const handleClick = (virtue : string)=>{
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
                       virtuesData?.virtues.map(virtue=>{

                           return<div onClick={()=>{handleClick(virtue)}} key={virtue}>
                               <Button3 label={virtue}/>
                           </div>
                       })
                   }
               </div>
           </div>

            </Box>
        </>
    )
}

export default VirtuesBox