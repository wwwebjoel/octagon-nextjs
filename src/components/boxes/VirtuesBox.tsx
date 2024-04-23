import React from 'react'
import {Input1} from "@/components/common/Inputs";
import {Button3} from "@/components/common/Buttons";
import Box from "@/components/common/Box";
import virtuesData from "@/data/virtues.json"
import NavDown from "@/components/images/NavDown";

const VirtuesBox = ()=>{
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
                           return<React.Fragment key={virtue}>
                               <Button3 label={virtue}/>
                           </React.Fragment>
                       })
                   }
               </div>
           </div>

            </Box>
        </>
    )
}

export default VirtuesBox