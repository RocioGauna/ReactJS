import { useState, useContext, createContext } from "react";

const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addCart (amount){
        setCartList([...cartList, amount])
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