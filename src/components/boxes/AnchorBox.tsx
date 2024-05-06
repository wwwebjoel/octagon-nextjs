'use client'
import React from 'react'
import MediumBox from '../common/MediumBox'
import { useSelector, useDispatch } from 'react-redux'
import { anchorPointShapeChanged } from '@/store/anchor'

export default function AnchorBox ({title, icon}: {title: string, icon: any}){
    const dispatch = useDispatch()
    const pointSelectionData : any = useSelector<any>((state)=>state.entities.currentSelection)
    const {level, id, point} : {level: number, id: number, point: boolean} = pointSelectionData;

    const handleClick = (id:number, level: number, shape: string)=>{
        console.log(id)
        console.log(level)
        if(point){
           dispatch(anchorPointShapeChanged({id, level, shape: title}))
        }
    }

    return(
        <div onClick={()=>handleClick(id, level, title)}>
            <MediumBox icon={icon} title={title} />
        </div>
    )
}