import React from 'react';
import Item from '../Item.jsx/Item';

const ItemList = ({products}) => {
    console.log('ItemList', products);
    
    return (
        <div>
            {products.map((product) => {
                return (<Item key = {product.id} product = {product} img = {product.img}/>)
            })}
        </div>
    )
}

export default ItemList
