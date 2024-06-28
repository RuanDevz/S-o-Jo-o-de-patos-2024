import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';
import './styles.css';

const Question15 = () => {
  // Reset history state to prevent back navigation
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, '', window.location.href);
  };

  const [zoom, setZoom] = useState(null);
  const [options, setOptions] = useState([]);
  const { setError, feedbacks, setFeedbacks } = useContext(Context);
  const navigate = useNavigate();

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

  useEffect(() => {
    setError('');
  }, []);

  const cantores = [
    'NATTAN',
    'XAND AVIÃO',
    'CALCINHA PRETA',
    'ISABELA FERNANDES',
    'CICINHO LIMA',
    'GUSTTAVO LIMA',
    'BELL MARQUES',
    'MICHELE ANDRADE',
    'HANNY MENDONÇA',
    'RAFAEL DONO'
  ];

  const cantore2 = [
    'À VONTADE (LUAN - RAÍ - ZEZO)',
    'HENRY FREITAS',
    'ZE VAQUEIRO',
    'SANARA',
    'GUSTAVINHO',
    'SIMONE MENDES',
    'FELIPE AMORIM',
    'BIZAY',
    'MARKITO',
    'HÊNIO BARÃO'
  ];

  const cantore3 = [
    'LEONARDO',
    'GUSTAVO MIOTO',
    'DENNIS DJ',
    'ZÉ CANTOR',
    'HUDSHOW'
  ];

  const handleOptionSelected = (option) => {
    if (options.includes(option)) {
      setOptions(options.filter(item => item !== option));
    } else {
      setOptions([...options, option]);
    }
  };

  const handleclick = () => {
    if (options.length === 0) {
      setError('Selecione pelo menos uma opção!');
    } else {
      window.scrollTo({ top: 0 });
      setFeedbacks(prevFeedbacks => [...prevFeedbacks, ...options]);
      console.log(feedbacks);
      navigate('/question16');
    }
  };

  return (
    <div style={{ zoom: zoom }}>
      <header className='flex justify-center items-center mt-5 lg:mt-10 2xl:mt-32 2xl:pb-12'>
        <Logo />
      </header>
      <main className='flex justify-center items-center font-rockwell flex-col gap-0 lg:flex-row lg:justify-center lg:gap-20 mx-1 lg:text-2xl'>
        <h1 className='text-white font-bold text-center py-2 pb-4 text-2xl lg:text-5xl lg:max-w-text5 lg:leading-normal'>
          Quais foram as atrações que você mais gostou?
        </h1>
        <section className='flex flex-col  lg:flex lg:gap-0 lg:flex-col '>
          {cantores.map((cantor, index) => (
            <div key={index}>
              <label className='flex items-center  text-white font-bold' htmlFor={cantor}>
                <InputCheck
                  type='checkbox'
                  id={cantor}
                  value={cantor}
                  checked={options.includes(cantor)}
                  onChange={() => handleOptionSelected(cantor)}
                />
                <span>{cantor}</span>
              </label>
            </div>
          ))}
        </section>
        <section className='flex flex-col  lg:flex lg:gap-0 lg:flex-col'>
          {cantore2.map((cant, index) => (
            <div key={index}>
              <label className='flex items-center ml-[90px]  text-white font-bold' htmlFor={cant}>
                <InputCheck
                  type='checkbox'
                  id={cant}
                  value={cant}
                  checked={options.includes(cant)}
                  onChange={() => handleOptionSelected(cant)}
                />
                <span>{cant}</span>
              </label>
            </div>
          ))}
        </section>
        <section className='flex flex-col mr-[31px]  lg:flex lg:gap-0 lg:flex-col'>
          {cantore3.map((cant3, index) => (
            <div key={index}>
              <label className='flex items-center  text-white font-bold' htmlFor={cant3}>
                <InputCheck
                  type='checkbox'
                  id={cant3}
                  value={cant3}
                  checked={options.includes(cant3)}
                  onChange={() => handleOptionSelected(cant3)}
                />
                <span>{cant3}</span>
              </label>
            </div>
          ))}
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
