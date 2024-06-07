import React, { useContext, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';

const Question4 = () => {
  const [gender, setGender] = useState(null); 
  const navigate = useNavigate()

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const {error, setError, feedbacks, setFeedbacks} = useContext(Context)

  const handleclick = () =>{
    if(!gender){
      setError('Preencha seu gênero')
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }

    feedbacks.push(gender)
    setFeedbacks(feedbacks)
    console.log(feedbacks)

    navigate('/question5')
  }
  

  return (
    <div className='font-rockwell'>
      <header className='flex justify-center items-center mt-14'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-2xl text-center'>Qual seu gênero?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age20">
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
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age20-29">
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
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="age30-39">
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
      <div className='flex justify-center items-center'>
        <Button onClick={handleclick}>PROXIMA PERGUNTA &gt;&gt;&gt;</Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error/>
      </div>
    </div>
  );
};

export default Question4;
