import React from 'react';
import TopHeader from "@/components/header/TopHeader";
import BottomHeader from "@/components/header/BottomHeader";

const Header = ()=>{
    return(
        <div className={'relative'}>
            <TopHeader />
            <BottomHeader />
        </div>
    )
}

export default Header