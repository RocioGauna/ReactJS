import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bringProducts } from '../../products/Productos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {descriptionId} = useParams()
    
    useEffect(() => {
        bringProducts 
        .then(resp => setProduct(resp.find (prod => prod.id === descriptionId)))
    }, [descriptionId])

    console.dir(product)

    return (
        <div className='containerDescription'>
           <ItemDetail product = {product}/> 
        </div>
    )
}

export default ItemDetailContainer
