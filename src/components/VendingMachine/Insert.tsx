import type { ReactNode } from 'react';
import { Display } from './Display';
import type { PaymentMode } from './types/PaymentMode';

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
        <div className='p-1 md:p-3 bg-gray-800 border-2 border-gray-600 rounded-lg'>
            <h2 className='mb-1 md:mb-3 text-base md:text-lg font-bold text-cyan-400 font-mono tracking-wide'>
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
                <h3 className='text-sm md:text-base font-bold text-cyan-300 font-mono mb-1'>
                    [ 현금 투입 ]
                </h3>
                <div className='grid grid-cols-2 md:flex md:justify-around gap-1'>{children}</div>
            </div>

            <div className='mb-1 md:mb-4'>
                <Display borderColor='border-green-400'>
                    <div className='font-mono text-base md:text-xl text-green-400 text-center'>
                        {isCardMode ? (
                            <>
                                카드: <span className='text-blue-400'>승인됨</span>
                            </>
                        ) : (
                            <>
                                잔액: ₩
                                <span className='text-yellow-400'>{balance.toLocaleString()}</span>
                            </>
                        )}
                    </div>
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
