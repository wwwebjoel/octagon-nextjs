import React from 'react';
import RoundPlus from "@/components/images/RoundPlus";
import RoundMinus from "@/components/images/RoundMinus";

interface ButtonProps {
    label: string;
    active?: boolean;
    smallText?: boolean;
}

export const Button1: React.FC<ButtonProps> = ({ label, active= false, smallText=false }) => {

    return (
        <div className={`${active? 'bg-gradient-button-purple text-white': 'bg-white text-inner-purple hover:bg-gradient-button-purple hover:text-white'} ${smallText? 'text-xs': 'text-base'} h-full w-max flex items-center font-bold leading-5 text-center py-0.5 px-[15px] cursor-pointer`}>
            {label}
        </div>
    );
};

export const Button2: React.FC<ButtonProps> = ({ label, active=false }) => {
    return (
        <div className={`${active?'bg-inner-orange':'bg-inner-purple hover:bg-inner-orange'} text-white h-12 w-max min-w-[147.5px] flex items-center justify-center font-bold text-base leading-5 text-center py-0.5 px-[15px] cursor-pointer rounded-[20px]`}>
            {label}
        </div>
    );
};

export const Button3: React.FC<ButtonProps> = ({ label, active=false }) => {
    return (
        <div className={`${active?'bg-inner-orange':'bg-black bg-opacity-30'} text-white h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-2 cursor-pointer rounded-[20px]`}>
            <div> {label}</div>
            {/*<RoundPlus />*/}
            <RoundMinus />
        </div>
    );
};

export const Button4: React.FC<ButtonProps> = ({ label, active=false }) => {
    return (
        <div className={`${active?'bg-transparent':'bg-transparent'} text-white h-12 w-max min-w-[147.5px] flex items-center justify-center font-bold text-base leading-5 text-center py-0.5 px-[15px] cursor-pointer rounded-[20px] gap-2`}>
            <AngleBracketContainer bracket={"〈"} active={active}/>
            {label}
            <AngleBracketContainer bracket={"〉"} active={active}/>
        </div>
    );
};

const AngleBracketContainer= ({bracket, active}: {bracket:string; active:boolean})=>{
    return(
        <div className={`${active?'text-inner-orange':'text-[#b76df9]'} font-black text-2xl`}>{bracket}</div>
    )
}