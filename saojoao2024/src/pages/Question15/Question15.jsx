import React, { useContext, useState, useEffect } from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question15 = () => {

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

const [zoom, setZoom] = useState(null)

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setZoom(0.76);
    } else if(window.innerHeight < 1024) {
      setZoom(0.9); 
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


    const [option, setOption] = useState('')
    const navigate = useNavigate()
    const {setError, feedbacks, setFeedbacks} = useContext(Context)

    
  useEffect(() => {
    setError('')
  },[])

    const handleOptionSelected = (event) =>{
        setOption(event)
    }

    const handleclick = () =>{
      if (!option) {
        setError('Preencha o campo!');
      }else{
        window.scrollTo({top: 0});
        feedbacks.push(option)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question16')
      }
    }

  return (
    <div>
       <header className='flex justify-center items-center mt-5 lg:mt-10 2xl:mt-32 2xl:pb-12'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center font-rockwell flex-col gap-0 lg:flex-row lg:justify-center lg:gap-20 mx-1 lg:text-2xl'>
      <h1 className='text-white font-bold text-center py-2 pb-4 text-2xl lg:text-5xl lg:max-w-text5 lg:leading-normal	'>Quais foram as atrações que você mais gostou?</h1>
        <section className='my-1 flex flex-col gap-7 lg:flex lg:gap-0 lg:flex-col '>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="NATTAN">
              <InputCheck
                type='checkbox'
                id='NATTAN'
                value='NATTAN'
                checked={option === 'NATTAN'}
                onChange={() => handleOptionSelected('NATTAN')}
              />
              <span>NATTAN</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="XAND AVIÃO">
              <InputCheck
                type='checkbox'
                id='XAND AVIÃO'
                value='XAND AVIÃO'
                checked={option === 'XAND AVIÃO'}
                onChange={() => handleOptionSelected('XAND AVIÃO')}
              />
              <span>XAND AVIÃO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="CALCINHA PRETA">
              <InputCheck
                type='checkbox'
                id='CALCINHA PRETA'
                value='CALCINHA PRETA'
                checked={option === 'CALCINHA PRETA'}
                onChange={() => handleOptionSelected('CALCINHA PRETA')}
              />
              <span>CALCINHA PRETA</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="ISABELA FERNANDES">
              <InputCheck
                type='checkbox'
                id='ISABELA FERNANDES'
                value='ISABELA FERNANDES'
                checked={option === 'ISABELA FERNANDES'}
                onChange={() => handleOptionSelected('ISABELA FERNANDES')}
              />
              <span>ISABELA FERNANDES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-3 text-white font-bold' htmlFor="CICINHO LIMA">
              <InputCheck
                type='checkbox'
                id='CICINHO LIMA'
                value='CICINHO LIMA'
                checked={option === 'CICINHO LIMA'}
                onChange={() => handleOptionSelected('CICINHO LIMA')}
              />
              <span>CICINHO LIMA</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center mt-2 lg:mt-12'>
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

export default Question15
