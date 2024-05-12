import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {anchorPointLuminosityChanged, anchorPointSizeChanged} from "@/store/anchor";
import RangeSlider from "@/components/common/RangeSlider";

interface CurrentSelection {
    point: boolean;
    line: boolean;
    trapezoid: boolean;
    level: number;
    id: number;
}

export default function LuminosityRangeSlider() {
    const dispatch = useDispatch()

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
                anchorPointLuminosityChanged({
                    id,
                    level,
                    luminosity: Number(value),
                })
            );
        }
    };

    return (
        <RangeSlider
            min={0}
            max={100}
            sliderValue={sliderValue}
            handleSliderChange={handleSliderChange}
        />
    );
}
