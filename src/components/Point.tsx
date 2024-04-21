import React from 'react'

const Point =()=>{
    return(
        <div className={'absolute rotate-45 left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-5 rounded-sm aspect-square  bg-white bg-opacity-50 cursor-pointer z-point flex items-center justify-center'}>
            <div className={'h-3 aspect-square bg-white rounded-full'}></div>
        </div>
    )
}

export default Point