import React from 'react'
import HexColors from "@/components/colorPicker/HexColors";
import CloseIcon from "@/components/common/CloseIcon";
import ColorPlusIcon from "@/components/colorPicker/ColorPlusIcon";

const ColorPicker = ()=>{
    return(
        <div className={'bg-[#151515] bg-opacity-85 p-4 rounded-[13px] overflow-hidden'}>

            <div className={'flex items-center justify-between gap-5 p-1 mb-3'}>
                <div className={`text-white text-[17px] tracking-tight font-semibold`}>Colors</div>
                <CloseIcon />

            </div>
            <HexColors />

            <div className={'mt-[26px] mb-2 flex gap-8 items-center'}>
                <div className={`bg-white w-[72px] shrink-0 aspect-square rounded-[10px] overflow-hidden`}></div>
                <div className={`w-full grid grid-cols-5 gap-3`}>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                    <ColorPlusIcon/>
                </div>

            </div>
        </div>
    )
}

export default ColorPicker;