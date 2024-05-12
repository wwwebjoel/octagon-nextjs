import RightArrow from "@/components/images/RightArrow";
import CloseIcon from "@/components/common/CloseIcon";
import {useDispatch} from "react-redux";
import {anchorTipsModuleDeactivated, chooseWordBoxModuleActivated, wordsBoxModuleActivated} from "@/store/modules";

export function AnchorTips(){
    const dispatch = useDispatch();

    const handleClose = ()=>{
        dispatch(anchorTipsModuleDeactivated())
        dispatch(wordsBoxModuleActivated())
        dispatch(chooseWordBoxModuleActivated())
    }

    return(
        <div className={`flex w-[332px] h-max`}>
            <div className={`bg-white w-3 h-6 mt-5 shrink-0 -mr-px`}
            style={{
                clipPath:` polygon(100% 0%,  100% 100%, 0% 50%)`,
            }}
            ></div>
            <div className={`relative rounded-[20px] bg-white p-5`}>
                <div
                    onClick={handleClose}
                    className={'absolute top-2 right-3'}>
                    <CloseIcon color={'#989898'}/></div>
                <div>
                    <div className={`font-medium text-xl pb-[10px]`}>click on any anchor</div>
                    <div className={`font-medium text-base text-[#241945]`}>Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
                <div className={`flex justify-end gap-[30px]`}>
                   <div className={`invert rotate-180 opacity-20 w-5 cursor-pointer`}> <RightArrow/></div>
                   <div className={`invert w-5 cursor-pointer`}> <RightArrow/></div>
                </div>
            </div>

        </div>
    )
}