import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question15 = () => {

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};


    const [option, setOption] = useState('')
    const navigate = useNavigate()
    const {setError, feedbacks, setFeedbacks} = useContext(Context)

    const handleOptionSelected = (event) =>{
        setOption(event)
    }

    const handleclick = () =>{
      if (!option) {
        setError('Preencha o campo!');
        setTimeout(() => {
          setError('');
        }, 3000);
        return;
      }else{
        feedbacks.push(option)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question16')
      }
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
                onChange={() => handleOptionSelected('NATTAN')}
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
                onChange={() => handleOptionSelected('XAND AVIÃO')}
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
                onChange={() => handleOptionSelected('GUSTAVO LIMA')}
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
                onChange={() => handleOptionSelected('4BELL MARQUES')}
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
                onChange={() => handleOptionSelected('MICHELLE ANDRADE')}
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
                onChange={() => handleOptionSelected('A VONTADE')}
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
                onChange={() => handleOptionSelected('HENRY FREITAS')}
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
                onChange={() => handleOptionSelected('ZÉ VAQUEIRO')}
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
                onChange={() => handleOptionSelected('SIMONE MENDES')}
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
                onChange={() => handleOptionSelected('FELIPE AMORIM')}
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
                onChange={() => handleOptionSelected('BIZAY')}
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
                onChange={() => handleOptionSelected('DENNIS DJ')}
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
                onChange={() => handleOptionSelected('ZÉ CANTOR')}
              />
              <span>ZÉ CANTOR</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center'>
        <Button onClick={handleclick}>PROXIMA PERGUNTA &gt;&gt;&gt;</Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error/>
      </div>
      <div>
          <BalaoESanfona />
      </div>
    </div>
  )
}

export default Question15
