import React from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Question2 = () => {
  return (
    <div>
              <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col '>
            <h1 className='text-white text-2xl font-bold py-10'>Qual a sua cidade?</h1>
            <Input type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button>PROXIMA PERGUNTA >>></Button>
            </div>
        </main>
    </div>
  )
}

export default Question2
