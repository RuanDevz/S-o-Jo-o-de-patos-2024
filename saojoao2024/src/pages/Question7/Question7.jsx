import React,{useContext, useState, useEffect} from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error'
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question7 = () => {

  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setZoom(0.76);
      } else if(window.innerHeight < 1024) {
        setZoom(0.89); 
      }else{
        setZoom(1)
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const navigate = useNavigate()

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

    const [option, setOption] = useState('')

    const {setError, error, feedbacks, setFeedbacks} = useContext(Context)
    
  useEffect(() => {
    setError('')
  },[])

    const handleOptionSelected = (e) =>{
        setOption(e)
    }

    const handleclick = () =>{
      if(!option){
        setError('Preencha o campo!')
      }else{
        window.scrollTo({top: 0});
        feedbacks.push(option)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question8')
      }
      }

  return (
    <div style={{zoom: zoom}} className='font-rockwell'>
      <header className='flex justify-center items-center mt-5 lg:pb-10 2xl:mt-40'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center font-rockwell flex-col gap-0 lg:flex-row lg:justify-center lg:gap-20 mx-1'>
      <h1 className='text-white font-bold text-center py-2 text-2xl font-rockwell lg:text-6xl max-w-text lg:ml-1'>O que você menos gostou ?</h1>
        <section className='mr-40   lg:flex flex-col'>
          <div>
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="ATRAÇÕES">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="ESTRUTURAS">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="ATIVAÇÕES">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="ORGANIZAÇÃO">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="LIMPEZA">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="SEGURANÇA">
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
        </section>
        <section className=''>
        <div>
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="BOMBEIROS/SAMU">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="BARRACAS">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="CENOGRAFIA">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="ILUMINAÇÃO">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="SOMDOPALCO">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="ACESSOS">
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
            <label className='flex items-center gap-5 my-3 text-base text-white font-bold lg:text-2xl' htmlFor="BANHEIROS">
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
      <div className='flex justify-center items-center mt-3 lg:mt-20'>
        <Button onClick={handleclick}>PRÓXIMA PERGUNTA &gt;&gt;&gt;</Button>
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

export default Question7
