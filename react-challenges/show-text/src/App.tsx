import { useState } from 'react'
import './App.css'

function App() {
  const [text] = useState('Hello Vite + React!')
  const [showText, setShowText] = useState(false)

  return (
    <>
      <h1>Show text with button</h1>
      <div className="card">
        <button onClick={() => setShowText(value => !value)}>
          {showText ? 'Hide text' : 'Show text'}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {showText && <p>{text}</p>}
    </>
  )
}

export default App
