import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({min, max, onAdd}) => {
    const [counter, setCounter] = useState (min)

    const maximum = () => {
        counter < max && setCounter (prev => prev + 1)
    }

    const minimum = () => {
        counter > min && setCounter (prev => prev - 1)
    }

    return (
        <div className='counter'>
            <h2>{counter}</h2>
            <button className='btn' onClick = {maximum}>+</button>
            <button className='btn' onClick = {minimum}>-</button>
            <button className='btn-add' onClick = {() => onAdd(counter)}>Add to cart</button>
        </div>
    )
}

export default ItemCount
