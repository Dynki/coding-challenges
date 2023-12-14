import { useState } from 'react'
import './App.css'

function App() {
  const [percentage, setPercentage] = useState<number>(10)

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(e.target.value))
  }

  return (
    <>
      <h1>Progress Bar</h1>
      {percentage >0 && percentage <=100 ?
        <div className='bar'>
          <div style={{ width: `${percentage}%` }}>{percentage}</div>
        </div>
        :
        <h2>Please enter a value between 0 and 100</h2>
      }
      <input type='number' min={0} max={100} onChange={onChangeValue} />
    </>
  )
}

export default App
