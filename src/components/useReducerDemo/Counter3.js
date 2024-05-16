import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter3() {
    
    const [ counter, dispatch ] = useReducer(reducer, initialState)
    const [ counter2, dispatch2 ] = useReducer(reducer, initialState)

  return (
    <>
    <div>
        <h1>{counter}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
    <div>
    <h1>{counter2}</h1>
        <button onClick={() => dispatch2('increment')}>Increment</button>
        <button onClick={() => dispatch2('decrement')}>Decrement</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
    </>
  )
}

export default Counter3
