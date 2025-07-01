import React from 'react';

type BalanceDisplayProps = {
    balance: number;
    isCardMode: boolean;
};

export const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance, isCardMode }) => {
    return (
        <div className='font-mono text-base text-center text-green-400 md:text-xl'>
            {isCardMode ? (
                <>
                    카드: <span className='text-blue-400'>승인됨</span>
                </>
            ) : (
                <>
                    잔액: ₩<span className='text-yellow-400'>{balance.toLocaleString()}</span>
                </>
            )}
        </div>
    );
};
