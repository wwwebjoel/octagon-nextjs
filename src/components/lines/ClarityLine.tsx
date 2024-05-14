import React from 'react'

const ClarityLine = ({height=7}: {height?:number}) => {
  return (
    <div className='w-full' style={{
        height: `${height}px`,
        backgroundColor: "#fff"
    }}></div>
  )
}

export default ClarityLine