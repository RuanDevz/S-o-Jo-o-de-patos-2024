import React from 'react'
import './input.css'


const Input = ({type,placeholder,onChange,maxLength,minLength,max, value}) => {



  return (
    <div>
        <input id='inputstart' value={value} max={max} minLength={minLength} maxLength={maxLength}  className='w-60 p-3 rounded-3xl text-xl placeholder:text-placeholder font-bold focus:outline-none' type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input