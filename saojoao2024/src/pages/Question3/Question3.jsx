import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context'
import Error from '../../components/Error/Error';

const Question3 = () => {
  const [ageGroup, setAgeGroup] = useState('');
  const navigate = useNavigate()

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const {error, setError,feedbacks, setFeedbacks} = useContext(Context)

  const handleclick = () =>{
    if(ageGroup === ''){
      setError('Selecione uma faixa etária')
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }

    feedbacks.push(ageGroup)
    setFeedbacks(feedbacks)
    console.log(feedbacks)
    navigate('/question4')
  }
  
  return (
    <div className='font-rockwell'>
      <header className='flex justify-center items-center mt-1'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-2xl text-center'>Qual a sua faixa etária?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
        <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' 
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
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="age20-29">
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
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="age30-39">
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
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="age40-49">
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
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="age50-59">
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
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="age60plus">
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
      <div className='flex justify-center items-center'>
      <Button onClick={handleclick}>PROXIMA PERGUNTA &gt;&gt;&gt;</Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error/>
      </div>
    </div>
  );
};

export default Question3;
