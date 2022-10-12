import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartCtx, setCartCtx ] = useState([]);

    const createCart = (cart) => {
        setCartCtx(()=> [...cartCtx,cart])
    };

    return (
        <CartContext.Provider value={{cartCtx, createCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;