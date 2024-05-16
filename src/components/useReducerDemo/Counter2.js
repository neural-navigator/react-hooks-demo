import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + 1}
        case 'decrement':
            return {firstCounter: state.firstCounter - 1}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter2() {
    
    const [ counter, dispatch ] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>{counter.firstCounter}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter2
