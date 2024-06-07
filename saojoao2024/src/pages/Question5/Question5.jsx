import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Question5 = () => {
    const [nota, setNota] = useState(null)

    const handleNotaSelected = (e) =>{
        setNota(e.target.value)
    }
  return (
    <div>
       <header className='flex justify-center items-center mt-5'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-center text-base py-2'>De 1 a 5 quanto você ficou satisfeito com o São João de Patos 2024</h1>
      <p className='text-xs text-center'><span className='text-Ocean font-bold'>1 PARA POUCO SATISFEITO</span><span className='text-Orange font-bold'> 5 PARA MUITO SATISFEITO</span></p>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age20">
              <InputCheck
                type='checkbox'
                id='one'
                value='1'
                checked={nota === '1'}
                onChange={handleNotaSelected}
              />
              <span>1</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age20-29">
              <InputCheck
                type='checkbox'
                id='two'
                value='2'
                checked={nota === '2'}
                onChange={handleNotaSelected}
              />
              <span>2</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age30-39">
              <InputCheck
                type='checkbox'
                id='three'
                value='3'
                checked={nota === '3'}
                onChange={handleNotaSelected}
              />
              <span>3</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age30-39">
              <InputCheck
                type='checkbox'
                id='four'
                value='4'
                checked={nota === '4'}
                onChange={handleNotaSelected}
              />
              <span>4</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age30-39">
              <InputCheck
                type='checkbox'
                id='five'
                value='5'
                checked={nota === '5'}
                onChange={handleNotaSelected}
              />
              <span>5</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center'>
        <Button>PROXIMA PERGUNTA >>></Button>
      </div>
    </div>
  )
}

export default Question5
