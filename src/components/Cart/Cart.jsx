import { useCartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartList, empty, deleteProduct, total, addPrice} = useCartContext ()
    
    return (
        <>
            {cartList.length === 0 ?(
                <div>
                    <h2>Add products to your cart</h2>
                    <Link to="/"><button>Go to products</button></Link>
                </div>
            ) : (
                <>
                    {/* Traer producto */}
                    {cartList?.map((prod) => (
                        <div key={prod.id}>
                            <img src={prod.img} alt={prod.product} />
                            <div>
                                <h3>{prod.name}</h3>
                                <h3>Amount: {prod.price} USD</h3>
                                {/* Eliminar */}
                                <button onClick={() => deleteProduct(prod.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    {/* Vaciar */}
                    <button onClick={empty}>Empty cart</button>
                    {/* Total */}
                    <h3>{total()}</h3>
                </>
            )}
        </>
    )
}

export default Cart
