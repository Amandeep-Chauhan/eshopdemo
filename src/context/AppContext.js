'use client';

import { createContext, useState } from "react"

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const daaa = {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}}
    const [store, setStore] = useState({ productList: [], cartItems: [daaa], wishList: [] });

  return (
        <AppContext.Provider value={{ store, setStore }}>
            {children}
        </AppContext.Provider>
    );
};