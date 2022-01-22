import { useCartContext } from '../../CartContext/CartContext'

const Cart = () => {
    const { cartList, empty } = useCartContext ()
    
    return (
        <div>            
            {cartList.map(prod => <li key={prod.id}>{prod.product} - amount: {prod.amount}</li>)}
            <button onClick = {empty}>Empty cart</button>
        </div>
    )
}

export default Cart
