import { useEffect, useState } from 'react'
import './App.css'
import useDebounce from './hooks/useDebounce'

function App() {
  const [wordCount, setWordCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [sentenceCount, setSentenceCount] = useState(0)
  const [paragraphCount, setParagraphCount] = useState(0)
  const [pronounsCount, setPronounsCount] = useState(0)
  const [inputText, setInputText] = useState('')

  const debouncedInputText = useDebounce<string>(inputText, 500)

  useEffect(() => {
    console.log('debounced text', debouncedInputText)
    if (debouncedInputText && debouncedInputText.length > 0) {
      setWordCount(debouncedInputText.split(' ').length)
      setCharacterCount(debouncedInputText.length)
      setSentenceCount(debouncedInputText.split('.').length)
      setParagraphCount(debouncedInputText.split('\n').filter((paragraph: string) => paragraph.length > 0).length)
      setPronounsCount(debouncedInputText.split('he').length + debouncedInputText.split('she').length + debouncedInputText.split('they').length)
    }
  }, [debouncedInputText])

  const handleTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    setInputText(text)
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center justify-center border shadow-md rounded p-6 gap-6'>
        <div>
          <div className='text-lg font-bold'>Words</div>
          <div>{wordCount}</div>
        </div>
        <div>
          <div className='text-lg font-bold'>Characters</div>
          <div>{characterCount}</div>
        </div>
        <div>
          <div className='text-lg font-bold'>Sentences</div>
          <div>{sentenceCount}</div>
        </div>
        <div>
          <div className='text-lg font-bold'>Paragraphs</div>
          <div>{paragraphCount}</div>
        </div>
        <div>
          <div className='text-lg font-bold'>Pronouns</div>
          <div>{pronounsCount}</div>
        </div>
      </div>
      <div>
          <textarea className='h-[300px] w-full border rounded p-2' value={inputText} onChange={handleTextInput}/>
      </div>
    </div>
  )
}

export default App
