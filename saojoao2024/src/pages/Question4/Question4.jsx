import React, { useState } from 'react'; // Importe o React e o useState
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';

const Question4 = () => {
  const [gender, setGender] = useState(null); 
                                                   

  const handleGenederSelected = (event) => { 
    setGender(event.target.value);
  };

  return (
    <div>
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
                onChange={handleGenederSelected}
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
                onChange={handleGenederSelected}
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
                onChange={handleGenederSelected}
              />
              <span>PREFIRO NÃO INFORMAR</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center'>
        <Button>PROXIMA PERGUNTA >></Button>
      </div>
    </div>
  );
};

export default Question4;
