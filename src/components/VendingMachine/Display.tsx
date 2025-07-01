import type { ReactNode } from 'react';

type DisplayProps = {
    children: ReactNode;
    borderColor?: string;
    className?: string;
};

export const Display = ({ children, borderColor = 'border-yellow-400' }: DisplayProps) => {
    return (
        <div className={`p-1 md:p-3 bg-black border-2 ${borderColor} rounded-lg shadow-inner`}>
            <div className='p-1 md:p-2 bg-gray-900 border border-gray-600 rounded flex items-center justify-center min-h-[1rem] md:min-h-[3rem]'>
                {children}
            </div>
        </div>
    );
};
