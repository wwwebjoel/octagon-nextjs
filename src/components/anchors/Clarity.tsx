import React from 'react'

const Clarity = ({selected=false, color="#fff"}: {selected?: boolean; color?: string;})=>{
    return <div className={`relative rotate-45 h-full aspect-square flex items-center justify-center`}
    >
        <div className={`absolute w-full h-full rounded-sm`}
             style={{
                 backgroundColor: color,
                 opacity: selected? 1 : 0.5
             }}></div>
    <div className={`h-[60%] aspect-square rounded-full relative`}
    style={{
        backgroundColor: color,
    }}
    ></div>
</div>
}

export default Clarity