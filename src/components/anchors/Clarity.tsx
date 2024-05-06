import React from 'react'

const Clarity = ({selected=false}: {selected?: boolean})=>{
    return <div className={`${selected? "bg-[#FFF500]": "bg-white  bg-opacity-50"} rotate-45 rounded-sm h-full aspect-square flex items-center justify-center`}>
    <div className={`${selected?"bg-[#FFAC01]": "bg-white"} h-[60%] aspect-square rounded-full`}></div>
</div>
}

export default Clarity