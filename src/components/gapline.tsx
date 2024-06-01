import React from 'react';
import {useSelector} from "react-redux";

interface LineProps {
    gap: number;
    index: number;
    level: number;
}

const GapLine: React.FC<LineProps> = ({ gap, index, level }) => {

    const currentSelectionLevel:any = useSelector<any>(state=>state.entities.currentSelection.level)

    return (
        <div className={'h-0 w-0 relative'} style={{rotate: `${index * 45}deg`}}>
            <div className={'h-0 w-0 relative'} style={{rotate: `${ 112.5}deg`}}>
                <div className={'bg-inner-yellow rounded-full absolute origin-left left-0 top-0 -translate-y-1/2 hover:bg-red-500 cursor-pointer'}
                     style={{
                         width: `${gap}px`,
                         height: currentSelectionLevel.includes(level) ? "5px": `${5/level}px`}}>
                    {/* Content goes here */}
                </div>
            </div>

        </div>
    );
};

export default GapLine;