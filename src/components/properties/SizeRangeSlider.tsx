import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { anchorPointSizeChanged } from "@/store/anchor";
import RangeSlider from "@/components/common/RangeSlider";

interface CurrentSelection {
    point: boolean;
    line: boolean;
    trapezoid: boolean;
    level: number;
    id: number;
}

export default function SizeRangeSlider() {
    const dispatch = useDispatch();

    const [sliderValue, setSliderValue] = useState<number>(20);

    const currentSelection: CurrentSelection = useSelector(
        (state: any) => state.entities.currentSelection
    );

    // Function to handle changes in the range slider
    const handleSliderChange = (value: string) => {
        setSliderValue(Number(value));

        const { point, level, id } = currentSelection;

        if (point) {
            dispatch(
                anchorPointSizeChanged({
                    id,
                    level,
                    size: Number(value),
                })
            );
        }
    };

    return (
            <RangeSlider
                min={10}
                max={30}
                sliderValue={sliderValue}
                handleSliderChange={handleSliderChange}
                title={'size'}
            />
    );
}
