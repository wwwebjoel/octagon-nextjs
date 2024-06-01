'use client'
import React from 'react'
import MediumBox from '../common/MediumBox'
import { useSelector, useDispatch } from 'react-redux'
import { anchorPointShapeChanged } from '@/store/anchor'
import { lineColorChanged, lineTypeChanged } from '@/store/lines'

export default function AnchorBox ({title, icon, property}: {title: string; icon: any; property: string;}){
    const dispatch = useDispatch()
    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point, line, trapezoid} : {level: number[], id: number, point: boolean, line: boolean, trapezoid: boolean} = currentSelectionData;

    const handleClick = (id:number, level: number, shape: string)=>{
    
        if(point){
           dispatch(anchorPointShapeChanged({id, level, shape: title}))
        }
        
        if(line){
            dispatch(lineTypeChanged({id, level, type: title}))
        }
    }

    return(
        <div className='w-full' onClick={()=>handleClick(id, level[0], title)}>
            <MediumBox icon={icon} title={title} property={property}/>
        </div>
    )
}