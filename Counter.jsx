import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrememt = () => {
        setCount(count > 0 ? count - 1 : 0);
    }

    const handleReset = () => {
        setCount(0);
    }
  return (
    <div className='counter-app'>
      <h2 className='header'>React Counter App</h2>
      <h3 className='count'>{count}</h3>
      <button onClick={handleIncrement} className='btn-add'>Add</button>
      <button onClick={handleReset} className='btn-reset'>Reset</button>
      <button onClick={handleDecrememt} className='btn-subtract'>Subtract</button>
    </div>
  )
}

export default Counter
