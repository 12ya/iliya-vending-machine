import React from 'react';
import { CASH_OPTIONS, useVendingMachine } from './hooks/useVendingMachine';
import { DrinkComponent } from './DrinkComponent';
import { CashButton } from './CashButton';
import { InsertComponent } from './InsertComponent';

const VendingMachine: React.FC = () => {
    const { drinks, balance, message, returnChange, selectDrink, insertCoin } = useVendingMachine();

    return (
        <div className='w-full max-w-2xl p-8 bg-black border-4 border-cyan-400 rounded-lg shadow-2xl shadow-cyan-400/20'>
            <div className='p-6 bg-gray-900 border-2 border-gray-700 rounded-lg'>
                <h1 className='mb-6 text-4xl font-bold text-center text-cyan-400 font-mono tracking-wider'>
                    || 12'S 자판기 ||
                </h1>

                <div className='p-6 mb-6 bg-black border-2 border-yellow-400 rounded-lg shadow-inner'>
                    <div className='p-4 bg-gray-900 border border-gray-600 rounded'>
                        <p
                            className={`font-mono text-2xl text-center tracking-wide min-h-8 ${
                                message.status === 'error' ? 'text-red-400' : 'text-green-400'
                            }`}
                        >
                            {message.text}
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                    {drinks.map((drink) => (
                        <DrinkComponent
                            key={drink.id}
                            drink={drink}
                            onClick={() => selectDrink(drink.id)}
                        />
                    ))}
                </div>

                <InsertComponent balance={balance} onReturn={returnChange}>
                    {CASH_OPTIONS.map((option) => (
                        <CashButton
                            key={option}
                            option={option}
                            onClick={() => insertCoin(option)}
                        />
                    ))}
                </InsertComponent>
            </div>
        </div>
    );
};

export default VendingMachine;
