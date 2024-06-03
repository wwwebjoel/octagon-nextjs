'use client'

import {useDispatch, useSelector} from "react-redux";
import {applyDataToLevel} from "@/store/octagon";
import { applyPointChangesToLevel } from "@/store/anchor";
import { applyLineChangesToLevel } from "@/store/lines";

export default function ApplyToAllButton() {
    const dispatch = useDispatch();
    const { anchor, path, words } = useSelector(
        (state: any) => state.entities.modules.propertiesBox.type
      );

    const currentSelection : any = useSelector<any>(state=>state.entities.currentSelection)
    const { level,
        id,
        point,
        line,
        trapezoid,
        } = currentSelection


    const handleClick = ()=>{
        if(words && trapezoid){
                dispatch(applyDataToLevel({level:level[0], id}))
        }
        if(point){
            dispatch(applyPointChangesToLevel({level:level[0], id}))
        }
        if(line){
            dispatch(applyLineChangesToLevel({level:level[0], id}))
        }
    }

    return(
        <div className={`rounded-full cursor-pointer bg-[#FFAC01] py-[6px] px-3 font-bold text-base text-center text-black h-min w-max hover:scale-110 duration-300 transition-all`} onClick={()=>handleClick()}>
            apply to all
        </div>
    )
}