import { useState, useCallback } from 'react';
import type { Drink } from '../types/Drink';

const INITIAL_DRINKS: Drink[] = [
    { id: 1, name: '콜라', price: 1100, stock: 5 },
    { id: 2, name: '물', price: 600, stock: 8 },
    { id: 3, name: '커피', price: 700, stock: 8 },
];

export const CASH_OPTIONS = [100, 500, 1000, 5000, 10000];

export const useVendingMachine = () => {
    const [drinks, setDrinks] = useState<Drink[]>(INITIAL_DRINKS);
    const [balance, setBalance] = useState<number>(0);
    const [message, setMessage] = useState<{ text: string; status: 'success' | 'error' }>({
        text: '현금/카드 넣어주세요',
        status: 'success',
    });

    const insertCoin = useCallback((amount: number) => {
        setBalance((prevBalance) => {
            const newBalance = prevBalance + amount;
            setMessage({ text: `${newBalance.toLocaleString()}원`, status: 'success' });
            return newBalance;
        });
    }, []);

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

            if (balance < drink.price) {
                setMessage({ text: '잔액이 부족합니다', status: 'error' });
                return;
            }

            const newBalance = balance - drink.price;
            setBalance(newBalance);

            const newDrinks = drinks.map((d) =>
                d.id === drinkId ? { ...d, stock: d.stock - 1 } : d
            );
            setDrinks(newDrinks);

            setMessage({ text: `${drink.name} 맛있게 드세요!`, status: 'success' });
        },
        [balance, drinks]
    );

    const returnChange = useCallback(() => {
        if (balance > 0) {
            setMessage({
                text: `${balance.toLocaleString()}원을 반환했습니다.`,
                status: 'success',
            });
            setBalance(0);
        } else {
            setMessage({ text: '반환할 잔돈이 없습니다', status: 'error' });
        }
    }, [balance]);

    return {
        drinks,
        balance,
        message,
        insertCoin,
        selectDrink,
        returnChange,
    };
};
