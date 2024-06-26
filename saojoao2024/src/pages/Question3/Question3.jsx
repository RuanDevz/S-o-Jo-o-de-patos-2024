import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context'
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question3 = () => {
  const [ageGroup, setAgeGroup] = useState('');
  const navigate = useNavigate()

  const [zoom, setZoom] = useState(0.9)

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const {error, setError,feedbacks, setFeedbacks} = useContext(Context)

  useEffect(() => {
    setError('')
  },[])

  const handleclick = () =>{
    if(ageGroup === ''){
      setError('Selecione uma faixa etária')
      return
    }

    window.scrollTo({top: 0});

    feedbacks.push(ageGroup)
    setFeedbacks(feedbacks)
    console.log(feedbacks)
    navigate('/question4')
  }
  
  return (
    <div style={{zoom: zoom}} className='font-rockwell'>
      <header className='flex justify-center items-center mt-5 lg:mt-20 pb-5'>
        <Logo/>
      </header>

      <main className='flex justify-center items-center flex-col gap-0 font-rockwell lg:flex-row lg:gap-44'>
      <h1 className='text-white font-bold text-2xl text-center pt-5 lg:text-6xl max-w-96'>Qual a sua faixa etária?</h1>
        <section className=''>
        <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold text-base lg:my-5 lg:text-3xl' 
            htmlFor="age20">
                <InputCheck
                type='checkbox'
                id='age20'
                value='20'
                checked={ageGroup === '20'}
                onChange={() => setAgeGroup('20')}
              />
              <span>ABAIXO DE <span className='text-Orange'>20 ANOS</span></span>
            </label>
          </div>
        <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold text-base lg:my-5 lg:text-3xl' htmlFor="age20-29">
            <InputCheck
                type='checkbox'
                id='age20-29'
                value='20-29'
                checked={ageGroup === '20-29'}
                onChange={() => setAgeGroup('20-29')}
              />
              <span>ENTRE <span className='text-Orange'>20-29 ANOS</span></span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold text-base lg:my-5 lg:text-3xl' htmlFor="age30-39">
              <InputCheck
                type='checkbox'
                id='age30-39'
                value='30-39'
                checked={ageGroup === '30-39'}
                onChange={() => setAgeGroup('30-39')}
              />
              <span>ENTRE <span className='text-Orange'>30-39 ANOS</span></span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold text-base lg:my-5 lg:text-3xl' htmlFor="age40-49">
              <InputCheck
                type='checkbox'
                id='age40-49'
                value='40-49'
                checked={ageGroup === '40-49'}
                onChange={() => setAgeGroup('40-49')}
              />
              <span>ENTRE <span className='text-Orange'>40-49 ANOS</span></span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold text-base lg:my-5 lg:text-3xl' htmlFor="age50-59">
              <InputCheck
                type='checkbox'
                id='age50-59'
                value='50-59'
                checked={ageGroup === '50-59'}
                onChange={() => setAgeGroup('50-59')}
              />
              <span>ENTRE <span className='text-Orange'>50-59 ANOS</span></span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold text-base lg:my-5 lg:text-3xl' htmlFor="age60plus">
              <InputCheck
                type='checkbox'
                id='age60plus'
                value='60+'
                checked={ageGroup === '60+'}
                onChange={() => setAgeGroup('60+')}
              />
              <span>ACIMA DE <span className='text-Orange'>60 ANOS</span></span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center lg:mt-20'>
      <Button onClick={handleclick}>PRÓXIMA PERGUNTA &gt;&gt;&gt;</Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error/>
      </div>
      <div>
          <BalaoESanfona />
      </div>
    </div>
  );
};

export default Question3;
