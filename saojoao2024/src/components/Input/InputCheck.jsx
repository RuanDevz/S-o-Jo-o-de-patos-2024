import React from 'react'
import './Inputcheck.css'

const InputCheck = ({id, type, name,onChange}) => {
  return (
    <div>
      <input onChange={onChange} type={type} name={name} id={id} />

    </div>
  )
}

export default InputCheck
