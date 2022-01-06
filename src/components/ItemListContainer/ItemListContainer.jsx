import React, { useEffect, useState } from 'react';
import { bringProducts } from '../../products/Productos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState ([]);

    useEffect(() => {
        bringProducts
        .then((resolved) => {
            setData(resolved);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    return (
        <div className='itemListContainer'>
            <h2 style={{ textAlign: 'center' }}>{greeting}</h2>
            <ItemList products = {data} />
        </div>
    )
}

export default ItemListContainer

