import React, { ReactNode } from 'react';

interface BoxProps {
    children: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children=<></> }) => {
    return (
        <div className={'relative text-white w-[250px] min-h-2 h-max bg-gradient-box-purple border-[1px] border-inner-purple2 rounded-[15px] p-[15px] pb-[35px]'}>
            {children}
        </div>
    );
};

export default Box;
