'use client';

import { createContext, useState } from "react"

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const [store, setStore] = useState({ productList: [], cartItems: [], wishList: [] });

  return (
        <AppContext.Provider value={{ store, setStore }}>
            {children}
        </AppContext.Provider>
    );
};