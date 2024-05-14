import React from 'react'
import { useState } from 'react'



function Counter() {
    const [ count, setCounter ] = useState(0)
    const clickHandler = () => {
        setCounter(count + 1)
    }
  return (
    <div>
      <button onClick={clickHandler}>Clicked {count} times</button>
    </div>
  )
}

export default Counter
