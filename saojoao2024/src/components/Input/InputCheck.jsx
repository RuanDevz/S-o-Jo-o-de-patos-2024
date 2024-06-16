import React from 'react'
import './Inputcheck.css'

const InputCheck = ({id, type, name,onChange, checked}) => {
  return (
    <div>
      <input checked={checked} onChange={onChange} type={type} name={name} id={id} />

    </div>
  )
}

export default InputCheck
