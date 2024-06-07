import React,{useState} from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Question7 = () => {

    const [option, setOption] = useState('')

    const handleOptionSelected = (e) =>{
        setOption(e.target.value)
    }


  return (
    <div>
            <header className='flex justify-center items-center mt-5'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-center py-2 text-2xl'>O que você menos gostou ?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ATRAÇÕES">
              <InputCheck
                type='checkbox'
                id='ATRAÇÕES'
                value='ATRAÇÕES'
                checked={option === 'ATRAÇÕES'}
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                checked={option === '4ORGANIZAÇÃO'}
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
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
                onChange={handleOptionSelected}
              />
              <span>BANHEIROS</span>
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

export default Question7