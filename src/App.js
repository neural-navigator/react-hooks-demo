import React, { useContext, useReducer } from "react";
import ComponentC from "./components/useReducerDemo/ComponentC";
import ComponentA from "./components/useReducerDemo/ComponentA";
import ComponentB from "./components/useReducerDemo/ComponentB";

const initialState = 0;

export const CountContext = React.createContext()

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


function App() {

  const [ count, dispatch ] = useReducer(reducer, initialState)
  
  return (
    <CountContext.Provider value={{ countState: count, countDispath: dispatch }}>
      <div>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
