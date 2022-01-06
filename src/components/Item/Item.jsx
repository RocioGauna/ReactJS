import React from 'react'
import './Item.css'

const Item = ({product}) => {
    return (
        <div className='containerProducts'>
            <img className='productsImage' src = {product.img} alt = {product.product} />
            <h2 className='productsName'>{product.product}</h2> 
            <h3 className='productsPrice'>{product.price}</h3>
            <button className='productsButton'>Ver más</button>
        </div>
    )
}

export default Item
