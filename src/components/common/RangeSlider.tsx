'use client'
import { useDispatch, useSelector } from "react-redux";
import { anchorPointSizeChanged } from "@/store/anchor";
import { useState } from "react";

export default function RangeSlider() {
  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = useState<number>(20);

  const {
    point,
    line,
    trapezoid,
    level,
    id,
  }: {
    point: boolean;
    line: boolean;
    trapezoid: boolean;
    level: number;
    id: number;
  } = useSelector((state: any) => state.entities.currentSelection);

  // Function to handle changes in the range slider
  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSliderValue(Number(event.target.value));

    if (point) {
      dispatch(
        anchorPointSizeChanged({
          id,
          level,
          size: Number(event.target.value),
        })
      );
    }
  };

  return (
    <div>
      <input
        className="w-full"
        type="range"
        min="10"
        max="30"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Value: {sliderValue}</p>
    </div>
  );
}
