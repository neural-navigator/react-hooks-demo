import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'

function Counter1() {

    const [ count, increment, decrement, reset ] = useCounter(20)
    
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter1
