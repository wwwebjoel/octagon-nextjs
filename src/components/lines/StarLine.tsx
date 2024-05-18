'use client'
import React, { useEffect, useRef, useState } from 'react';

interface StarLineProps {
  height?: number;
  color?: string;
}

const StarLine: React.FC<StarLineProps> = ({ height = 2, color='#fff' }) => {
  const [numberOfDashes, setNumberOfDashes] = useState(0);
  const bgColor = color
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      const lineWidth = line.offsetWidth;
      const dashCount = Math.floor(lineWidth / (height * 15));
      setNumberOfDashes(dashCount);
    }
  }, [height]);
``
  return (
    <div className='w-full flex items-center justify-around gap-1' ref={lineRef} style={{ height }}>
      {[...Array(numberOfDashes)].map((_, index) => (
        <div key={index} className='h-full' style={{ width: `${height*8}px`, backgroundColor: bgColor }} />
      ))}
    </div>
  );
};

export default StarLine;
