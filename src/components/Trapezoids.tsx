import React from "react";
import Trapezoid from "@/components/Trapezoid";

interface TrapezoidsProps {
    gap: number;
    radius: number;
    level?: number;
}

const Trapezoids: React.FC<TrapezoidsProps> = ({ gap, radius, level = 2 }) => {

    const r= radius + gap * (level-1);

    const trapezoids = Array.from({ length: 8 }).map((_, index) => {
        const side = r / Math.sqrt(1 + 1 / Math.sqrt(2));
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
                <Trapezoid gap={gap} radius={radius} level={level} index={index} />
            </div>
        );
    });

    return <>{trapezoids}</>;
};

export default Trapezoids;
