import React from 'react';

interface RangeSliderProps {
    min: number;
    max: number;
    sliderValue: number;
    title: string;
    handleSliderChange: (value: string) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, sliderValue,title, handleSliderChange}) => {
    return (
        <div className="my-5 w-full">
            <div className={`pb-2 text-base font-semibold flex justify-between`}>
                <div>{title}</div>
                {title === 'luminosity' && <div>{`${sliderValue}%`}</div>}

            </div>
            <div className="rounded-full bg-white bg-opacity-20 w-full py-[8px] px-1">
                <div className="relative top-0 left-0 h-[0] w-full">

                    <input
                        className="absolute top-0 left-0 w-full h-2 bg-transparent accent-[#ffac01] rounded-lg cursor-pointer -translate-y-1/2"
                        type="range"
                        min={min}
                        max={max}
                        value={sliderValue}
                        readOnly={true}
                    />

                    <input
                        className={`absolute top-0 left-0 h-2 -translate-y-1/2
                        w-full bg-transparent appearance-none 
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6
                        [&::-webkit-slider-thumb]:bg-gradient-slider-thumb
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:border-solid
                        [&::-webkit-slider-thumb]:border-[1px]
                        [&::-webkit-slider-thumb]:border-white
                        [&::-webkit-slider-thumb]:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]`}
                        type="range"
                        min={min}
                        max={max}
                        value={sliderValue}
                        onChange={(e) => handleSliderChange(e.target.value)}
                    />
                </div>
            </div>

            {/*<p>Value: {sliderValue}</p>*/}

        </div>
    );
};

export default RangeSlider;
