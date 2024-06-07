import React from 'react'
import './Inputcheck.css'

const InputCheck = ({id, type, name}) => {
  return (
    <div>
      <input type={type} name={name} id={id} />

    </div>
  )
}

export default InputCheck
