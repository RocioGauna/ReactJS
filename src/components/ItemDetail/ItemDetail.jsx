import React, { useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../Counter/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/CartContext';

const ItemDetail = ({product}) => {
    
    const {addCart} = useCartContext()

    const [show, setShow] = useState (true);

    const onAdd = (amount) => {
        setShow(false)
        addCart({...product, amount})
    }

    return (
        <div className='containerDescriptionProduct'>
            <img src = {product.img} alt = {product.product} />
            <h2>{product.product}</h2>
            <p>{product.description}</p>
            <h3>{product.price} USD</h3>
            {show ? <ItemCount min = {1} max = {15} onAdd = {onAdd} /> : 
            <div className='btnDetail'>
                <Link to = '/cart'><button>Finish</button></Link>
                <Link to = '/'><button>Continue buying</button></Link>
            </div>}
        </div>
    )
}

export default ItemDetail
