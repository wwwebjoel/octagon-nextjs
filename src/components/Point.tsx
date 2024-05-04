import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import Clarity from './anchors/Clarity';
import Unity from './anchors/Unity';
import Patience from './anchors/Patience';

interface RootState {
  entities: {
    anchor: {
      [level: string]: {
        level: number;
        selected: boolean;
        point: {
          [id: string]: {
            id: number;
            selected: boolean;
            shape: string;
            size: string;
            color: string;
            luminocity: string;
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
    const { selected, shape, size, color, luminocity } = pointData;

    return (
        <div className='absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-point left-0 top-0'>
            {shape === 'clarity' && <Clarity selected={selected} />}
            {shape === 'unity' && <Unity selected={selected} />}
            {shape === 'patience' && <Patience />}
        </div>
    );
}

export default Point;
