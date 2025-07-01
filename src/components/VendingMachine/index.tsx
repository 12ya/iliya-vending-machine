import React from 'react';
import { CASH_OPTIONS, useVendingMachine } from './hooks/useVendingMachine';

import { Drink } from './Drink';
import { CashButton } from './CashButton';
import { Insert } from './Insert';
import { Display } from './Display';

const VendingMachine: React.FC = () => {
    const {
        drinks,
        balance,
        paymentMode,
        message,
        returnChange,
        selectDrink,
        insertCash,
        insertCard,
    } = useVendingMachine();

    return (
        <div className='w-full max-w-2xl mx-auto p-4 md:p-8 bg-black border-4 border-cyan-400 rounded-lg shadow-2xl shadow-cyan-400/20'>
            <div className='p-4 md:p-6 bg-gray-900 border-2 border-gray-700 rounded-lg'>
                <h1 className='mb-4 md:mb-6 text-2xl md:text-4xl font-bold text-center text-cyan-400 font-mono tracking-wider'>
                    || 12'S 자판기 ||
                </h1>

                <div className='mb-4 md:mb-6'>
                    <Display borderColor='border-yellow-400'>
                        <p
                            className={`font-mono text-lg md:text-2xl text-center tracking-wide break-words text-[0.8rem] ${
                                message.status === 'error' ? 'text-red-400' : 'text-green-400'
                            }`}
                        >
                            {'>>'} {message.text} {'<<'}
                        </p>
                    </Display>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6'>
                    {drinks.map((drink) => (
                        <Drink key={drink.id} drink={drink} onClick={() => selectDrink(drink.id)} />
                    ))}
                </div>

                <Insert
                    balance={balance}
                    paymentMode={paymentMode}
                    onReturn={returnChange}
                    onUseCard={insertCard}
                >
                    {CASH_OPTIONS.map((option) => (
                        <CashButton
                            key={option}
                            option={option}
                            onClick={() => insertCash(option)}
                        />
                    ))}
                </Insert>
            </div>
        </div>
    );
};

export default VendingMachine;
