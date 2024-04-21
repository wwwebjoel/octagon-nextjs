import React from "react";

interface CenterProps {
    radius?: number;
}

const Center: React.FC<CenterProps> = ({ radius = 10 }) => {

    return (
        <div className={'relative h-0 w-0 overflow-visible '}>
            <div className={'overflow-hidden aspect-square absolute top-0 left-0 rotate-[22.5deg] origin-center -translate-y-1/2 -translate-x-1/2'} style={{
                width: (2 * radius-12),
                clipPath: `polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)`
            }}>
                <div className={'-m-2 bg-red-300 hover:bg-green-300 grid items-center justify-center aspect-square -rotate-[22.5deg] cursor-pointer'}>center</div>
            </div>
        </div>
    );
};

export default Center;
