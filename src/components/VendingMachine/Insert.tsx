import type { ReactNode } from 'react';
import { Display } from './Display';
import type { PaymentMode } from './types/PaymentMode';

type InsertProps = {
    children: ReactNode;
    balance: number;
    paymentMode: PaymentMode;
    onReturn: () => void;
    onUseCard: () => void;
};
export const Insert = ({ children, balance, paymentMode, onReturn, onUseCard }: InsertProps) => {
    return (
        <div className='p-4 md:p-6 bg-gray-800 border-2 border-gray-600 rounded-lg'>
            <h2 className='mb-3 md:mb-4 text-lg md:text-xl font-bold text-cyan-400 font-mono tracking-wide'>
                [ 결제 수단 ]
            </h2>

            <div className='mb-4 md:mb-6'>
                <button
                    onClick={onUseCard}
                    className={`w-full px-4 py-3 font-mono font-bold text-sm md:text-base rounded border-2 transition-all min-h-12 cursor-pointer ${
                        paymentMode === 'card'
                            ? 'bg-blue-600 border-blue-400 text-white hover:bg-blue-500'
                            : 'bg-gray-700 border-gray-500 text-gray-300 hover:bg-gray-600'
                    }`}
                >
                    💳 카드 결제
                </button>
            </div>

            <div className='mb-3 md:mb-4'>
                <h3 className='text-sm md:text-base font-bold text-cyan-300 font-mono mb-2'>
                    [ 현금 투입 ]
                </h3>
                <div className='grid grid-cols-2 md:flex md:justify-around gap-2'>{children}</div>
            </div>

            <div className='mb-4 md:mb-6'>
                <Display borderColor='border-green-400'>
                    <div className='font-mono text-lg md:text-2xl text-green-400 text-center'>
                        {paymentMode === 'card' ? (
                            <>
                                카드: <span className='text-blue-400'>인식됨</span>
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
                className='w-full px-4 py-4 md:py-3 font-mono font-bold text-sm md:text-base text-black bg-yellow-400 border-2 border-yellow-300 rounded hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:bg-yellow-500 transition-all min-h-[48px]'
            >
                [ {paymentMode === 'card' ? '결제 완료' : '잔돈 반환'} ]
            </button>
        </div>
    );
};
