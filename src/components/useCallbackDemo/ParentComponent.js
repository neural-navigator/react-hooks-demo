import React, { useState, useCallback } from 'react'
import TitleComponent from './TitleComponent'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

  return (
    <div>
        <TitleComponent />
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>incrementAge</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={incrementSalary}>incrementSalary</Button>
    </div>
  )
}

export default ParentComponent
