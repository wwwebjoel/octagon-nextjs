import {useDispatch, useSelector} from "react-redux";
import {activeColorChanged} from "@/store/colors";
import {anchorPointColorChanged} from "@/store/anchor";
import ColorIcon from "@/components/images/ColorIcon";

export default function PropertiesColors(){
    const dispatch = useDispatch()
    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point, line, trapezoid} : {level: number; id: number; point: boolean; line:boolean; trapezoid: boolean;} = currentSelectionData;

    const handleClick = (id:number, level: number, color: string)=>{
        if(point){
            dispatch(anchorPointColorChanged({id, level, color}))
        }
        if(trapezoid){

        }
    }

    const propertiesColorBox = useSelector((state:any)=>state.entities.colors.propertiesColors)

    return(
        <div>
            <div className={`pb-2 text-base font-semibold flex gap-[10px]`}>
                <div className={'w-[20px]'}><ColorIcon /></div>
                <div>color</div>
            </div>
            <div className={'flex justify-between gap-0.5'}>
                {Array.from({length: 8}).map((_, i) => {
                    const backgroundColor = propertiesColorBox[`${i + 1}`]
                    return (
                        <div className={`h-6 w-6 aspect-square rounded-full cursor-pointer`} key={i}
                             style={{backgroundColor}}

                             onClick={() => handleClick(id, level, backgroundColor)}
                        >

                        </div>
                    )
                })}
            </div>
        </div>
    )

}