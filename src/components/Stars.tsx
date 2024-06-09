'use client'
import React, { useEffect } from 'react';
import Point from '@/components/Point';
import { anchorPointSelected, anchorPointsSelectionReset } from '@/store/anchor';
import { useDispatch, useSelector } from 'react-redux';
import { pointSelected } from '@/store/currentSelection';
import { activeBottomMenuItemChanged, activeTopMenuItemChanged } from '@/store/header';
import Star from "@/components/images/Star";
import { gsap } from 'gsap';

interface PointsProps {
    radius: number;
    gap?: number;
    level?: number;
}

const Stars: React.FC<PointsProps> = ({ radius, gap=0, level=1 }) => {
    const dispatch = useDispatch();

    const r = radius + gap * 3 + gap/3
    // const iStars = Array.from({ length: 8 }).map((_, index) => {
    //     const angle = (45 * index)
    //     const randomNumber = Math.random() * 3
        
    //     return (
    //         <div
    //             key={index}
    //             className="absolute h-0 w-0 overflow-visible cursor-pointer rotate-[-22.5deg] "
    //             style={{
    //                 left: `${r * Math.cos(angle * Math.PI / 180)}px`,
    //                 top: `${r * Math.sin(angle * Math.PI / 180)}px`
    //             }}
    //         >
    //             <Star randomNumber={randomNumber} index={index} key={index}/>
    //         </div>
    //     );
    // });

    const handleClick = ()=>{
       
            dispatch(activeTopMenuItemChanged({item:"perennials"}))
            dispatch(activeBottomMenuItemChanged({item:"constellations"}))
          
    }



    // return <div onClick={handleClick}>{iStars}</div>;

    return <div>
        {Array.from({ length: 8 }).map((_, index) => {
        const angle = (45 * index)
       
        
        return (
            <div onClick={handleClick}
                key={index}
                className="absolute h-0 w-0 overflow-visible cursor-pointer rotate-[-22.5deg] "
                style={{
                    left: `${r * Math.cos(angle * Math.PI / 180)}px`,
                    top: `${r * Math.sin(angle * Math.PI / 180)}px`
                }}
            >
                <Star index={index} key={index}/>
            </div>
        );
    })}
    </div>
};

export default Stars;
