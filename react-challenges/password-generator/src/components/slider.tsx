import { useState } from "react"

type SliderProps = {
  label: string
  min: number
  max: number
  onChange?: (value: number) => void
}

const Slider = (props: SliderProps) => {
    const [value, setValue] = useState(8)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value)
      setValue(value)
      props.onChange?.(value)
    }

    return (
      <div>
        <label htmlFor='password-length'>{props.label}: {value}</label>
        <input type="range" min="8" max="40" value={value} onChange={handleChange} 
          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500
          '
        />
      </div>
    )
}

export default Slider