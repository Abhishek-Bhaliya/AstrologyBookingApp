import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface WalletContextProps {
  balance: number;
  deduct: (amount: number) => void;
}

export const WalletContext = createContext<WalletContextProps>({
  balance: 500,
  deduct: () => {}
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState<number>(500);

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem('wallet');
      if (stored) setBalance(parseInt(stored));
    })();
  }, []);

  const deduct = async (amount: number) => {
    const newBalance = balance - amount;
    setBalance(newBalance);
    await AsyncStorage.setItem('wallet', newBalance.toString());
  };

  return (
    <WalletContext.Provider value={{ balance, deduct }}>
      {children}
    </WalletContext.Provider>
  );
};
