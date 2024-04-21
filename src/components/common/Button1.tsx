import React from 'react';

interface ButtonProps {
    label: string;
}

const Button1: React.FC<ButtonProps> = ({ label }) => {
    return (
        <div className={'bg-white hover:bg-gradient-button-purple text-inner-purple hover:text-white h-full w-max flex items-center font-bold text-base leading-5 text-center py-0.5 px-[15px] cursor-pointer'}>
            {label}
        </div>
    );
};

export default Button1;
