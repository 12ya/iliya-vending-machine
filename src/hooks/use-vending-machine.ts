import { useState, useCallback, useMemo } from 'react';
import type { Drink } from '../types/drink';
import type { PaymentMode } from '../types/payment-mode';

const INITIAL_DRINKS: Drink[] = [
    { id: 1, name: '콜라', price: 1100, stock: 5 },
    { id: 2, name: '물', price: 600, stock: 8 },
    { id: 3, name: '커피', price: 700, stock: 8 },
];

export const CASH_OPTIONS = [100, 500, 1000, 5000, 10000];

export const useVendingMachine = () => {
    const [drinks, setDrinks] = useState<Drink[]>(INITIAL_DRINKS);
    const [cashBalance, setCashBalance] = useState<number>(0);
    const [cardBalance, setCardBalance] = useState<number>(3000);
    const [paymentMode, setPaymentMode] = useState<PaymentMode>('');
    const [message, setMessage] = useState<{ text: string; status: 'success' | 'error' }>({
        text: '현금/카드 넣어주세요',
        status: 'success',
    });

    const balance = useMemo(() => {
        if (paymentMode === 'cash') {
            return cashBalance;
        } else if (paymentMode === 'card') {
            return cardBalance;
        }
        return 0;
    }, [paymentMode, cashBalance, cardBalance]);

    const insertCash = useCallback(
        (amount: number) => {
            setPaymentMode('cash');
            setCashBalance((prev) => prev + amount);
            setMessage({ text: `${amount}원을 투입했습니다.`, status: 'success' });
        },
        [cashBalance]
    );

    const toggleInsertCard = useCallback(() => {
        if (paymentMode === 'card') {
            setPaymentMode('cash');
            setMessage({ text: '현금/카드 넣어주세요', status: 'success' });
            return;
        }

        setPaymentMode('card');
        setMessage({ text: '카드가 인식되었습니다.', status: 'success' });
    }, [paymentMode, cardBalance]);

    const selectDrink = useCallback(
        (drinkId: number) => {
            if (paymentMode === '') {
                setMessage({ text: '현금/카드 넣어주세요', status: 'error' });
                return;
            }

            const drink = drinks.find((d) => d.id === drinkId);

            if (!drink) {
                setMessage({ text: '잘못된 선택입니다', status: 'error' });
                return;
            }

            if (drink.stock === 0) {
                setMessage({ text: '재고가 없습니다', status: 'error' });
                return;
            }

            if (balance < drink.price) {
                setMessage({ text: '잔액이 부족합니다', status: 'error' });
                return;
            }

            if (paymentMode === 'cash') {
                setCashBalance((prev) => prev - drink.price);
            } else if (paymentMode === 'card') {
                setCardBalance((prev) => prev - drink.price);
            }

            const newDrinks = drinks.map((d) =>
                d.id === drinkId ? { ...d, stock: d.stock - 1 } : d
            );
            setDrinks(newDrinks);

            setMessage({ text: `${drink.name} 맛있게 드세요!`, status: 'success' });
        },
        [balance, drinks, paymentMode]
    );

    const removeCard = useCallback(() => {
        setPaymentMode('cash');
        setMessage({ text: '현금/카드 넣어주세요', status: 'success' });
    }, []);

    const returnChange = useCallback(() => {
        if (paymentMode === 'card') {
            removeCard();
            return;
        }

        if (balance > 0) {
            setMessage({
                text: `${balance.toLocaleString()}원을 반환했습니다.`,
                status: 'success',
            });
            setCashBalance(0);
            return;
        }

        setMessage({ text: '반환할 잔돈이 없습니다', status: 'error' });
    }, [balance, paymentMode, removeCard]);

    return {
        drinks,
        balance,
        paymentMode,
        message,
        insertCash,
        toggleInsertCard,
        selectDrink,
        returnChange,
        cardBalance,
    };
};
