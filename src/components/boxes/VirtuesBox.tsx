'use client'
import React from 'react'
import {Input1} from "@/components/common/Inputs";
import Box from "@/components/common/Box";
import NavDown from "@/components/images/NavDown";
import {useSelector} from "react-redux";

import ApplyToAllButton from "@/components/common/ApplyToAllButton";
import SingleVirtueButton from "@/components/common/SingleVirtueButton";

const VirtuesBox = ()=>{

    const virtuesData = useSelector((state:any)=>state.entities.virtues)

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
                       virtuesData?.map((item:any, index:number)=>{

                           return <React.Fragment key={index}>

                                   <SingleVirtueButton label={item.virtue}/>

                           </React.Fragment>
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