import React from 'react'

const InputLarge = ({type,placeholder,onChange,maxLength,minLength,max, value}) => {
  return (
    <div>
      <input value={value} max={max} minLength={minLength} maxLength={maxLength}  className='w-96 p-3 rounded-3xl text-2xl placeholder:text-placeholder font-bold' type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputLarge
