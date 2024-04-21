import React from 'react';

interface ButtonProps {
    label: string;
    active?: boolean;
}

const Button1: React.FC<ButtonProps> = ({ label, active= false }) => {

    return (
        <div className={`${active? 'bg-gradient-button-purple text-white': 'bg-white text-inner-purple hover:bg-gradient-button-purple hover:text-white'} h-full w-max flex items-center font-bold text-base leading-5 text-center py-0.5 px-[15px] cursor-pointer`}>
            {label}
        </div>
    );
};

export default Button1;
