import React from 'react'

const Input = ({type,placeholder,onChange,maxLength,minLength,max, value}) => {
  return (
    <div>
        <input value={value} max={max} minLength={minLength} maxLength={maxLength}  className='w-60 p-3 rounded-3xl text-xl placeholder:text-placeholder font-bold' type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Input