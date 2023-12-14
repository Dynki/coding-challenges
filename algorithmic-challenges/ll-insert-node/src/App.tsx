import { useState } from 'react'
import './App.css'

class Node {
  value: string;
  next: Node | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

function App() {  
  const [insertPosition, setInsertPosition] = useState<number>(0)
  const [head, setHead] = useState<Node>(a)
  const [values, setValues] = useState<{ rawValues: string[], formatted: string }>(getValues(head))
  const [errorMsg, setErrorMsg] = useState<string | undefined>()
  
  function printValues (head: Node | null, values: string[]): string {
    if (head === null) return ''
    values.push(head.value)
    return `${head.value}${head.next === null ? '' : ','} ${printValues(head.next, values)}`
  }

  function getValues(head: Node) {
    const valueArr: string[] = []

    return {
      formatted: printValues(head, valueArr),
      rawValues: valueArr
    }
  }
  
  const performAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if (insertPosition < 0 || insertPosition > values.rawValues.length -1) {

    // }

    const newHead = insert(head, 'I', insertPosition)
    setHead(newHead)
    setValues(getValues(newHead))
  }

  const insert = (head: Node, value: string, index: number): Node => {
    if (index === 0) { 
      // new  head
      const newHead = new Node(value)
      newHead.next = head
      return newHead
    }

    let count = 0
    let current: Node | null = head
    while (current !== null) {
      if (count === index - 1) {
        const next = current.next
        current.next = new Node(value)
        current.next.next = next
      }

      count += 1
      current = current.next
    }

    return head
  }


  return (
    <>
      <h1>Insert a node I at position x</h1>
      <div className='card'>
        <form onSubmit={performAction}>
          <label htmlFor="position">
            Insert position 
            <input 
              id="position" 
              min={0}
              max={values.rawValues.length-1}
              type="number" 
              onChange={(e) => setInsertPosition(parseInt(e.target.value))} 
            />
          </label>
          <button type='submit'>Insert</button>
        </form>
        <h3>{values.formatted}</h3>
      </div>
    </>
  )
}

export default App
