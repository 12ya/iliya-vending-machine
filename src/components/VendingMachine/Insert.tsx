import type { ReactNode } from 'react';
import { Display } from './Display';

type InsertProps = {
    children: ReactNode;
    balance: number;
    onReturn: () => void;
};
export const Insert = ({ children, balance, onReturn }: InsertProps) => {
    return (
        <div className='p-4 md:p-6 bg-gray-800 border-2 border-gray-600 rounded-lg'>
            <h2 className='mb-3 md:mb-4 text-lg md:text-xl font-bold text-cyan-400 font-mono tracking-wide'>
                [ 투입 ]
            </h2>
            <div className='grid grid-cols-2 md:flex md:justify-around gap-2 mb-4 md:mb-6'>
                {children}
            </div>

            <div className='mb-4 md:mb-6'>
                <Display borderColor='border-green-400'>
                    <div className='font-mono text-lg md:text-2xl text-green-400 text-center'>
                        잔액: ₩<span className='text-yellow-400'>{balance.toLocaleString()}</span>
                    </div>
                </Display>
            </div>
            <button
                onClick={onReturn}
                className='w-full px-4 py-4 md:py-3 font-mono font-bold text-sm md:text-base text-black bg-yellow-400 border-2 border-yellow-300 rounded hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:bg-yellow-500 transition-all min-h-[48px]'
            >
                [ 반환 ]
            </button>
        </div>
    );
};
