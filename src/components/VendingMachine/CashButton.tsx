export const CashButton = ({ option, onClick }: { option: number; onClick: () => void }) => (
    <button
        onClick={onClick}
        className='px-4 py-2 font-mono font-bold text-black bg-yellow-400 border-2 border-yellow-300 rounded hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 transition-all'
    >
        ₩{option}
    </button>
);
