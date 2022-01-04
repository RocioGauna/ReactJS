import React, {useState} from 'react'

const ItemCount = ({min, max}) => {
    const [counter, setCounter] = useState (min)

    const maximo = () => {
        counter < max && setCounter (prev => prev + 1)
    }

    const minimo = () => {
        counter > min && setCounter (prev => prev - 1)
    }

    return (
        <div className='counter'>
            <h2>{counter}</h2>
            <button onClick = {maximo}>+</button>
            <button onClick = {minimo}>-</button>
        </div>
    )
}

export default ItemCount
