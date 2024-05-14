'use client'
import React from 'react'
import MediumBox from '../common/MediumBox'
import { useSelector, useDispatch } from 'react-redux'
import { anchorPointShapeChanged } from '@/store/anchor'

export default function AnchorBox ({title, icon, property}: {title: string; icon: any; property: string;}){
    const dispatch = useDispatch()
    const currentSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point} : {level: number, id: number, point: boolean} = currentSelectionData;

    const handleClick = (id:number, level: number, shape: string)=>{
    
        if(point){
           dispatch(anchorPointShapeChanged({id, level, shape: title}))
        }
    }

    return(
        <div className='w-full' onClick={()=>handleClick(id, level, title)}>
            <MediumBox icon={icon} title={title} property={property}/>
        </div>
    )
}