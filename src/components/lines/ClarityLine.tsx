import React from 'react'

const ClarityLine = ({height=7, color}: {height?:number, color:string}) => {
  return (
    <div className='w-full' style={{
        height: `${height}px`,
        backgroundColor: color || "#fff"
    }}></div>
  )
}

export default ClarityLine