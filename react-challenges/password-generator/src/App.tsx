import { useEffect, useState } from 'react'
import './App.css'
import { FaRedo } from 'react-icons/fa'
import CheckBox from './components/checkbox'
import Slider from './components/slider'

function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const [useUppercase, setUseUppercase] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSymbols, setUseSymbols] = useState(true)
  const [password, setPassword] = useState('')
  const [passwordStrengthText, setPasswordStrengthText] = useState('Weak')

  useEffect(() => {
    console.log('useEffect')
    generatePassword()
  }, [])

  const generatePasswordStrength = () => {
    let strength = 0
    if (useUppercase) {
      strength += 26
    }
    if (useNumbers) {
      strength += 10
    }
    if (useSymbols) {
      strength += 32
    }
    if (passwordLength >= 8) {
      strength *= passwordLength / 8
    }

    setPasswordStrengthText(strength < 50 ? 'Weak' : strength < 100 ? 'Medium' : 'Strong')
  }

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'

    const symbols = '!@#$%^&*()_+~`|}{[]?><,./-='
    const allChars = lowercase + (useUppercase ? uppercase : '') + (useNumbers ? numbers : '') + (useSymbols ? symbols : '')

    let generatedPassword = ''
    for (let i = 0; i < passwordLength; i++) {
      const index = Math.floor(Math.random() * allChars.length)
      generatedPassword += allChars[index]
    } 

    generatePasswordStrength()
    setPassword(generatedPassword)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1>Password generator</h1>
      <h2>Create strong an secure passwords to keep your accounts safe online.</h2>
      <div className='flex items-center justify-center border shadow-md rounded p-6 gap-6'>
        <form className='flex flex-col gap-6 w-full items-center justify-center'>
          <div className='flex gap-2 w-full'>
            <input readOnly value={password} className='border border-gray-400 rounded w-full p-2 focus:outline-none read-only:bg-gray-200'/>
            <button onClick={
              (e) => {
                e.preventDefault()
                generatePassword()
              }
            } className='w-fit bg-orange-500 hover:border-orange-700 hover:bg-orange-700 focus:ring-orange-300 focus:border-orange-300 focus:bg-orange-300 focus:outline-none'><FaRedo className='fill-slate-50' /></button> 
          </div>
          <Slider label='Password length' min={8} max={100} onChange={
            (value) => {
              setPasswordLength(value)
            }
          }/>
          <div className='flex flex-col gap-2 w-full'>
            <CheckBox label='Use uppercase letters' defaultChecked={useUppercase} onChange={() => setUseUppercase(prev => !prev)}/>
            <CheckBox label='Use numbers' defaultChecked={useNumbers} onChange={() => setUseNumbers(prev => !prev)}/>
            <CheckBox label='Use symbols' defaultChecked={useSymbols} onChange={() => setUseSymbols(prev => !prev)}/>
          </div>
        </form>
      </div>
      <p>
        Password strength: <span className='font-bold'>{passwordStrengthText}</span>
      </p>
    </div>
  )
}

export default App
