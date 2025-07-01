import React from 'react';
import { CASH_OPTIONS, useVendingMachine } from './hooks/useVendingMachine';
import { DrinkComponent } from './DrinkComponent';
import { CashButton } from './CashButton';
import { InsertComponent } from './InsertComponent';

const VendingMachine: React.FC = () => {
    const { drinks, balance, message, returnChange, selectDrink, insertCoin } = useVendingMachine();

    return (
        <div className='w-full max-w-md p-8 text-white bg-gray-800 rounded-lg shadow-lg'>
            <h1 className='mb-6 text-4xl font-bold text-center'>12's 자판기</h1>

            <div className='p-4 mb-6 text-center bg-gray-900 rounded-lg'>
                <p className='font-mono text-2xl' data-testid='message-display'>
                    {message}
                </p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-6'>
                {drinks.map((drink) => (
                    <DrinkComponent key={drink.id} drink={drink} onClick={() => selectDrink(drink.id)} />
                ))}
            </div>

            <InsertComponent balance={balance} onReturn={returnChange}>
                {CASH_OPTIONS.map((option) => (
                    <CashButton key={option} option={option} onClick={() => insertCoin(option)} />
                ))}
            </InsertComponent>
        </div>
    );
};

export default VendingMachine;
