import { useState } from 'react'
import './ShowCount.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrementOfNumber = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleDecreaseOfNumber = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className='counterDiv'>
      <p className='counterValue'>You clicked here {count} time</p>
      <button
        className='counterButtonSub counterButton'
        onClick={handleDecreaseOfNumber}
      >
        Subtract
      </button>
      <button
        className='counterButtonAdd counterButton'
        onClick={handleIncrementOfNumber}
      >
        Add
      </button>
      <button
        className='counterButtonReset counterButton'
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
//1. nombre = (something like const x)
//2 setNombre = (setting function, it allows us to mutate the value of the state)
//3. Use the state in a React Hook which we import, or use React.useState if we had imported React
