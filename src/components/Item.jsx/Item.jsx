import React from 'react'

const Item = ({product}) => {
    return (
        <div className='containerProducts'>
            <img className='productsImage' src = {product.img} alt = {product.product} />
            <h2 className='productsName'>{product.product}</h2> 
            <h3 className='productsPrice'>{product.price}</h3>
        </div>
    )
}

export default Item
