import React from "react";
import CloseIcon from "@/components/common/CloseIcon";

function RoundedCloseIcon() {
    return (
        <div className={`flex aspect-square w-[20px] items-center justify-center bg-[#2C2C2E] rounded-full`}>
            <CloseIcon color={'#EBEBF5'}/>
        </div>
    );
}

export default RoundedCloseIcon;