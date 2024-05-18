'use client'

import React, { useEffect, useRef } from 'react';

interface OptimismLineProps {
  height?: number;
  color: string;
}

const OptimismLine: React.FC<OptimismLineProps> = ({ height = 7, color }) => {
  const bgColor = color || '#fff';
  const lineRef = useRef<HTMLDivElement>(null);
  const directionContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const directionContainer = directionContainerRef.current;

    if (line && directionContainer) {
      const lineWidth = line.offsetWidth;
      const directionCount = Math.floor(lineWidth / (height * 2)); // Calculate the number of intervals

      // Clear existing directions
      directionContainer.innerHTML = '';

      // Add directions with appropriate spacing
      for (let i = 0; i < directionCount; i++) {
        const direction = document.createElement('div');
        direction.classList.add('absolute', 'top-0', 'rotate-45', 'rounded-full', 'origin-right');
        direction.style.left = `${i * (lineWidth / directionCount)}px`;
        direction.style.width = `${height * Math.sqrt(2)}px`;
        direction.style.height = `${height / 3}px`;
        direction.style.backgroundColor = bgColor;

        const oppositeDirection = document.createElement('div');
        oppositeDirection.classList.add('absolute', 'top-0', '-rotate-45', 'rounded-full', 'origin-right');
        oppositeDirection.style.left = `${i * (lineWidth / directionCount)}px`;
        oppositeDirection.style.width = `${height * Math.sqrt(2)}px`;
        oppositeDirection.style.height = `${height / 3}px`;
        oppositeDirection.style.backgroundColor = bgColor;

        directionContainer.appendChild(direction);
        directionContainer.appendChild(oppositeDirection);
      }
    }
  }, [height]);

  return (
    <div className='relative w-full overflow-visible flex items-center' style={{ height }}>
      <div ref={directionContainerRef} className='absolute top-1/2 left-0 -translate-y-1/2 flex items-center overflow-visible' style={{ height: `${height / 3}px` }}></div>
      <div ref={lineRef} className='relative h-1/2 w-full rounded-full' style={{ backgroundColor: bgColor }}></div>
    </div>
  );
};

export default OptimismLine;
