import React, {useState} from 'react'

const ItemCount = ({min, max}) => {
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
            <button onClick = {maximum}>+</button>
            <button onClick = {minimum}>-</button>
        </div>
    )
}

export default ItemCount
