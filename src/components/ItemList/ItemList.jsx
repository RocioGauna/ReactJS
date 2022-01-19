import React from 'react';
import Item from '../Item/Item';

const ItemList = ({product}) => {
    console.log('ItemList', product);
    
    return (
        <div className='containerItem'>
            {product.map((product) => {
                return (<Item key = {product.id} product = {product} img = {product.img}/>)
            })}
        </div>
    )
}

export default ItemList
