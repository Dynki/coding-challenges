import { useState } from 'react'
import './App.css'

interface FormElements {
  username: HTMLInputElement;
  fullname: HTMLInputElement;
  age: HTMLInputElement;
}

interface Data {
  username: string;
  fullname: string;
  age: string;
}

function App() {

  const [data, setData] = useState<Data | undefined>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & FormElements
    setData({
      username: formElements.username.value,
      fullname: formElements.fullname.value,
      age: formElements.age.value
    })
  }

  return (
    <>
      <h1>Submit Form Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName:</label>
        <input id="username" /><br />
        <label htmlFor="fullname">FullName:</label>
        <input id="fullname" /><br />
        <label htmlFor="age">Age:</label>
        <input id="age" type='number' /><br />
        <button type='submit'>Submit</button>
      </form>
      <br />
      {data && (
        <>
          <p>Request sent to the DB with data below</p>
          <ul>
            <li>UserName: {data.username}</li>
            <li>FullName: {data.fullname}</li>
            <li>Age: {data.age}</li>
          </ul>
        </>
      )}
    </>
  )
}

export default App
