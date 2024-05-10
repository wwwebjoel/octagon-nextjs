'use client'
import React from 'react'
import HexColors from "@/components/colorPicker/HexColors";
import CloseIcon from "@/components/common/RoundedCloseIcon";
import ColorPlusIcon from "@/components/colorPicker/ColorPlusIcon";
import ColorPickerBoxDownArrow from "@/components/colorPicker/ColorPickerBoxDownArrow";
import {ActiveColorBox} from "@/components/colorPicker/ActiveColorBox";
const ColorPicker = ()=>{



    return(
        <div className={'relative'}>
            <div className={'relative bg-[#151515] bg-opacity-85 p-4 rounded-[13px] overflow-hidden'}>

                <div className={'flex items-center justify-between gap-5 p-1 mb-3'}>
                    <div className={`text-white text-[17px] tracking-tight font-semibold`}>Colors</div>
                    <CloseIcon/>

                </div>
                <HexColors/>

                <div className={'mt-[26px] mb-2 flex gap-8 items-center'}>

                    <ActiveColorBox />

                    <div className={`w-full grid grid-cols-5 gap-3`}>
                        {Array.from({ length: 10 }, (_, index) => (
                            <ColorPlusIcon key={index} position={index+1} />
                        ))}
                    </div>

                </div>

            </div>
            <div className={'absolute w-full left-0 bottom-0 translate-y-full flex justify-center'}>
                <ColorPickerBoxDownArrow/>
            </div>
        </div>
    )
}

export default ColorPicker;