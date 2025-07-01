import type { ReactNode } from 'react';

type InsertComponentProps = {
    children: ReactNode;
    balance: number;
    onReturn: () => void;
};
export const InsertComponent = ({ children, balance, onReturn }: InsertComponentProps) => {
    return (
        <div className='p-6 bg-gray-800 border-2 border-gray-600 rounded-lg'>
            <h2 className='mb-4 text-xl font-bold text-cyan-400 font-mono tracking-wide'>
                [ CASH INSERT ]
            </h2>
            <div className='flex justify-around gap-2 mb-6'>{children}</div>

            <div className='p-4 mb-6 bg-black border border-green-400 rounded'>
                <div className='font-mono text-2xl text-green-400 flex items-center justify-center'>
                    BALANCE: ₩
                    <span
                        data-testid='balance-display'
                        className='ml-2 text-yellow-400 inline-block text-left'
                    >
                        {balance.toLocaleString()}
                    </span>
                </div>
            </div>

            <button
                onClick={onReturn}
                className='w-full px-4 py-3 font-mono font-bold text-black bg-yellow-400 border-2 border-yellow-300 rounded hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 transition-all'
            >
                [ RETURN CHANGE ]
            </button>
        </div>
    );
};
