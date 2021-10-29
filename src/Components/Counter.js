import React, {useState} from "react"
import './Counter.css'

const Counter = () => {

     const [count, setCount] = useState(0)


     const valueChangeHandlerPlus = () => {
        setCount((prevCount) => {return prevCount+1})
    }

    const valueChangeHandlerMinus = () => {
        setCount((prevCount) => {return prevCount-1})
    }

    return (
        <div className="counter">
          <button type='button' className='btn' onClick={valueChangeHandlerPlus}>+</button> 
         <h2 className='count'>{count}</h2>
         <button type='button' className='btn' onClick={valueChangeHandlerMinus}>-</button>   
        </div>
    )
}

export default Counter;