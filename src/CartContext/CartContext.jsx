import { useState, useContext, createContext } from "react";

export const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addCart = (item, amount) => {
        const indice = cartList.findIndex(i => i.id === item.id)
        
        if (indice > -1){
        const quantifyOld = cartList [indice].amount
        let quantifyNew = quantifyOld + item.amount
        cartList [indice].amount = quantifyNew
        let arrAux = [...cartList]
        setCartList(arrAux)
        } else{
        setCartList([...cartList, item])
        }
    };

    const onCart = (id) => {
        const cart = cartList.some((prod) => prod.id === id);
        return cart;
    }

    // Añadir
    const add = (item, amount) => {
        const clone = [...cartList];
        clone.forEach((product) => {
            product.id === item.id && (product.amount += amount);
        });
    };

    // Eliminar
    const deleteProduct = (id) => {
        const itemFilter = cartList.filter((product) => product.id !== id);
        setCartList(itemFilter);
    };

    // Vaciar
    const empty = () => {
        setCartList([])
    }

    // Total final
    const total = () => {
        let count = 0;
        cartList.forEach((product) => {
            count += product.price * product.amount;
        });
        return count;
    };

    // Sumar productos
    const price = (item, amount) => {
        const copia = [...cartList];
        copia.forEach((product) => {
            product.id === item.id && (product.amount += amount);
        });
    };

    return(
        <CartContext.Provider value = {{cartList, addCart, empty, deleteProduct, total, price}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider