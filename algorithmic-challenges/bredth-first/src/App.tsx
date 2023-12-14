import { useState } from 'react'
import './App.css'

class Node {
  value: string;
  left: Node | null;
  right: Node | null;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

function App() {
  const [result, setResult] = useState<string | undefined>()
  const [searchValue, setSearchValue] = useState<string>('')

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchValue(e.target.value)
    }
  }


  const search = () => {
    setResult(bfs(a, searchValue) ? 'Found' : 'Not Found')
  }

  const bfs = (root: Node, target: string) => {
    const queue = [root]

    while (queue.length > 0) {
      const curr = queue.shift()

      if (curr?.value === target) return true

      if (curr && curr.left !== null) {
        queue.push(curr.left)
      }

      if (curr && curr.right !== null) {
        queue.push(curr.right)
      }
    }

    return false
  }

  return (
    <div className='card'>
      <h1>Bredth First Search</h1>
      <label htmlFor='searchValue'>
        Search For
        <input id="searchValue" onChange={onChangeSearchValue}/>
      </label>
      <br />
      <button onClick={search}>Search</button>
      <br />
      {result && result}
    </div>
  )
}

export default App
