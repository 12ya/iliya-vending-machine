import type { ReactNode } from 'react';

type InsertComponentProps = {
    children: ReactNode;
    balance: number;
    onReturn: () => void;
};
export const InsertComponent = ({ children, balance, onReturn }: InsertComponentProps) => {
    return (
        <div className='p-4 bg-gray-700 rounded-lg'>
            <h2 className='mb-4 text-xl font-bold'>인서트</h2>
            <div className='flex justify-around mb-4'>{children}</div>
            <div className='mb-4 font-mono text-2xl text-center'>
                금액: ₩<span data-testid='balance-display'>{balance}</span>
            </div>
            <button
                onClick={onReturn}
                className='w-full px-4 py-2 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-600'
            >
                환불
            </button>
        </div>
    );
};
