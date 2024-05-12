import React from 'react';
import RoundPlus from "@/components/images/RoundPlus";
import RoundMinus from "@/components/images/RoundMinus";
import {useSelector} from "react-redux";
import {getNonNullTrapezoidDataValues} from "../../../utilities/octagon";

interface SingleVirtueButtonProps {
    label: string;
    active?: boolean;
}

const SingleVirtueButton: React.FC<SingleVirtueButtonProps> = ({ label, active = false }) => {

    const octagonState : any = useSelector((state: any) => state.entities.octagon);

    // the state as an argument and return an array of strings:
    const words = getNonNullTrapezoidDataValues(octagonState);

    return (
        <div className={`${active ? 'bg-inner-orange' : 'bg-black bg-opacity-30'} text-white h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-2 cursor-pointer rounded-[20px]`}>
            <div>{label}</div>
            {words.includes(label)? <RoundMinus /> : <RoundPlus/>}
        </div>
    );
};

export default SingleVirtueButton;