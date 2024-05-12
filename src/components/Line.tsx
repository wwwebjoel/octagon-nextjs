import React from 'react';
import {useSelector} from "react-redux";

interface LineProps {
    side: number;
    index?: number;
    level?: number;
}

const Line: React.FC<LineProps> = ({ side, index= 0, level=1 }) => {

    const currentSelection:any = useSelector<any>(state=>state.entities.currentSelection.level)

    return (
        <div className={'h-0 w-0 relative'} style={{rotate: `${(index * 45 )+ 112.5}deg`}}>
                <div className={`${level===1 ? 'bg-white': 'bg-inner-yellow'} rounded-full absolute origin-left left-0 top-0 -translate-y-1/2 hover:bg-red-500 cursor-pointer`}
                     style={{
                         width: `${side}px`,
                         height: level===1? '7px': currentSelection === level || currentSelection===level+1 ? "5px": `${5/level}px`
                }}>
            </div>

        </div>
    );
};

export default Line;