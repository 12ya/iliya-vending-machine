export const CashButton = ({ option, onClick }: { option: number; onClick: () => void }) => (
    <button
        onClick={onClick}
        className='px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-700'
    >
        ₩{option}
    </button>
);
