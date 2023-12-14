import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'

type CheckBoxProps = {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  label: string
}

const CheckBox = (props: CheckBoxProps) => {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
      setChecked(props.defaultChecked ?? false)
    }, [props.defaultChecked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked
      setChecked(checked)
      props.onChange?.(checked) 
    }

    return (
      <div className='flex flex-col gap-2'>
        <label className='flex items-center justify-start gap-3 hover:font-bold cursor-pointer' >
          <input hidden type='checkbox' checked={checked} onChange={handleChange}/>
          <div className='border p-2 w-fit min-w-[35px] min-h-[35px] cursor-pointer'>{checked ? <FaCheck className='fill-orange-700'/>: <></>}</div>
          <span>{props.label}</span>
        </label>
      </div>
    )
}

export default CheckBox
