import { useState } from 'react'
import './App.css'

function App() {
  const numbers = [1,8,9,11,13,18,20,21,26]
  const [target, setTarget] = useState<number | undefined>()
  const [output, setOutput] = useState<string>('')
  const [completed, setCompleted] = useState<boolean>(false)

  const setValueToCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setTarget(Number(e.target.value))
    }
  }

  const checkForMatch = () => {
    setCompleted(false)
    if (target) {
      setOutput(findMe(target, 0, numbers.length-1))
      setCompleted(true)
    }
  }

  const findMe = (target: number, start: number, end: number): string => {
    if (start > end) {
      return 'Not found'
    }

    const middle = Math.floor( (start + end) / 2)

    if (numbers[middle] === target) {
      return `Found at index ${middle}`
    }

    if (numbers[middle] > target) {
      return findMe(target, start, middle-1)
    }

    if (numbers[middle] < target) {
      return findMe(target, middle+1, end)
    }
    
    return 'Error'
  }

  return (
    <div className='card'>
      <h1>Is a number in a list</h1>
      <label>List: {numbers.map(n => `${n}, `)}</label>
      <label>
        Enter value to find:
        <input onChange={setValueToCheck} />
      </label>
      <button onClick={checkForMatch}>Find</button>
      {!completed && 'Checking....'}
      {completed ? output : ''}
    </div>
  )
}

export default App
