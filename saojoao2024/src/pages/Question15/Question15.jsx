import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';
import './styles.css'

const Question15 = () => {
  // Reset history state to prevent back navigation
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, '', window.location.href);
  };

  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setZoom(0.76);
      } else if (window.innerHeight < 1024) {
        setZoom(0.9);
      } else {
        setZoom(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { setError, feedbacks, setFeedbacks } = useContext(Context);

  useEffect(() => {
    setError('');
  }, []);

  const [options, setOptions] = useState([]);

  const handleOptionSelected = (option) => {
    if (options.includes(option)) {
      setOptions(options.filter(item => item !== option));
    } else {
      setOptions([...options, option]);
    }
  };

  const navigate = useNavigate();

  const handleclick = () => {
    if (options.length === 0) {
      setError('Selecione pelo menos uma opção!');
    } else {
      window.scrollTo({ top: 0 });
      setFeedbacks(prevFeedbacks => [...prevFeedbacks, ...options]);
      console.log(feedbacks)
      navigate('/question16');
    }
  };

  return (
    <div style={{zoom: zoom}}>
      <header className='flex justify-center items-center mt-5 lg:mt-10 2xl:mt-32 2xl:pb-12'>
        <Logo />
      </header>
      <main className='flex justify-center items-center font-rockwell flex-col gap-0 lg:flex-row lg:justify-center lg:gap-20 mx-1 lg:text-2xl'>
        <h1 className='text-white font-bold text-center py-2 pb-4 text-2xl lg:text-5xl lg:max-w-text5 lg:leading-normal'>
          Quais foram as atrações que você mais gostou?
        </h1>
        <section className='flex flex-col  lg:flex lg:gap-0 lg:flex-col '>
          <div>
            <label className='flex items-center  text-white font-bold' htmlFor='NATTAN'>
              <InputCheck
                type='checkbox'
                id='NATTAN'
                value='NATTAN'
                checked={options.includes('NATTAN')}
                onChange={() => handleOptionSelected('NATTAN')}
              />
              <span>NATTAN</span>
            </label>
          </div>
          <div>
            <label className='flex items-center  text-white font-bold' htmlFor='XAND AVIÃO'>
              <InputCheck
                type='checkbox'
                id='XAND AVIÃO'
                value='XAND AVIÃO'
                checked={options.includes('XAND AVIÃO')}
                onChange={() => handleOptionSelected('XAND AVIÃO')}
              />
              <span>XAND AVIÃO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center  text-white font-bold' htmlFor='CALCINHA PRETA'>
              <InputCheck
                type='checkbox'
                id='CALCINHA PRETA'
                value='CALCINHA PRETA'
                checked={options.includes('CALCINHA PRETA')}
                onChange={() => handleOptionSelected('CALCINHA PRETA')}
              />
              <span>CALCINHA PRETA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center  text-white font-bold' htmlFor='ISABELA FERNANDES'>
              <InputCheck
                type='checkbox'
                id='ISABELA FERNANDES'
                value='ISABELA FERNANDES'
                checked={options.includes('ISABELA FERNANDES')}
                onChange={() => handleOptionSelected('ISABELA FERNANDES')}
              />
              <span>ISABELA FERNANDES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center  text-white font-bold' htmlFor='CICINHO LIMA'>
              <InputCheck
                type='checkbox'
                id='CICINHO LIMA'
                value='CICINHO LIMA'
                checked={options.includes('CICINHO LIMA')}
                onChange={() => handleOptionSelected('CICINHO LIMA')}
              />
              <span>CICINHO LIMA</span>
            </label>
          </div>
        </section>
        <section>
        <div>
            <label className='flex items-center my-5  text-white font-bold' htmlFor='GUSTTAVO LIMA'>
              <InputCheck
                type='checkbox'
                id='GUSTTAVO LIMA'
                value='GUSTTAVO LIMA'
                checked={options.includes('GUSTTAVO LIMA')}
                onChange={() => handleOptionSelected('GUSTTAVO LIMA')}
              />
              <span>GUSTTAVO LIMA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center my-5  text-white font-bold' htmlFor='BELL MARQUES'>
              <InputCheck
                type='checkbox'
                id='BELL MARQUES'
                value='BELL MARQUES'
                checked={options.includes('BELL MARQUES')}
                onChange={() => handleOptionSelected('BELL MARQUES')}
              />
              <span>BELL MARQUES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center my-5  text-white font-bold' htmlFor='MICHELE ANDRADE'>
              <InputCheck
                type='checkbox'
                id='MICHELE ANDRADE'
                value='MICHELE ANDRADE'
                checked={options.includes('MICHELE ANDRADE')}
                onChange={() => handleOptionSelected('MICHELE ANDRADE')}
              />
              <span>MICHELE ANDRADE</span>
            </label>
          </div>
          <div>
            <label className='flex items-center my-5  text-white font-bold' htmlFor='HANNY MENDONÇA'>
              <InputCheck
                type='checkbox'
                id='HANNY MENDONÇA'
                value='HANNY MENDONÇA'
                checked={options.includes('HANNY MENDONÇA')}
                onChange={() => handleOptionSelected('HANNY MENDONÇA')}
              />
              <span>HANNY MENDONÇA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center my-5  text-white font-bold' htmlFor='RAFAEL DONO'>
              <InputCheck
                type='checkbox'
                id='RAFAEL DONO'
                value='RAFAEL DONO'
                checked={options.includes('RAFAEL DONO')}
                onChange={() => handleOptionSelected('RAFAEL DONO')}
              />
              <span>RAFAEL DONO</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center mt-2 lg:mt-12'>
        <Button onClick={handleclick}>PRÓXIMA PERGUNTA &gt;&gt;&gt;</Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error />
      </div>
      <div>
        <BalaoESanfona />
      </div>
    </div>
  );
};

export default Question15;
