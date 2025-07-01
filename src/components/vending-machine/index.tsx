import React from 'react';

import { Drink } from './drink';
import { CashButton } from './cash-button';
import { Insert } from './insert';
import { Display } from './display';
import { CASH_OPTIONS, useVendingMachine } from '../../hooks/use-vending-machine';

const VendingMachine: React.FC = () => {
    const {
        drinks,
        balance,
        paymentMode,
        message,
        returnChange,
        selectDrink,
        insertCash,
        toggleInsertCard,
        cardBalance,
    } = useVendingMachine();

    return (
        <div className='w-full max-w-2xl p-2 mx-auto bg-black border-4 rounded-lg shadow-2xl md:p-6 border-cyan-400 shadow-cyan-400/20'>
            <div className='p-2 bg-gray-900 border-2 border-gray-700 rounded-lg md:p-5'>
                <h1 className='mb-2 font-mono text-xl font-bold tracking-wider text-center md:mb-5 md:text-3xl text-cyan-400'>
                    || 12'S 자판기 ||
                </h1>

                <div className='mb-2 md:mb-5'>
                    <Display borderColor='border-yellow-400'>
                        <p
                            className={`font-mono text-base md:text-xl text-center tracking-wide break-words text-[0.8rem] ${
                                message.status === 'error' ? 'text-red-400' : 'text-green-400'
                            }`}
                        >
                            {'>>'} {message.text} {'<<'}
                        </p>
                    </Display>
                </div>

                <div className='grid grid-cols-1 gap-1 mb-2 md:grid-cols-2 md:gap-3 md:mb-5'>
                    {drinks.map((drink) => (
                        <Drink key={drink.id} drink={drink} onClick={() => selectDrink(drink.id)} />
                    ))}
                </div>

                <Insert
                    cardBalance={cardBalance}
                    balance={balance}
                    paymentMode={paymentMode}
                    onReturn={returnChange}
                    onToggleCard={toggleInsertCard}
                >
                    {CASH_OPTIONS.map((option) => (
                        <CashButton
                            isCardMode={paymentMode === 'card'}
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
