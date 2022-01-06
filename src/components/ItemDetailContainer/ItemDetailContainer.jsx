import React, { useEffect, useState } from 'react'
import { bringProducts } from '../../products/Productos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        bringProducts 
        .then(resp => setProduct(resp.find (prod => prod.id === '1')))
    }, [])

    console.dir(product)

    return (
        <div>
           <ItemDetail product = {product}/> 
        </div>
    )
}

export default ItemDetailContainer
