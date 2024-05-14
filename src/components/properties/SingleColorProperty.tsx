import { anchorPointColorChanged } from "@/store/anchor";
import { addVirtueColor } from "@/store/virtues";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../colorPicker/ColorPicker";

const SingleColorProperty = ({
  index,
  showColorPicker,
  setShowColorPicker,
}: {
  index: number;
  showColorPicker: number;
  setShowColorPicker: any;
}) => {
  const dispatch = useDispatch();
  const currentSelectionData: any = useSelector<any>(
    (state) => state.entities.currentSelection
  );
  const {
    level,
    id,
    point,
    line,
    trapezoid,
  }: {
    level: number;
    id: number;
    point: boolean;
    line: boolean;
    trapezoid: boolean;
  } = currentSelectionData;

  const selectedTrapezoidData: any = useSelector(
    (state: any) => state.entities.octagon[`level${level}`]?.trapezoid[id]?.data
  );

  const handleClick = (id: number, level: number, color: string) => {
    setShowColorPicker(index);

    // if(point){
    //     dispatch(anchorPointColorChanged({id, level, color}))
    // }
    // if(trapezoid && selectedTrapezoidData){
    //     dispatch(addVirtueColor({virtue:selectedTrapezoidData, color}))
    // }
  };

  const propertiesColorBox = useSelector(
    (state: any) => state.entities.colors.propertiesColors
  );

  return (
    <div
      className={`relative h-6 w-6 aspect-square rounded-full cursor-pointer flex justify-center`}
      key={index}
      style={{ backgroundColor: propertiesColorBox[`${index + 1}`] }}
      onClick={() => handleClick(id, level, propertiesColorBox[`${index + 1}`])}
    >
      <div className="relative h-0 w-0 overflow-visible">
        {showColorPicker === index && (
          <div className="absolute left-0 bottom-4 -translate-x-1/2">
            <ColorPicker setShowColorPicker={setShowColorPicker} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleColorProperty;
