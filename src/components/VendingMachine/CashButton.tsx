export const CashButton = ({ option, onClick }: { option: number; onClick: () => void }) => (
    <button
        onClick={onClick}
        className='px-3 md:px-4 py-3 md:py-2 font-mono font-bold text-sm md:text-base text-black bg-yellow-400 border-2 border-yellow-300 rounded hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:bg-yellow-500 transition-all min-h-[48px]'
    >
        ₩{option}
    </button>
);
