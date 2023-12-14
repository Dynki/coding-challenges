import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [remainingSeconds, setSetRemainingSeconds] = useState<number>(10)
  const intervalRef = useRef<undefined | number>(undefined)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSetRemainingSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (remainingSeconds < 1) {
      clearInterval(intervalRef.current)
    }
  }, [remainingSeconds, intervalRef])

  return (
    <>
      <h1>Number of clicks until timer expires</h1>
      <div className='card'>
        <label>{count}</label>
        <label>Time left: {remainingSeconds} seconds</label>
        {remainingSeconds > 0 && (
          <button onClick={() => setCount(prev => prev + 1)}>+</button>
        )}
      </div>
    </>
  )
}

export default App
