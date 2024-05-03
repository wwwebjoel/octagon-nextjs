import React from 'react'
import HexColors from "@/components/colorPicker/HexColors";
import CloseIcon from "@/components/common/CloseIcon";

const ColorPicker = ()=>{
    return(
        <div className={'bg-[#151515] bg-opacity-85 p-4 rounded-[13px] overflow-hidden'}>

            <div className={'flex items-center justify-between gap-5 p-1 mb-3'}>
                <div className={`text-white text-[17px] tracking-tight font-semibold`}>Colors</div>
                <CloseIcon />

            </div>
            <HexColors />
        </div>
    )
}

export default ColorPicker;