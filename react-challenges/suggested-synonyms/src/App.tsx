import { useState } from 'react'
import './App.css'
import { useSynonyms } from './hooks/useSynonyms'

function App() {

  const [word, setWord] = useState<string>('')
  const { isLoading, synonyms, getSynonyms } = useSynonyms()

  const handleSubmitWord = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getSynonyms(word)
  }

  const changeWord = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => { 
    const newWord = event.currentTarget.innerText
    setWord(newWord)
    getSynonyms(newWord)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-10 w-full h-full'> 
      <form onSubmit={handleSubmitWord} className='flex flex-col justify-center border rounded-lg border-solid border-1 border-orange-300 p-10 gap-2 max-w-fit'>
        <div className='flex items-center gap-2'>
          <label htmlFor='word' className='block mb-2 font-medium text-gray-900 dark:text-white whitespace-nowrap'>Your word</label>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type='text' id='word' value={word} onChange={(event) => setWord(event.target.value)} />
        </div>
        <button type='submit' className='bg-orange-500 text-white focus:outline-none hover:ring hover:ring-violet-300 '>Submit</button>
      </form>
      {isLoading ? <p>Loading...</p> 
      :
        <ul className='grid grid-cols-5 gap-2'>
          {synonyms.map((synonym, index) => (
            <li key={index} onClick={changeWord} className='cursor-pointer hover:bg-gray-400 rounded hover:text-white'>{synonym}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default App
