import type { ReactNode } from 'react';
import type { PaymentMode } from './types/PaymentMode';

import { Display } from './Display';
import { BalanceDisplay } from './BalanceDisplay';

type InsertProps = {
    children: ReactNode;
    balance: number;
    paymentMode: PaymentMode;
    cardBalance: number;
    onReturn: () => void;
    onToggleCard: () => void;
};
export const Insert = ({
    children,
    balance,
    paymentMode,
    onReturn,
    onToggleCard,
    cardBalance,
}: InsertProps) => {
    const isCardMode = paymentMode === 'card';
    return (
        <div className='p-1 bg-gray-800 border-2 border-gray-600 rounded-lg md:p-3'>
            <h2 className='mb-1 font-mono text-base font-bold tracking-wide md:mb-3 md:text-lg text-cyan-400'>
                [ 결제 수단 ]
            </h2>

            <div className='mb-1 md:mb-4'>
                <button
                    onClick={onToggleCard}
                    className={`w-full px-3 py-2 font-mono font-bold text-sm md:text-base rounded border-2 transition-all min-h-10 cursor-pointer ${
                        isCardMode
                            ? 'bg-blue-600 border-blue-400 text-white hover:bg-blue-500'
                            : 'bg-gray-700 border-gray-500 text-gray-300 hover:bg-gray-600'
                    }`}
                >
                    💳 카드 결제 {isCardMode ? cardBalance.toLocaleString() + '원' : ''}
                </button>
            </div>

            <div className='mb-1 md:mb-3'>
                <h3 className='mb-1 font-mono text-sm font-bold md:text-base text-cyan-300'>
                    [ 현금 투입 ]
                </h3>
                <div className='grid grid-cols-2 gap-1 md:flex md:justify-around'>{children}</div>
            </div>

            <div className='mb-1 md:mb-4'>
                <Display borderColor='border-green-400'>
                    <BalanceDisplay balance={balance} isCardMode={isCardMode} />
                </Display>
            </div>

            <button
                onClick={onReturn}
                className='w-full px-3 py-2 font-mono font-bold text-sm md:text-base text-black bg-yellow-400 border-2 border-yellow-300 rounded hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:bg-yellow-500 transition-all min-h-[40px]'
            >
                [ {isCardMode ? '카드 반환' : '잔돈 반환'} ]
            </button>
        </div>
    );
};
