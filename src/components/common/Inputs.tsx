import React, { InputHTMLAttributes, useState, ChangeEvent } from "react";
import RoundPlus from "@/components/images/RoundPlus";
import { useDispatch } from "react-redux";
import { addVirtue } from "@/store/virtues";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export const Input1: React.FC<TextInputProps> = ({ placeholder, ...rest }) => {
    const [newVirtue, setNewVirtue] = useState<string>("");

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewVirtue(e.target.value);
    };

    const handleClick = () => {
        if (newVirtue.trim() !== "") {
            dispatch(addVirtue({virtue: newVirtue}));
            setNewVirtue("");
        }
    };

    return (
        <div className={`relative`}>
            <input
                className="relative text-black h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-2 rounded-[20px] border border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder={placeholder}
                value={newVirtue}
                onChange={handleChange}
                {...rest}
            />
            <div className={'absolute inset-y-0 right-0 flex items-center p-1  cursor-pointer'} onClick={handleClick}>
                <RoundPlus />
            </div>
        </div>
    );
};
