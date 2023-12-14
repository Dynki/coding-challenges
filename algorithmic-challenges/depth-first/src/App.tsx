import { useState } from 'react'
import './App.css'

class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3)
const b = new Node(2)
const c = new Node(7)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(5)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

function App() {
  const [total, setTotal] = useState<number | undefined>()

  const depthFirstSum = (root: Node | null): number => {
    if (root === null) return 0

    const left = depthFirstSum(root.left)
    const right = depthFirstSum(root.right)

    return root.value + left + right
  } 

  const sumValues = () => {
    setTotal(depthFirstSum(a))
  }

  return (
    <>
      <h1>Depth First Traversal - Sum of all Numbers</h1>
      <div className='card'>
        <button onClick={sumValues}>Sum</button>
        <div>{total ? total : ''}</div>
      </div>
    </>
  )
}

export default App
