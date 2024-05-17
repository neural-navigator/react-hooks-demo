import React, {useState, useMemo} from 'react'

function Counter() {

    const [ counter1, setCounter1 ] = useState(0)
    const [ counter2, setCounter2 ] = useState(0)

    const incrementOne = () => {
        setCounter1(prevcount => prevcount + 1)
    }

    const incrementTwo = () => {
        setCounter2(prevCount => prevCount + 1)
    }

    const isEven = useMemo(() => {
        let i=0
        while(i<200000000000) i++
        return counter1%2 === 0
    }, [counter1])

  return (
    <div>
        {counter1} - {counter2}
        <div>
            <button onClick={incrementOne}>Increment 1</button>
            <span>{isEven? 'Even' : 'Odd'}</span>
        </div>
        <div><button onClick={incrementTwo}>Increment 2</button></div>
    </div>
  )
}

export default Counter
