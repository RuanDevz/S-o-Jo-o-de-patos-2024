import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Question15 = () => {

    const [option, setOption] = useState('')

    const handleOptionSelected = (e) =>{
        setOption(e.target.value)
    }

  return (
    <div>
       <header className='flex justify-center items-center mt-5'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-center py-2 text-2xl'>O que você mais gostou ?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="NATTAN">
              <InputCheck
                type='checkbox'
                id='NATTAN'
                value='NATTAN'
                checked={option === 'NATTAN'}
                onChange={handleOptionSelected}
              />
              <span>NATTAN</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="XAND AVIÃO">
              <InputCheck
                type='checkbox'
                id='XAND AVIÃO'
                value='XAND AVIÃO'
                checked={option === 'XAND AVIÃO'}
                onChange={handleOptionSelected}
              />
              <span>XAND AVIÃO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="GUSTAVO LIMA">
              <InputCheck
                type='checkbox'
                id='GUSTAVO LIMA'
                value='GUSTAVO LIMA'
                checked={option === 'GUSTAVO LIMA'}
                onChange={handleOptionSelected}
              />
              <span>GUSTAVO LIMA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="BELL MARQUES">
              <InputCheck
                type='checkbox'
                id='BELL MARQUES'
                value='BELL MARQUES'
                checked={option === '4BELL MARQUES'}
                onChange={handleOptionSelected}
              />
              <span>BELL MARQUES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="MICHELLE ANDRADE">
              <InputCheck
                type='checkbox'
                id='MICHELLE ANDRADE'
                value='MICHELLE ANDRADE'
                checked={option === 'MICHELLE ANDRADE'}
                onChange={handleOptionSelected}
              />
              <span>MICHELLE ANDRADE</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="A VONTADE">
              <InputCheck
                type='checkbox'
                id='A VONTADE'
                value='A VONTADE'
                checked={option === 'A VONTADE'}
                onChange={handleOptionSelected}
              />
              <span>A VONTADE (RAÍ, LUAN E ZEZO)</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="HENRY FREITAS">
              <InputCheck
                type='checkbox'
                id='HENRY FREITAS'
                value='HENRY FREITAS'
                checked={option === 'HENRY FREITAS'}
                onChange={handleOptionSelected}
              />
              <span>HENRY FREITAS</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ZEVAQUEIRO">
              <InputCheck
                type='checkbox'
                id='ZEVAQUEIRO'
                value='ZÉ VAQUEIRO'
                checked={option === 'ZÉ VAQUEIRO'}
                onChange={handleOptionSelected}
              />
              <span>ZÉ VAQUEIRO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="SIMONE MENDES">
              <InputCheck
                type='checkbox'
                id='SIMONE MENDES'
                value='SIMONE MENDES'
                checked={option === 'SIMONE MENDES'}
                onChange={handleOptionSelected}
              />
              <span>SIMONE MENDES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="FELIPE AMORIM">
              <InputCheck
                type='checkbox'
                id='FELIPE AMORIM'
                value='FELIPE AMORIM'
                checked={option === 'FELIPE AMORIM'}
                onChange={handleOptionSelected}
              />
              <span>FELIPE AMORIM</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="FELIPEAMORIM">
              <InputCheck
                type='checkbox'
                id='FELIPEAMORIM'
                value='BIZAY'
                checked={option === 'BIZAY'}
                onChange={handleOptionSelected}
              />
              <span>BIZAY</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="DENNIS DJ">
              <InputCheck
                type='checkbox'
                id='DENNIS DJ'
                value='DENNIS DJ'
                checked={option === 'DENNIS DJ'}
                onChange={handleOptionSelected}
              />
              <span>DENNIS DJ</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ZECANTOR">
              <InputCheck
                type='checkbox'
                id='ZECANTOR'
                value='ZÉ CANTOR'
                checked={option === 'ZÉ CANTOR'}
                onChange={handleOptionSelected}
              />
              <span>ZÉ CANTOR</span>
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

export default Question15
