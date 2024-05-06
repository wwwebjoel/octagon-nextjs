import React from 'react' 

const MediumBox = ({selected = false, icon, title}: {selected?: boolean, icon: any, title: string})=>{
    return(
    <div className={`cursor-pointer flex flex-col justify-center items-center gap-1 w-[105px] h-[58px] rounded-[20px] px-[10px] pt-1`} style={{background: `${selected? "linear-gradient(180deg, #B76EF9 0%, #564A8D 100%)": "rgba(255,255,255,0.2)"}`}}>
        {icon}
        <div className={`text-[10px] font-bold`}>{title}</div>
    </div>)
}

export default MediumBox