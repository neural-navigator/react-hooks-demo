import React, { useState } from 'react'

function IncrementDecrementCounter() {
  const defaultValue = 0
  const [ count, setCount ] = useState(0)
  const increaseValue = (prevCount) => {setCount(prevCount => prevCount+1)}
  const decreaseValue = (prevCount) => {setCount(prevCount => prevCount-1)}
  const resetValue = () => {setCount(defaultValue)}
  const incrementFive = () => {
    for(let i=0; i<5; i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      Count: {count}
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={incrementFive}>add 5</button>
    </div>
  )
}

export default IncrementDecrementCounter
