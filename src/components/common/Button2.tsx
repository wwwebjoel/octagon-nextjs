import React from 'react';

interface ButtonProps {
    label: string;
    active?: boolean;
}

const Button2: React.FC<ButtonProps> = ({ label, active=false }) => {
    return (
        <div className={`${active?'bg-inner-orange':'bg-inner-purple hover:bg-inner-orange'} text-white h-12 w-max min-w-[147.5px] flex items-center justify-center font-bold text-base leading-5 text-center py-0.5 px-[15px] cursor-pointer rounded-[20px]`}>
            {label}
        </div>
    );
};

export default Button2;
