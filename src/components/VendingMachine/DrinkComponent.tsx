import type { Drink } from './types/Drink';

export const DrinkComponent = ({ drink, onClick }: { drink: Drink; onClick: () => void }) => {
    return (
        <button
            key={drink.id}
            onClick={onClick}
            className={`p-4 rounded-lg text-left font-mono border-2 transition-all ${
                drink.stock > 0 
                    ? 'bg-gray-800 border-cyan-400 text-cyan-300 hover:bg-cyan-900 hover:shadow-lg hover:shadow-cyan-400/30' 
                    : 'bg-gray-700 border-gray-500 text-gray-400 cursor-not-allowed'
            }`}
            disabled={drink.stock === 0}
        >
            <p className='text-lg font-bold text-yellow-400'>[{drink.name}]</p>
            <p className='text-green-400'>₩{drink.price}</p>
            <p className={drink.stock > 0 ? 'text-cyan-300' : 'text-red-400'}>
                재고: {drink.stock}
            </p>
        </button>
    );
};
