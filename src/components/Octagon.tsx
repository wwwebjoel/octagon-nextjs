import React from 'react';
import Points from "@/components/Points";
import Lines from "@/components/Lines";
import Trapezoids from "@/components/Trapezoids";
import Center from "@/components/Center";

interface OctagonProps {
    radius: number;
    gap: number;
    level?: number;
}

const Octagon: React.FC<OctagonProps> = ({ radius, gap, level=0 }) => {
    return (
        <div className="relative m-auto px-5 pt-80">
            <div className="relative h-full w-full origin-center flex items-center justify-center">
                <div className="flex justify-center items-center mt-10">
                    <div className="relative">
                        <div className="w-0 h-0 bg-gray-200 relative">
                            {/* Center Point */}
                            <Center radius={radius}/>

                            {Array.from({ length: level }).map((_, index) => {
                                const level = index + 1;
                                return (
                                    <React.Fragment key={level}>
                                        <Points radius={radius} gap={gap} level={level}/>
                                        <Lines radius={radius} gap={gap} level={level}/>
                                        <Trapezoids gap={gap} radius={radius} level={level}/>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Octagon;
