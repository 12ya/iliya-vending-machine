import { useState, useCallback } from 'react';
import type { Drink } from '../types/Drink';
import type { PaymentMode } from '../types/PaymentMode';

const INITIAL_DRINKS: Drink[] = [
    { id: 1, name: '콜라', price: 1100, stock: 5 },
    { id: 2, name: '물', price: 600, stock: 8 },
    { id: 3, name: '커피', price: 700, stock: 8 },
];

export const CASH_OPTIONS = [100, 500, 1000, 5000, 10000];

export const useVendingMachine = () => {
    const [drinks, setDrinks] = useState<Drink[]>(INITIAL_DRINKS);
    const [balance, setBalance] = useState<number>(0);
    const [paymentMode, setPaymentMode] = useState<PaymentMode>('');
    const [message, setMessage] = useState<{ text: string; status: 'success' | 'error' }>({
        text: '현금/카드 넣어주세요',
        status: 'success',
    });

    const insertCash = useCallback(
        (amount: number) => {
            if (paymentMode !== 'cash') {
                setPaymentMode('cash');
            }
            setBalance((prevBalance) => prevBalance + amount);
            setMessage({ text: `${amount}원을 투입했습니다.`, status: 'success' });
        },
        [paymentMode]
    );

    const insertCard = useCallback(() => {
        console.log('insertCarjfsidjofisjd', paymentMode);
        if (paymentMode === 'card') {
            setPaymentMode('');
            return;
        }

        setPaymentMode('card');
        setBalance(5000);
        setMessage({ text: '카드가 인식되었습니다.', status: 'success' });
    }, [paymentMode]);

    const selectDrink = useCallback(
        (drinkId: number) => {
            const drink = drinks.find((d) => d.id === drinkId);

            if (!drink) {
                setMessage({ text: '잘못된 선택입니다', status: 'error' });
                return;
            }

            if (drink.stock === 0) {
                setMessage({ text: '재고가 없습니다', status: 'error' });
                return;
            }

            if (paymentMode === 'cash' && balance < drink.price) {
                setMessage({ text: '잔액이 부족합니다', status: 'error' });
                return;
            }

            if (paymentMode === 'cash') {
                setBalance((prevBalance) => prevBalance - drink.price);
            }

            const newDrinks = drinks.map((d) =>
                d.id === drinkId ? { ...d, stock: d.stock - 1 } : d
            );
            setDrinks(newDrinks);
            setMessage({ text: `${drink.name} 맛있게 드세요!`, status: 'success' });
        },
        [balance, drinks, paymentMode]
    );

    const returnChange = useCallback(() => {
        if (paymentMode === 'card') {
            setMessage({ text: '카드 결제가 완료되었습니다.', status: 'success' });
            setPaymentMode('cash');
            setBalance(0);
            return;
        }

        if (balance > 0) {
            setMessage({
                text: `${balance.toLocaleString()}원을 반환했습니다.`,
                status: 'success',
            });
            setBalance(0);
            return;
        }

        setMessage({ text: '반환할 잔돈이 없습니다', status: 'error' });
    }, [balance, paymentMode]);

    return {
        drinks,
        balance,
        paymentMode,
        message,
        insertCash,
        insertCard,
        selectDrink,
        returnChange,
    };
};
