import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import Context from '../../Context/Context'
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question6 = () => {

  const [zoom, setZoom] = useState(0.8)

  const navigate = useNavigate()

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

    const [option, setOption] = useState('')

    const {setError, error, feedbacks, setFeedbacks} = useContext(Context)

    const handleOptionSelected = (e) =>{
        setOption(e)
    }

    const handleclick = () =>{
      if(!option){
        setError('Preencha o campo!')
        setTimeout(() => {
          setError('')
          return
        }, 3000);
      }else{
        feedbacks.push(option)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question7')
      }
      }

  return (
    <div style={{zoom: zoom}} className='font-rockwell'>
      <header className='flex justify-center items-center mt-5'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-center py-2 text-2xl font-rockwell'>O que você mais gostou ?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ATRAÇÕES">
              <InputCheck
                type='checkbox'
                id='ATRAÇÕES'
                value='ATRAÇÕES'
                checked={option === 'ATRAÇÕES'}
                onChange={() => handleOptionSelected('ATRAÇÕES')}
              />
              <span>ATRAÇÕES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ESTRUTURAS">
              <InputCheck
                type='checkbox'
                id='ESTRUTURAS'
                value='ESTRUTURAS'
                checked={option === 'ESTRUTURAS'}
                onChange={() => handleOptionSelected('ESTRUTURAS')}
              />
              <span>ESTRUTURAS</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ATIVAÇÕES">
              <InputCheck
                type='checkbox'
                id='ATIVAÇÕES'
                value='ATIVAÇÕES'
                checked={option === 'ATIVAÇÕES'}
                onChange={() => handleOptionSelected('ATIVAÇÕES')}
              />
              <span>ATIVAÇÕES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ORGANIZAÇÃO">
              <InputCheck
                type='checkbox'
                id='ORGANIZAÇÃO'
                value='ORGANIZAÇÃO'
                checked={option === 'ORGANIZAÇÃO'}
                onChange={() => handleOptionSelected('ORGANIZAÇÃO')}
              />
              <span>ORGANIZAÇÃO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="LIMPEZA">
              <InputCheck
                type='checkbox'
                id='LIMPEZA'
                value='LIMPEZA'
                checked={option === 'LIMPEZA'}
                onChange={() => handleOptionSelected('LIMPEZA')}
              />
              <span>LIMPEZA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="SEGURANÇA">
              <InputCheck
                type='checkbox'
                id='SEGURANÇA'
                value='SEGURANÇA'
                checked={option === 'SEGURANÇA'}
                onChange={() => handleOptionSelected('SEGURANÇA')}
              />
              <span>SEGURANÇA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="BOMBEIROS/SAMU">
              <InputCheck
                type='checkbox'
                id='BOMBEIROS/SAMU'
                value='BOMBEIROS/SAMU'
                checked={option === 'BOMBEIROS/SAMU'}
                onChange={() => handleOptionSelected('BOMBEIROS/SAMU')}
              />
              <span>BOMBEIROS/SAMU</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="BARRACAS">
              <InputCheck
                type='checkbox'
                id='BARRACAS'
                value='BARRACAS,AMBULANTES E BARES'
                checked={option === 'BARRACAS,AMBULANTES E BARES'}
                onChange={() => handleOptionSelected('BARRACAS,AMBULANTES E BARES')}
              />
              <span>BARRACAS,AMBULANTES E BARES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="CENOGRAFIA">
              <InputCheck
                type='checkbox'
                id='CENOGRAFIA'
                value='CENOGRAFIA'
                checked={option === 'CENOGRAFIA'}
                onChange={() => handleOptionSelected('CENOGRAFIA')}
              />
              <span>CENOGRAFIA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ILUMINAÇÃO">
              <InputCheck
                type='checkbox'
                id='ILUMINAÇÃO'
                value='ILUMINAÇÃO'
                checked={option === 'ILUMINAÇÃO'}
                onChange={() => handleOptionSelected('ILUMINAÇÃO')}
              />
              <span>ILUMINAÇÃO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="SOMDOPALCO">
              <InputCheck
                type='checkbox'
                id='SOMDOPALCO'
                value='SOM DO PALCO'
                checked={option === 'SOM DO PALCO'}
                onChange={() => handleOptionSelected('SOM DO PALCO')}
              />
              <span>SOM DO PALCO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ACESSOS">
              <InputCheck
                type='checkbox'
                id='ACESSOS'
                value='ACESSOS (ENTRADAS)'
                checked={option === 'ACESSOS (ENTRADAS)'}
                onChange={() => handleOptionSelected('ACESSOS (ENTRADAS)')}
              />
              <span>ACESSOS (ENTRADAS)</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="BANHEIROS">
              <InputCheck
                type='checkbox'
                id='BANHEIROS'
                value='BANHEIROS'
                checked={option === 'BANHEIROS'}
                onChange={() => handleOptionSelected('BANHEIROS')}
              />
              <span>BANHEIROS</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center mt-3'>
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

export default Question6
