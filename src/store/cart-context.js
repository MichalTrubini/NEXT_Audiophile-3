import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartCtx, setCartCtx ] = useState([]);
    const [cartUpdated, setCartUpdated] = useState(false)

    const updateCart = () => {
        setCartUpdated(prevValue => !prevValue)
    };

    useEffect(() => {
        const cartInStorage = JSON.parse(localStorage.getItem("cart"));
        if (cartInStorage !== null) setCartCtx(cartInStorage)
    },[cartUpdated])

    return (
        <CartContext.Provider value={{cartCtx, updateCart, setCartCtx}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;