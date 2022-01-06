import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    return (
        <div className='containerDescriptionProduct'>
            <img src = {product.img} alt = {product.product} />
            <h2>{product.product}</h2>
            <p>{product.description}</p>
            <h3>{product.price} USD</h3>
        </div>
    )
}

export default ItemDetail
