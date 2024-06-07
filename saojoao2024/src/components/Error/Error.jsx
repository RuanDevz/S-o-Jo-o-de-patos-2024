import React, { useContext, useState } from 'react'
import Context from '../../Context/Context'

const Error = () => {
    const {error, setError} = useContext(Context)
  return (
    <div>
      {error && <p className='text-2xl text-red-600 font-bold mt-4'>{error}</p>}
    </div>
  )
}

export default Error
