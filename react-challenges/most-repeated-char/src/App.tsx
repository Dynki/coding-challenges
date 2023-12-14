import { useCallback, useEffect, useState } from 'react'
import './App.css'


function App() {
  const [testString] = useState('AA0AB0BB0ccc0aa0aw00wo0BBBw123123')
  const [mostRepeatedChar, setMostRepeatedChar] = useState('')

  const determineMostRepeated = useCallback((testString: string) => {
    const charsMap: { [key: string]: number } = {}
    let highest: { char: string, count: number } = { char: '', count: 0 };

    // strip out non alpha chars
    // split the string
    const alphaChars = testString.replaceAll(/[0-9]/g, '').split('')

    // loop through remaining chars
    // map char with count
    alphaChars.forEach(char => {
      charsMap[char] = (charsMap[char] | 0) + 1

      if (charsMap[char] > highest.count) {
        highest = { char, count: charsMap[char] }
      }
    })

    // set output
    setMostRepeatedChar(highest.char)
  }, [])

  useEffect(() => {
    determineMostRepeated(testString)
  }, [testString, determineMostRepeated])

  return (
    <>
      <div>
        Most repeated char is: {mostRepeatedChar}
      </div>
    </>
  )
}

export default App
