import React from 'react'
import InnerLogo from "@/components/images/InnerLogo";
import TopMenu from "@/components/header/menu/TopMenu";

const TopHeader = ()=>{
    return(
        <div className={'h-[90px] w-full bg-gradient-top-header flex items-center justify-between gap-5 px-16'} >
            <div className={'w-60'}><InnerLogo /></div>
            <div><TopMenu /></div>
            <div className={'w-60 flex justify-end text-white font-bold'}>Right Menu</div>

        </div>
    )
}

export default TopHeader