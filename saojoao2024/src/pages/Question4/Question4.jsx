import React, { useContext, useState,useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question4 = () => {
  const [gender, setGender] = useState(null); 
  const navigate = useNavigate()

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const {error, setError, feedbacks, setFeedbacks} = useContext(Context)
  useEffect(() => {
    setError('')
  },[])

  const handleclick = () =>{
    if(!gender){
      setError('Preencha seu gênero')
      return
    }

    window.scrollTo({top: 0});

    feedbacks.push(gender)
    setFeedbacks(feedbacks)
    console.log(feedbacks)

    navigate('/question5')
  }
  

  return (
    <div className='font-rockwell'>
      <header className='flex justify-center items-center pb-0 mt-14 lg:mt-10 lg:pb-20'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center flex-col gap-0 font-rockwell lg:flex-row lg:gap-64'>
      <h1 className='text-white font-bold text-2xl text-center py-5 lg:max-w-96 lg:text-6xl'>Qual seu gênero?</h1>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold text-base lg:text-3xl lg:my-5' htmlFor="age20">
              <InputCheck
                type='checkbox'
                id='age20'
                value='20'
                checked={gender === 'MULHER'}
                onChange={() => setGender('MULHER')}
              />
              <span>MULHER</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold text-base lg:text-3xl lg:my-5' htmlFor="age20-29">
              <InputCheck
                type='checkbox'
                id='age20-29'
                value='20-29'
                checked={gender === 'HOMEM'}
                onChange={() => setGender('HOMEM')}
              />
              <span>HOMEM</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold text-base lg:text-3xl lg:my-5' htmlFor="age30-39">
              <InputCheck
                type='checkbox'
                id='age30-39'
                value='30-39'
                checked={gender === 'PREFIRO NÃO INFORMAR'}
                onChange={() => setGender('PREFIRO NÃO INFORMAR')}
              />
              <span>PREFIRO NÃO INFORMAR</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center lg:mt-40'>
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

export default Question4;
