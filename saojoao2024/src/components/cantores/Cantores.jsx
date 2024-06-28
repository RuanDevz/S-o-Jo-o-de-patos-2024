import React from 'react'

const Cantores = ({label,checked}) => {
  return (
    <div>
      <label className='flex items-center  text-white font-bold' htmlFor={label}>{label}</label>
      <input checked={checked} id={label} {...props} type="checkbox" />
    </div>
  )
}

export default Cantores
