'use client'
import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import Clarity from './anchors/Clarity';
import Unity from './anchors/Unity';
import Patience from './anchors/Patience';
import Balance from './anchors/Balance';
import Optimism from './anchors/Optimism';
import Boundaries from './anchors/Boundaries';
import Flow from './anchors/Flow';
import Aspiration from './anchors/Aspiration';
import {AnchorTips} from "@/components/AnchorTips";

interface RootState {
  entities: {
    properties: {
      size: number;
    };
    anchor: {
      [level: string]: {
        level: number;
        selected: boolean;
        point: {
          [id: string]: {
            id: number;
            selected: boolean;
            shape: string;
            size: number;
            color: string;
            luminosity: number;
          };
        };
      };
    };
  };
}

interface PointProps {
  level: number;
  id: number;
}


const Point: React.FC<PointProps> = ({ level, id }) => {

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

    const pointData = useTypedSelector((state) => state.entities.anchor[`level${level}`].point[`${id}`]);
    const { selected, shape, size, color, luminosity } = pointData;

    const modules: any = useSelector<any>(state=>state.entities.modules)

    return (
        <div 
        className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-point left-0 top-0 ${selected? !modules.anchorTips? "animate-pulse": "animate-none" : 'animate-none'} `}
        style={{ height: `${size}px` ,
        opacity: level===1 && id===7 && modules.anchorTips? 1 : luminosity/100
        }} >
            {shape === 'clarity' && <Clarity selected={selected} color={color}/>}
            {shape === 'unity' && <Unity selected={selected} />}
            {shape === 'patience' && <Patience />}
            {shape === 'balance' && <Balance />}
            {shape === 'optimism' && <Optimism />}
            {shape === 'boundary' && <Boundaries />}
            {shape === 'flow' && <Flow />}
            {shape === 'aspiration' && <Aspiration />}

            {level===1 && id===7 && modules.anchorTips && <div className={'absolute -top-[23px] left-[22px]'}>
                <AnchorTips />
            </div>}

        </div>
    );
}

export default Point;
