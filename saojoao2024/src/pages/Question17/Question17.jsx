import React from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Question17 = () => {
  return (
    <div>
                  <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col text-center '>
            <h1 className='text-white text-2xl font-bold py-10'>Nome (opcional)</h1>
            <Input type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button>FINALIZAR</Button>
            </div>
        </main>
    </div>
  )
}

export default Question17
