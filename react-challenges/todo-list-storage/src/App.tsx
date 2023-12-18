import { useState } from 'react'
import './App.css'
import { useTodoList } from './hooks/useTodoList'

function App() {

  const { items, addItem, removeItem, toggleCompleted } = useTodoList()
  const [newTitle, setNewTitle] = useState<string>('')

  const onSetNewTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setNewTitle(e.target.value)
    }
  }

  const submitNewItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addItem({ 
      id: Math.floor((Math.random() * 100000) + 1).toString(),
      title: newTitle,
      completed: false
    })
  }

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item.id)}>X</button>
            <div>{item.title}</div>
            <input type="checkbox" checked={item.completed} onChange={() => toggleCompleted(item.id, !item.completed)}/>
          </li>
        ))}
      </ul>
      <form onSubmit={submitNewItem}>
        <label htmlFor="newItem">
          <input type="text" id="newItem" onChange={onSetNewTitle} />
        </label>
        <button>Add</button>
      </form>

    </>
  )
}

export default App
