import { anchorPointColorChanged } from "@/store/anchor";
import { addVirtueColor } from "@/store/virtues";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorPicker from "../colorPicker/ColorPicker";
import { lineColorChanged } from "@/store/lines";

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

  const selectedPointColor: any = useSelector(
    (state: any) => state.entities.anchor[`level${level}`]?.point[id]?.color
  );

  const selectedLineColor: any = useSelector(
    (state: any) => state.entities.lines[`level${level}`]?.line[id]?.color
  );

  const selectedVirtueColor: any = useSelector(
    (state:any )=>state.entities.virtues.find((item:any)=>item.virtue === selectedTrapezoidData)?.color

  )

  const handleClick = (id: number, level: number, color: string) => {
    //check current selection

    //if none selected, show color picker
    if (!point && !line && !trapezoid) {
      setShowColorPicker(true);
    }

    //if point selected check point color
    //if point color same as selected color, show color picker

    if (point) {
      //if point color null or different, change color
      if (!selectedPointColor || selectedPointColor !== color) {
        dispatch(anchorPointColorChanged({ id, level, color }));
      }
      if (selectedPointColor === color) {
        setShowColorPicker(index);
      }
    }

    //Repeat same steps for line
    if (line) {
      //if point color null or different, change color
      if (!selectedLineColor || selectedLineColor !== color) {
        dispatch(lineColorChanged({ id, level, color }));
      }
      if (selectedLineColor === color) {
        setShowColorPicker(index);
      }
    }

    if(trapezoid){
      if(!selectedTrapezoidData){
        setShowColorPicker(index)
      }
      if(selectedTrapezoidData){
        if(!selectedVirtueColor || selectedVirtueColor !== color){
          dispatch(addVirtueColor({virtue: selectedTrapezoidData, color}))
        }
        if(selectedVirtueColor === color){
          setShowColorPicker(index);
        }

      }
    }

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
