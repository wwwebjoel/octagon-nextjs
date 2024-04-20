import React from 'react';
import Line from '@/components/Line';
import GapLine from "@/components/gapline";

interface LinesProps {
    radius: number;
    gap?: number;
    level? : number;
}

const Lines: React.FC<LinesProps> = ({ radius, gap =0, level=1}) => {
    const r= radius + gap * (level-1);
    const lns = Array.from({ length: 8 }).map((_, index) => {
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
                <Line side={side} index={index} />
                { level>1 &&
                    <div className={'rotate-[68deg]'}><GapLine gap={gap} index={index}/></div>
                }
            </div>
        );
    });

    return <>{lns}</>;
};

export default Lines;
