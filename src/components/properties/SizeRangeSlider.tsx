import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anchorPointSizeChanged } from "@/store/anchor";
import RangeSlider from "@/components/common/RangeSlider";
import { lineSizeChanged } from "@/store/lines";

interface CurrentSelection {
    point: boolean;
    line: boolean;
    trapezoid: boolean;
    level: number[];
    id: number;
}

export default function SizeRangeSlider({min,max}: {min:number; max:number}) {
    const dispatch = useDispatch();

    const [sliderValue, setSliderValue] = useState<number>((min+max)/2);

    const currentSelection: CurrentSelection = useSelector(
        (state: any) => state.entities.currentSelection
    );

    // Function to handle changes in the range slider
    const handleSliderChange = (value: string) => {
        setSliderValue(Number(value));

        const { point, level, id, line} = currentSelection;

        if (point) {
            dispatch(
                anchorPointSizeChanged({
                    id,
                    level:level[0],
                    size: Number(value),
                })
            );
        }
        if (line) {
            dispatch(
                lineSizeChanged({
                    id,
                    level:level[0],
                    size: Number(value),
                })
            );
        }
    };

    return (
            <RangeSlider
                min={min}
                max={max}
                sliderValue={sliderValue}
                handleSliderChange={handleSliderChange}
                title={'size'}
            />
    );
}
