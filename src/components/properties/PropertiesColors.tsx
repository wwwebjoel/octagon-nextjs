import {useDispatch, useSelector} from "react-redux";
import {activeColorChanged} from "@/store/colors";
import {anchorPointColorChanged} from "@/store/anchor";
import ColorIcon from "@/components/images/ColorIcon";
import {addVirtueColor} from "@/store/virtues";
import React, { useState } from "react";
import SingleColorProperty from "./SingleColorProperty";

export default function PropertiesColors(){
    
    const [showColorPicker, setShowColorPicker] = useState(-1)
   
    return(
        <div>
            <div className={`pb-2 text-base font-semibold flex gap-[10px]`}>
                <div className={'w-[20px]'}><ColorIcon /></div>
                <div>color</div>
            </div>
            <div className={'flex justify-between gap-0.5'}>
                {Array.from({length: 8}).map((_, i) => {
                    return (
                      <React.Fragment key={i}>
                        <SingleColorProperty index={i} showColorPicker={showColorPicker} setShowColorPicker={setShowColorPicker} />
                      </React.Fragment>
                    )
                })}
            </div>
        </div>
    )

}