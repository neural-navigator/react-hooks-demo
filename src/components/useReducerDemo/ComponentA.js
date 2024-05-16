import React, {useContext} from 'react'
import { CountContext } from '../../App'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
        <h1>Component A - {countContext.countState}</h1>
      <button onClick={() => countContext.countDispath('increment')}>Increment</button>
      <button onClick={() => countContext.countDispath('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispath('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
