'use client'
import React from 'react'
import {NextRoundButton} from "@/components/common/NextRoundButton";
import {useDispatch} from "react-redux";
import {landscapeModuleDeactivated} from "@/store/modules";
import {anchorPointSelected, anchorPointsSelectionReset} from "@/store/anchor";
import {pointSelected} from "@/store/currentSelection";

export default function Landscape(){
    const dispatch = useDispatch()
    const handleLandscapeClose = ()=>{
            dispatch(landscapeModuleDeactivated())
            dispatch(anchorPointsSelectionReset())
            dispatch(anchorPointSelected({level:1, id:7}))
    }

    return(
        <div className={`w-[870px] h-[562px] rounded-[30px] text-white px-[95px] py-[50px] border-[1px] border-solid border-[#9D53E7]`}
        style={{
            background: `linear-gradient(180deg, rgba(40, 0, 76, 0.6) 42.5%, rgba(6, 0, 33, 0.6) 100%)`
        }}
        >
            <div>
                <div className={'font-black text-[48px] text-center'}>Landscape
                </div>
                <div className={`font-bold text-2xl text-center`}>Setup your journal</div>
            </div>
            <div className={`my-5`}>
                <Divider />
                <div className={`font-medium text-xl text-center py-3`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <Divider />
            </div>
            <div className={`flex justify-center pt-4`} onClick={handleLandscapeClose}>
                <NextRoundButton />
            </div>
        </div>
    )
}

const Divider = ()=>{
    return(
        <div className={'w-full h-px bg-[#9D53E7]'}>

        </div>
    )
}
