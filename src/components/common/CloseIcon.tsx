import React from "react";

function CloseIcon({color="#000"}: {color?:string}) {
    return (
      <div className={'relative aspect-square'} style={{ width: '10px'}}>
         <SingleLine rotateMinus={true} color={color}/>
         <SingleLine rotateMinus={false} color={color}/>
      </div>
    );
}

export default CloseIcon;

const SingleLine = ({rotateMinus, color}: {rotateMinus: boolean; color: string})=>{
    return (
        <div className={`${rotateMinus? "-rotate-45": "rotate-45"} absolute top-1/2 left-0 w-full h-px origin-center`}
        style={{background: color}}
        ></div>
    )
}