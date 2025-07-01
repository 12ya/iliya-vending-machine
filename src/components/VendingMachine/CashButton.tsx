type CashButtonProps = {
    option: number;
    onClick: () => void;
    isCardMode: boolean;
};
export const CashButton = ({ option, isCardMode, onClick }: CashButtonProps) => (
    <button
        onClick={!isCardMode ? onClick : () => {}}
        className={`px-3 md:px-4 py-3 md:py-2 font-mono font-bold text-sm md:text-base text-black ${
            isCardMode
                ? 'bg-gray-700 border-gray-500 text-gray-300 hover:bg-gray-600'
                : 'bg-yellow-400 border-yellow-300 hover:bg-yellow-300 active:bg-yellow-500'
        } rounded  hover:shadow-lg hover:shadow-yellow-400/30 transition-all min-h-11 cursor-pointer`}
    >
        ₩{option}
    </button>
);
