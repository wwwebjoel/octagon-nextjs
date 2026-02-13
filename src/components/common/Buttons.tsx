import React from 'react';
import RoundMinus from "@/components/images/RoundMinus";

interface ButtonProps {
    label: string;
    active?: boolean;
    smallText?: boolean;
}

export const Button1: React.FC<ButtonProps> = ({ label, active = false, smallText = false }) => {
    return (
        <div className={`${active
            ? 'bg-portfolio-indigo text-white'
            : 'bg-transparent text-portfolio-slate hover:bg-portfolio-indigo/20 hover:text-white'
        } ${smallText ? 'text-xs' : 'text-sm'} h-full w-max flex items-center font-semibold tracking-wide leading-5 text-center py-0.5 px-4 cursor-pointer transition-all duration-200`}>
            {label}
        </div>
    );
};

export const Button2: React.FC<ButtonProps> = ({ label, active = false }) => {
    return (
        <div className={`${active
            ? 'bg-portfolio-indigo'
            : 'bg-portfolio-indigo/20 hover:bg-portfolio-indigo'
        } text-white h-12 w-max min-w-[147.5px] flex items-center justify-center font-semibold text-sm tracking-wide leading-5 text-center py-0.5 px-[15px] cursor-pointer rounded-[20px] transition-all duration-200 border border-portfolio-indigo/30`}>
            {label}
        </div>
    );
};

export const Button3: React.FC<ButtonProps> = ({ label, active = false }) => {
    return (
        <div className={`${active
            ? 'bg-portfolio-cyan/20 border-portfolio-cyan/40'
            : 'bg-white/5 border-white/10'
        } text-white h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-3 cursor-pointer rounded-[20px] border transition-all duration-200`}>
            <div>{label}</div>
            <RoundMinus />
        </div>
    );
};

export const Button4: React.FC<ButtonProps> = ({ label, active = false }) => {
    return (
        <div className={`text-white h-12 w-max min-w-[120px] flex items-center justify-center font-semibold text-sm tracking-wider leading-5 text-center py-0.5 px-4 cursor-pointer rounded-full gap-2 transition-all duration-200 ${active ? 'text-white' : 'text-white/60 hover:text-white'}`}>
            <AngleBracketContainer bracket={"⟨"} active={active} />
            {label}
            <AngleBracketContainer bracket={"⟩"} active={active} />
        </div>
    );
};

const AngleBracketContainer = ({ bracket, active }: { bracket: string; active: boolean }) => {
    return (
        <div className={`${active ? 'text-portfolio-cyan' : 'text-portfolio-lavender/50'} font-black text-xl transition-colors duration-200`}>{bracket}</div>
    );
};
