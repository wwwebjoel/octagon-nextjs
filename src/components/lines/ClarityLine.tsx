import React from 'react'

const ClarityLine = ({height=7, color='#fff'}: {height?:number, color?:string}) => {
  return (
    <div className='w-full' style={{
        height: `${height}px`,
        backgroundColor: color
    }}></div>
  )
}

export default ClarityLine