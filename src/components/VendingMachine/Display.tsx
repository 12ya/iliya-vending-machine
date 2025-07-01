import type { ReactNode } from 'react';

type DisplayProps = {
    children: ReactNode;
    borderColor?: string;
    className?: string;
};

export const Display = ({ children, borderColor = 'border-yellow-400' }: DisplayProps) => {
    return (
        <div className={`p-4 md:p-6 bg-black border-2 ${borderColor} rounded-lg shadow-inner`}>
            <div className='p-2 md:p-4 bg-gray-900 border border-gray-600 rounded flex items-center justify-center min-h-[2rem] md:min-h-[4.2rem]'>
                {children}
            </div>
        </div>
    );
};
