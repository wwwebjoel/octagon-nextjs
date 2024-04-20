import React from 'react';

const OctagonWithIntersectionPoints = () => {
    const radius = 200

    const intersectionPoints = Array.from({length: 8}).map((_, index) => {
        const angle = 45 * index;
        return (
            <div
                key={index}
                className="absolute h-2 w-2 rounded-full bg-blue-500"
                style={{
                    left: `${radius * Math.cos(angle * Math.PI / 180)}px`,
                    top: `${radius * Math.sin(angle * Math.PI / 180)}px`
                }}
            ></div>
        );
    });

    return (
        <div className="relative aspect-square h-screen w-auto m-auto p-5">
            <div className="relative bg-yellow-200 h-full w-full origin-center flex items-center justify-center">
        <div className="flex justify-center items-center mt-10">
            <div className="relative">
                <div className="w-0 h-0 bg-gray-200 relative transform rotate-45">
                    <div className={'w-2 h-2 bg-red-600 rounded-full'}></div>
                    {intersectionPoints}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default OctagonWithIntersectionPoints;
