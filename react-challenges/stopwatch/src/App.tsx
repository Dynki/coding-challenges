import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState<number>(0)
  const [timerOn, setTimerOn] = useState<boolean>(false)

  useEffect(() => {
    let interval: number | undefined = undefined;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  const reset = () => {
    setTimerOn(false);
    setTime(0);
  }

  return (
    <>
      <h1>Timer</h1>
      <div>{`${Math.floor(time / 60)} mins ${Math.floor(time % 60)} secs`}</div>
      <div className="card">
        <button className='start-button' onClick={() => setTimerOn(true)}>Start</button>
        <button className='stop-button' onClick={() => setTimerOn(false)}>Stop</button>
        <button className='reset-button' onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
