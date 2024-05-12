'use client'

import {useDispatch, useSelector} from "react-redux";
import {applyDataToLevel} from "@/store/octagon";

export default function ApplyToAllButton() {
    const dispatch = useDispatch();

    const currentSelection : any = useSelector<any>(state=>state.entities.currentSelection)
    const { level,
        id,
        point,
        line,
        trapezoid,
        } = currentSelection


    const handleClick = ()=>{


        if(trapezoid){
                dispatch(applyDataToLevel({level, id}))

        }
    }

    return(
        <div className={`rounded-full cursor-pointer bg-[#FFAC01] py-[6px] px-3 font-bold text-base text-center text-black h-min w-max hover:scale-110 duration-300 transition-all`} onClick={()=>handleClick()}>
            apply to all
        </div>
    )
}