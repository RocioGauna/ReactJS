import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bringProducts } from '../../products/Productos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [product, setProduct] = useState ([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if(categoryId){
            bringProducts
            .then (resp => setProduct(resp.filter(product => product.categoryId === categoryId))) 
            .catch (error => console.log(error))            
        } else {    
            bringProducts       
            .then (resp => setProduct(resp))
            .catch (error => console.log(error)) 
        }
    }, [categoryId])

    return (
        <div className='itemListContainer'>
            <h2 style={{ textAlign: 'center' }}>{greeting}</h2>
            <ItemList product = {product} />
        </div>
    )
}

export default ItemListContainer

