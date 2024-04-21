'use client'

import React from 'react'
import Button2 from "@/components/common/Button2";
import headerData from "@/data/header.json"
import {useDispatch, useSelector} from "react-redux";
import {activeBottomMenuItemChanged} from "@/store/header";

const BottomHeader = ()=>{
    const dispatch = useDispatch()
    const {activeTopMenuItem}: any = useSelector<any>(state=>state.entities.header)
    const {activeBottomMenuItem}: any = useSelector<any>(state=>state.entities.header)
    return(
        <div className={'h-[70px] w-full bg-black bg-opacity-40 flex items-center justify-center gap-5'} >

            {
                headerData?.topHeader?.find(item=>item?.title === activeTopMenuItem)?.bottomHeader?.map(
                    (secondaryItem => {
                        const {title }= secondaryItem
                        return (
                        <div key={title} onClick={()=>dispatch(activeBottomMenuItemChanged({item:title}))}>
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

