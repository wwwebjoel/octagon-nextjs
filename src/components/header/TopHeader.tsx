import React from 'react'
import TopMenu from "@/components/header/menu/TopMenu";

const TopHeader = ()=>{
    return(
        <div className={'h-[90px] w-full bg-gradient-top-header flex items-center justify-between gap-5 px-16 border-b border-portfolio-indigo/15'} style={{ backdropFilter: 'blur(12px)' }}>
            <div className={'w-60 flex flex-col'}>
                <span className={'text-white font-black text-xl tracking-tight leading-none'}>Joel Pradhan</span>
                <span className={'text-portfolio-cyan text-xs font-medium tracking-widest uppercase mt-1'}>Full-Stack Developer</span>
            </div>
            <div><TopMenu /></div>
            <div className={'w-60 flex justify-end items-center gap-3'}>
                <a
                    href="mailto:joel@joelpradhan.com"
                    className={'text-white text-sm font-medium hover:text-portfolio-cyan transition-colors'}
                >
                    joel@joelpradhan.com
                </a>
                <a
                    href="https://joelpradhan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={'px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-button hover:opacity-80 transition-opacity whitespace-nowrap'}
                >
                    Book a Call
                </a>
            </div>

        </div>
    )
}

export default TopHeader
