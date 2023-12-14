import { useEffect, useState } from 'react'
import './App.css'

interface User {
  "id": number,
  "firstName": string,
  "lastName": string,
}

function App() {

  const [users, setUsers] = useState<User[] | undefined>()
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data.users))
  }, [])

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <div className='card'>
        <div className='card'>
          <label htmlFor="filter">
            Search:
            <input type="text" onChange={onChangeValue} />
          </label>
        </div>
        <ul>
          {users && users
            .filter(user => user.firstName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            .map(user => <li>{user.firstName}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
