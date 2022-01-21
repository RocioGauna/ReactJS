import { useCartContext } from "../../context/cartContext"

const Cart = () => {
    const { cartList, empty } = useCartContext ()
    
    return (
        <div>            
            {cartList.map(prod => <li key={prod.id}>{prod.product} - cant: {prod.amount}</li>)}
            <button onClick = {empty}>Empty cart</button>
        </div>
    )
}

export default Cart
