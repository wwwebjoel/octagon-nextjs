'use client'
import React, { useEffect, useRef, useState } from 'react';

const BalanceLine: React.FC = ({height=16}: {height?: number}) => {

  const [numberOfCircles, setNumberOfCircles] = useState(0)

  const bgColor= '#fff'

  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      const lineWidth = line.offsetWidth;
      const circleCount = setNumberOfCircles(Math.floor(lineWidth / (height*1.8)))
    }

  }, [height]);

  return (

    <div className='w-full flex items-center justify-around gap-px' ref={lineRef} style={{height: height}}>
      
        {[...Array(numberOfCircles)].map((_, index) => {
          return(
            <div key={index} className='aspect-square rounded-full' style={{width: `${height}px`, backgroundColor: bgColor}}></div>
          )
        })}

    </div>
  );
};

export default BalanceLine;
