import React, { ReactNode } from 'react';

interface BoxProps {
    children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children = <></> }) => {
    return (
        <div className={'relative text-white w-full min-h-2 h-max bg-gradient-box-purple border border-portfolio-indigo/20 rounded-2xl p-4 pb-9'}
            style={{ backdropFilter: 'blur(12px)' }}>
            {children}
        </div>
    );
};

export default Box;
