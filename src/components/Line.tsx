import React from 'react';

interface LineProps {
    side: number;
    index?: number;
    level?: number;
}

const Line: React.FC<LineProps> = ({ side, index= 0, level=1 }) => {
    return (
        <div className={'h-0 w-0 relative'} style={{rotate: `${(index * 45 )+ 112.5}deg`}}>
                <div className={`${level===1? 'bg-white': 'h-[1px] bg-inner-yellow'} rounded-full absolute origin-left left-0 top-0 -translate-y-1/2 hover:bg-red-500 cursor-pointer`}
                     style={{
                         width: `${side}px`,
                         height: level===1? '7px': `${5/level}px`
                }}>
            </div>

        </div>
    );
};

export default Line;