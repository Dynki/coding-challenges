import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState<Array<string>>([])
  const [text, setText] = useState<string>()

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const addItem = () => {
    if (text) {
      setList(prev => [...prev, text])
      setText('')
    }
  }

  const deleteItem = (idxToRemove: number) => {
    setList(list.filter((_value, idx) => idx != idxToRemove))
  }

  return (
    <>
      <div>
        <input onChange={onChangeText} value={text}/>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {list.map((listItem, idx) => {
          return (
            <li key={listItem+idx}>
              <div>{listItem}</div>
              <button onClick={() => deleteItem(idx)}>X</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
