import { useState, useContext, createContext } from "react";

const cartContext = createContext([])

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addCart (product){
        setCartList([...cartList, product])
    }

    function empty (){
        setCartList([])
    }

    return(
        <CartContext.Provider value = {{cartList, addCart, empty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider