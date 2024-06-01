'use client'

import React from 'react'
import {Button2} from "@/components/common/Buttons";
import headerData from "@/data/header.json"
import {useDispatch, useSelector} from "react-redux";
import {activeBottomMenuItemChanged} from "@/store/header";
import { levelSelected } from '@/store/currentSelection';

const BottomHeader = ()=>{
    const dispatch = useDispatch()
    const {activeTopMenuItem}: any = useSelector<any>(state=>state.entities.header)
    const {activeBottomMenuItem}: any = useSelector<any>(state=>state.entities.header)

    const handleClick = (title: string)=>{
        if(title === "essence"){
            dispatch(levelSelected({level: [2]}))
        }
        if(title === "roots"){
            dispatch(levelSelected({level: [3]}))
        }
        if(title === "foundations"){
            dispatch(levelSelected({level: [4]}))
        }
        if(title === "constellations"){
            dispatch(levelSelected({level: [6]}))
        }
        if(title === "distortions"){
            dispatch(levelSelected({level: [2.5]}))
        }
        dispatch(activeBottomMenuItemChanged({item:title}))
    }
    return(
        <div className={'h-[70px] w-full bg-black bg-opacity-40 flex items-center justify-center gap-5'} >

            {
                headerData?.topHeader?.find(item=>item?.title === activeTopMenuItem)?.bottomHeader?.map(
                    (secondaryItem => {
                        const {title }= secondaryItem
                        return (
                        <div key={title} onClick={()=>handleClick(title)}>
                            <Button2 label={title} active={title === activeBottomMenuItem}/>
                        </div>
                    )
                    })
                )

            }
        </div>
    )
}

export default BottomHeader

