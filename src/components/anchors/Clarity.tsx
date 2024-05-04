import React from 'react'

const Clarity = ({selected}: {selected: boolean})=>{
    return <div className={`${selected? "bg-[#FFF500]": "bg-white  bg-opacity-50"} rotate-45 rounded-sm  h-5 aspect-square flex items-center justify-center`}>
    <div className={`${selected?"bg-[#FFAC01]": "bg-white"} h-3 aspect-square rounded-full`}></div>
</div>
}

export default Clarity