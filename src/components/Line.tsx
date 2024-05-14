import { lineSelected } from '@/store/currentSelection';
import { linesSelectionReset } from '@/store/lines';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import OptimismLine from './lines/OptimismLine';
import ClarityLine from './lines/ClarityLine';
import BalanceLine from './lines/BalanceLine';
import UnityLine from './lines/UnityLine';

interface LineProps {
    side: number;
    index?: number;
    level?: number;
}

const Line: React.FC<LineProps> = ({ side, index= 0, level=1 }) => {
    const dispatch = useDispatch();

    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)

    const lineData : any = useSelector<any>((state) => state.entities.lines[`level${level}`].line[`${index+1}`]);

    const { selected, type, size, color, luminosity } = lineData;

    const handleClick = (level: number, id: number)=>{
        // dispatch(anchorPointsSelectionReset())
        // dispatch(pointSelected({level, id}))
        // dispatch(anchorPointSelected({level, id}))   
        dispatch(linesSelectionReset())
        dispatch(lineSelected({level, id}))
    }

    return (
        <div className={'h-0 w-0 relative overflow-visible'} style={{rotate: `${(index * 45 )+ 112.5}deg`}} onClick={()=>handleClick(level, index+1)}
        >
          
                {/* <div className={`
                ${!color && (level===1 ? 'bg-white': 'bg-inner-yellow')} rounded-full absolute origin-left left-0 top-0 -translate-y-1/2 hover:bg-inner-orange cursor-pointer`}
                     style={{
                         ...(color && {backgroundColor: color} ),
                         width: `${side}px`,
                        //  height: level===1? '7px': currentSelectionData.level === level || currentSelectionData.level===level+1 ? "5px": `${5/level}px`
                }}>
                      <OptimismLine />
            </div> */}

            
            <div className={`
                rounded-full absolute origin-left left-0 top-0 -translate-y-1/2 hover:bg-inner-orange cursor-pointer`}
                     style={{
                         ...(color && {backgroundColor: color} ),
                         width: `${side}px`,
                        //  height: level===1? '7px': currentSelectionData.level === level || currentSelectionData.level===level+1 ? "5px": `${5/level}px`
                }}>
                     {!type || type==='clarity' && <ClarityLine height={ level===1? 7: currentSelectionData.level === level || currentSelectionData.level===level+1 ? 5 : 5/level } />}
                      {type==='optimism' && <OptimismLine height={ level===1? 7: currentSelectionData.level === level || currentSelectionData.level===level+1 ? 5 : 5/level } />}
                      {type==='balance' && <BalanceLine height={ level===1? 7: currentSelectionData.level === level || currentSelectionData.level===level+1 ? 5 : 5/level } />}
                      {type==='unity' && <UnityLine height={ level===1? 7: currentSelectionData.level === level || currentSelectionData.level===level+1 ? 5 : 5/level } />}
                     
            </div>

        </div>
    );
};

export default Line;