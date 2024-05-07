'use client'
import {useDispatch, useSelector} from "react-redux";
import {anchorPointSizeChanged} from "@/store/anchor";
import {useState} from "react";

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

  const grab = false;

  return (
      <div>
        <input
            className={`w-full h-2 bg-wwr_black accent-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[24px] [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black hover:[&::-webkit-slider-thumb]:scale-125 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300 ${
            grab
                ? '[&::-webkit-slider-thumb]:cursor-grabbing'
                : '[&::-webkit-slider-thumb]:cursor-grab'
        } `}
            type="range"
            min="10"
            max="30"
            value={sliderValue}
            onChange={handleSliderChange}
        />
        {/*<p>Value: {sliderValue}</p>*/}
      </div>
  );
}

//       <div className='absolute w-full bottom-0 left-0 font-normal sm:text-xl lg:text-2xl px-3'>
//         <div className='relative w-full'>
//           <div
//               className='absolute top-0 -translate-x-1/2 -translate-y-1/2'
//               style={{
//                 left: `${
//                     ((value - timeLineEventDatesArray[0]) * 100) /
//                     (timeLineEventDatesArray[
//                         timeLineEventDatesArray.length - 1
//                             ] -
//                         timeLineEventDatesArray[0])
//                 }%`,
//               }}
//           >
//             {value}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className='flex'>
//       <div className='pr-2 flex items-center'>
//         <Arrow direction='right' navArrowHandler={navArrowHandler} activeArrows={activeArrows}/>
//       </div>
//
//       <DateText
//           date={timeLineEventDatesArray[timeLineEventDatesArray.length - 1]}
//       />
//     </div>
//   </div>
// </div>