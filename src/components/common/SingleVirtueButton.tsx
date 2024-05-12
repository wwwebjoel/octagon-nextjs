import React from 'react';
import RoundPlus from "@/components/images/RoundPlus";
import RoundMinus from "@/components/images/RoundMinus";
import { useDispatch, useSelector } from "react-redux";
import { getNonNullTrapezoidDataValues } from "../../../utilities/octagon";
import { trapezoidDataDeleted, trapezoidDataWritten } from "@/store/octagon";

interface SingleVirtueButtonProps {
    label: string;
}

const SingleVirtueButton: React.FC<SingleVirtueButtonProps> = ({ label }) => {
    const dispatch = useDispatch();

    const currentSelection: any = useSelector((state: any) => state.entities.currentSelection);
    const { level, id } = currentSelection || {};

    const octagonState: any = useSelector((state: any) => state.entities.octagon);

    // Access level and id safely, returning null if either is undefined
    const currentSelectedData: any = useSelector((state: any) =>
        state.entities.octagon[`level${level}`]?.trapezoid[id]?.data
    );

    // the state as an argument and return an array of strings:
    const words = getNonNullTrapezoidDataValues(octagonState);

    return (
        <div className={`${currentSelectedData === label ? 'bg-[#FFAC01]' : 'bg-black bg-opacity-30'} text-white h-[30px] w-full flex items-center justify-between font-semibold text-sm leading-5 p-1 pl-2 cursor-pointer rounded-[20px]`} onClick={()=>{
            dispatch(trapezoidDataWritten({ data: label }));
        }}>
            <div>{label}</div>
            {words.includes(label) ? (
                <div onClick={(e) => {
                    e.stopPropagation();
                    dispatch(trapezoidDataDeleted({ data: label, id: id, level: level }));
                }}>
                    <RoundMinus />
                </div>
            ) : (
                <RoundPlus />
            )}
        </div>
    );
};

export default SingleVirtueButton;
