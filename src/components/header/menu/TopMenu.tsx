'use client'
import React from 'react'
import {Button1} from "@/components/common/Buttons";
import headerData from "@/data/header.json"
import {useDispatch, useSelector} from "react-redux";
import {activeTopMenuItemChanged} from "@/store/header";


interface HeaderItem {
    title: string;
}

const TopMenu = ()=>{
    const dispatch = useDispatch();
    const {activeTopMenuItem}: any = useSelector<any>(state=>state.entities.header)
    return(
        <div className={'bg-white overflow-hidden w-max min-w-[300px] h-12 flex items-stretch rounded-[20px]'}>
            {headerData?.topHeader?.map((data: HeaderItem)=>{
                const {title} = data
                return(<div key={title} onClick={()=>dispatch(activeTopMenuItemChanged({item:title}))}>
                    <Button1 label={title} active={title === activeTopMenuItem}/>
                </div>)
            })}

        </div>
    )
}

export default TopMenu