import React from 'react';
import Point from "@/components/Point";
import Line from "@/components/Line";
import IntersectionPoints from "@/components/IntersectionPoints";
import Lines from "@/components/Lines";

const OctagonWithIntersectionPoints = () => {
    const radius = 100
    const gap = 60

    return (
        <div className="relative aspect-square h-screen w-auto m-auto p-5">
            <div className="relative bg-yellow-200 h-full w-full origin-center flex items-center justify-center">
        <div className="flex justify-center items-center mt-10">
            <div className="relative">
                <div className="w-0 h-0 bg-gray-200 relative">
                    <div className={'w-2 h-2 bg-red-600 rounded-full'}></div>
                    <IntersectionPoints radius={radius} gap={gap} level={1}/>
                    <IntersectionPoints radius={radius} gap={gap} level={2}/>
                    <IntersectionPoints radius={radius} gap={gap} level={3}/>
                    <IntersectionPoints radius={radius} gap={gap} level={4}/>
                    <Lines radius={radius} gap={gap} level={1}/>
                    <Lines radius={radius} gap={gap} level={2}/>
                    <Lines radius={radius} gap={gap} level={3}/>
                    <Lines radius={radius} gap={gap} level={4}/>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default OctagonWithIntersectionPoints;
