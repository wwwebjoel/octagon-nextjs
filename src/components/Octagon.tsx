import React from 'react';
import Point from "@/components/Point";
import Line from "@/components/Line";
import IntersectionPoints from "@/components/IntersectionPoints";
import Lines from "@/components/Lines";

const OctagonWithIntersectionPoints = () => {
    const radius = 100
    const gap = 60

    return (
        <div className="relative aspect-square h-[min(100vh, 100vw)] w-auto m-auto p-5">
            <div className="relative bg-yellow-200 h-full w-full origin-center flex items-center justify-center">
        <div className="flex justify-center items-center mt-10">
            <div className="relative">
                <div className="w-0 h-0 bg-gray-200 relative">
                    {/*Center Point*/}
                    {/*<div className={'w-2 h-2 bg-red-600 rounded-full'}></div>*/}

                        {[1, 2, 3, 4].map(level => (
                            <React.Fragment key={level}>
                                <IntersectionPoints radius={radius} gap={gap} level={level} />
                                <Lines radius={radius} gap={gap} level={level} />
                            </React.Fragment>
                        ))}

                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default OctagonWithIntersectionPoints;
