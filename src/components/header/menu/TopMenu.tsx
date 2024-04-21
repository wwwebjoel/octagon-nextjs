import React from 'react'
import Button1 from "@/components/common/Button1";
import headerData from "@/data/header.json"

interface HeaderItem {
    title: string;
}

const TopMenu = ()=>{
    return(
        <div className={'bg-white overflow-hidden w-max min-w-[300px] h-12 flex items-stretch rounded-[20px]'}>
            {headerData?.topHeader?.map((data: HeaderItem)=>{
                const {title} = data
                return(<React.Fragment key={title}>
                    <Button1 label={title} />
                </React.Fragment>)
            })}

        </div>
    )
}

export default TopMenu