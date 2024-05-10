import RightArrow from "@/components/common/RightArrow";

export function NextRoundButton() {
    return (
        <div
            className={`w-16 aspect-square rounded-full flex items-center justify-center shadow-md bg-[#B76EF9] cursor-pointer bg-gradient-to-b from-transparent to-black/50 hover:bg-inner-orange hover:bg-none`}

        >
            <div className={"w-[22px]"}>
                <RightArrow />
            </div>
        </div>
    );
}