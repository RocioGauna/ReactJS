import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import ItemCount from '../Counter/ItemCount';

const Item = ({product}) => {
    return (
        <div className='containerProducts'>
            <img className='productsImage' src = {product.img} alt = {product.product} />
            <h2 className='productsName'>{product.product}</h2> 
            <h3 className='productsPrice'>{product.price} USD</h3>
            <Link to = {`/description/${product.id}`} >
            <button className='productsButton'>Ver más</button>
            </Link>
            <ItemCount min = {1} max = {15} />
        </div>
    )
}

export default Item
