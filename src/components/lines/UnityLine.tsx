'use client'
import React, { useEffect, useRef, useState } from 'react';

interface UnityLineProps {
  height?: number;
}

const UnityLine: React.FC<UnityLineProps> = ({ height = 9 }) => {
  const [numberOfCircles, setNumberOfCircles] = useState(0);
  const bgColor = '#fff';
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      const lineWidth = line.offsetWidth;
      const circleCount = Math.floor(lineWidth / (height * 1.8));
      setNumberOfCircles(circleCount);
    }
  }, [height]);

  return (
    <div className='w-full flex items-center justify-around gap-px' ref={lineRef} style={{ height }}>
      {[...Array(numberOfCircles)].map((_, index) => (
        <div key={index} className='aspect-square' style={{ width: `${height}px`, backgroundColor: bgColor }} />
      ))}
    </div>
  );
};

export default UnityLine;
