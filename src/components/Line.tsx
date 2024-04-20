import React from 'react';

interface LineProps {
    side: number;
    index?: number;
}

const Line: React.FC<LineProps> = ({ side, index= 0 }) => {
    return (
        <div className={'h-0 w-0 relative'} style={{rotate: `${index * 45}deg`}}>
            <div className={'h-0 w-0 relative'} style={{rotate: `${ 112.5}deg`}}>
                <div className={'h-0.5 bg-blue-500 rounded-full absolute origin-left left-0 top-0 -translate-y-1/2'}
                     style={{width: `${side}px`}}>
                    {/* Content goes here */}
                </div>
            </div>

        </div>
    );
};

export default Line;