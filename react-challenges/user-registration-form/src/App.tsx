import { useState } from 'react'
import './App.css'

function App() {
  const [userDetails, setUserDetails] = useState<object>({})

  const onChangeFormValues = (e: React.ChangeEvent<HTMLFormElement>) => {
    setUserDetails(prev => ({...prev, [e.target.id]: e.target.value}))
    // console.log(`${e.target.id} : ${e.target.value}`, e.target)
  }

  const onSubmitValues = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userDetails)

    setTimeout(() => {
      alert('User details sumitted successfully')
    }, 2000)
  }

  return (
    <>
      <h1>User Registration Form</h1>
      <form onSubmit={onSubmitValues} onChange={onChangeFormValues} className='card'>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            pattern="[0-9a-zA-z]{4,8}" title="Please enter a password between 4 & 8 characters with no special characters"
            required
          />
        </div>
        <button>Submit</button>          
      </form>
    </>
  )
}

export default App
