import React from 'react';
import Point from '@/components/Point';

interface IntersectionPointsProps {
    radius: number;
    gap?: number;
    level?: number;
}

const IntersectionPoints: React.FC<IntersectionPointsProps> = ({ radius, gap=0, level=1 }) => {
    const r = radius + gap *(level-1)
    const iPoints = Array.from({ length: 8 }).map((_, index) => {
        const angle = 45 * index;
        return (
            <div
                key={index}
                className="absolute h-0 w-0 overflow-visible"
                style={{
                    left: `${r * Math.cos(angle * Math.PI / 180)}px`,
                    top: `${r * Math.sin(angle * Math.PI / 180)}px`
                }}
            >
                <Point />
            </div>
        );
    });

    return <>{iPoints}</>;
};

export default IntersectionPoints;
