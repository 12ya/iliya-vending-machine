import type { Drink } from './types/Drink';

export const DrinkComponent = ({ drink, onClick }: { drink: Drink; onClick: () => void }) => {
    return (
        <button
            key={drink.id}
            onClick={onClick}
            className={`p-4 rounded-lg text-left ${
                drink.stock > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 cursor-not-allowed'
            }`}
            disabled={drink.stock === 0}
        >
            <p className='text-lg font-bold'>{drink.name}</p>
            <p>₩{drink.price}</p>
            <p>재고: {drink.stock}</p>
        </button>
    );
};
