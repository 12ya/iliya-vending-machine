import type { Drink as DrinkType } from './types/Drink';

type DrinkProps = {
    drink: DrinkType;
    onClick: () => void;
};
export const Drink = ({ drink, onClick }: DrinkProps) => {
    return (
        <button
            onClick={onClick}
            className={`p-3 md:p-4 rounded-lg text-left font-mono border-2 transition-all cursor-pointer min-h-[80px] md:min-h-[100px] ${
                drink.stock > 0
                    ? 'bg-gray-800 border-cyan-400 text-cyan-300 hover:bg-cyan-900 hover:shadow-lg hover:shadow-cyan-400/30 active:bg-cyan-800'
                    : 'bg-gray-700 border-gray-500 text-gray-400 cursor-not-allowed'
            }`}
            disabled={drink.stock === 0}
        >
            <p className='text-base md:text-lg font-bold text-yellow-400'>[{drink.name}]</p>
            <p className='text-sm md:text-base text-green-400'>₩{drink.price}</p>
            <p
                className={`text-sm md:text-base ${
                    drink.stock > 0 ? 'text-cyan-300' : 'text-red-400'
                }`}
            >
                재고: {drink.stock}
            </p>
        </button>
    );
};
