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
      <div className={' my-5 w-full'}>
          <div className={'rounded-full bg-white bg-opacity-20 w-full py-[8px] px-1'}>
              <div className={'relative top-0 left-0 h-[0] w-full'}>

                  <input
                      className={`absolute top-0 left-0 w-full h-2 bg-transparent accent-[#ffac01] rounded-lg cursor-pointer -translate-y-1/2
               `}
                      type="range"
                      min="10"
                      max="30"
                      value={sliderValue}
                      // onChange={handleSliderChange}
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
                    [&::-webkit-slider-thumb]:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]
                     `}
                      type="range"
                      min="10"
                      max="30"
                      value={sliderValue}
                      onChange={handleSliderChange}
                  />
              </div>
          </div>

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