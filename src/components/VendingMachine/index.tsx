import React from 'react';
import { useVendingMachine } from './hooks/useVendingMachine';

const VendingMachine: React.FC = () => {
    const { drinks, balance, message, insertCoin, selectDrink, returnChange, CASH_OPTIONS } =
        useVendingMachine();

    return (
        <div className='w-full max-w-md p-8 text-white bg-gray-800 rounded-lg shadow-lg'>
            <h1 className='mb-6 text-4xl font-bold text-center'>12's 자판기</h1>

            <div className='p-4 mb-6 text-center bg-gray-900 rounded-lg'>
                <p className='font-mono text-2xl' data-testid='message-display'>
                    {message}
                </p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-6 bg-'>
                {drinks.map((drink) => (
                    <button
                        key={drink.id}
                        onClick={() => selectDrink(drink.id)}
                        className={`p-4 rounded-lg text-left ${
                            drink.stock > 0
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-gray-600 cursor-not-allowed'
                        }`}
                        disabled={drink.stock === 0}
                    >
                        <p className='text-lg font-bold'>{drink.name}</p>
                        <p>₩{drink.price}</p>
                        <p>재고: {drink.stock}</p>
                    </button>
                ))}
            </div>

            <div className='p-4 bg-gray-700 rounded-lg'>
                <h2 className='mb-4 text-xl font-bold'>인서트</h2>
                <div className='flex justify-around mb-4'>
                    {CASH_OPTIONS.map((option) => (
                        <button
                            onClick={() => insertCoin(option)}
                            className='px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700'
                        >
                            ₩{option}
                        </button>
                    ))}
                </div>
                <div className='mb-4 font-mono text-2xl text-center'>
                    금액: $<span data-testid='balance-display'>{balance}</span>
                </div>
                <button
                    onClick={returnChange}
                    className='w-full px-4 py-2 font-bold text-black bg-yellow-500 rounded hover:bg-yellow-600'
                >
                    환불
                </button>
            </div>
        </div>
    );
};

export default VendingMachine;
