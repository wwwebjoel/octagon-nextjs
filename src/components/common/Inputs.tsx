import React, { InputHTMLAttributes } from "react";
import RoundPlus from "@/components/images/RoundPlus";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export const Input1: React.FC<TextInputProps> = ({ placeholder, ...rest }) => {
    return (

    <div
        className={`relative`}>
        <input
            className=" text-black h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-2 cursor-pointer rounded-[20px] border border-gray-300 focus:outline-none focus:border-indigo-500"
            placeholder={placeholder}
            {...rest}
        >
        </input>
       <div className={'absolute inset-y-0 right-0 flex items-center p-1  pointer-events-none'}> <RoundPlus/>
       </div>
    </div>
    )
        ;
};

// text-white h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-2 cursor-pointer rounded-[20px]