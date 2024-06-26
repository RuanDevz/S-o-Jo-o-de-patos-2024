import React,{useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question12 = () => {

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

    const [option, setOption] = useState(null);
    const navigate = useNavigate()
  
    const handleOptionSelection = (event) => {
        setOption(event);
    };
  
    const {setError, feedbacks, setFeedbacks} = useContext(Context)

    
  useEffect(() => {
    setError('')
  },[])
  
    const handleclick = () =>{
      if(!option){
        setError('Preencha o campo!')
      }else{
        window.scrollTo({top: 0});
        feedbacks.push(option)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question13')
      }
    }


  return (
    <div>
            <header className='flex justify-center items-center mt-5 2xl:mt-32'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center flex-col gap-0 font-rockwell lg:flex-row lg:gap-32'>
      <h1 className='text-white font-bold text-2xl text-center pt-3 lg:text-5xl lg:leading-normal lg:max-w-72'>Sobre suas expectativas em relação ao São João</h1>
        <section className='lg:text-3xl'>
        <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' 
            htmlFor="SUPEROUASEXPECTATIVAS">
                <InputCheck
                type='checkbox'
                id='SUPEROUASEXPECTATIVAS'
                value='SUPEROU AS EXPECTATIVAS'
                checked={option === 'SUPEROU AS EXPECTATIVAS'}
                onChange={() => handleOptionSelection('SUPEROU AS EXPECTATIVAS')}
              />
              <span>SUPEROU AS EXPECTATIVAS</span>
            </label>
          </div>
        <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="ATENDEUPLENAMENTE">
            <InputCheck
                type='checkbox'
                id='ATENDEUPLENAMENTE'
                value='ATENDEU PLENAMENTE'
                checked={option === 'ATENDEU PLENAMENTE'}
                onChange={() => handleOptionSelection('ATENDEU PLENAMENTE')}
              />
              <span>ATENDEU PLENAMENTE</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="ATENDEUEMPARTES">
              <InputCheck
                type='checkbox'
                id='ATENDEUEMPARTES'
                value='ATENDEU EM PARTES'
                checked={option === 'ATENDEU EM PARTES'}
                onChange={() => handleOptionSelection('ATENDEU EM PARTES')}
              />
              <span>ATENDEU EM PARTES</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="INDIFERENTE">
              <InputCheck
                type='checkbox'
                id='INDIFERENTE'
                value='INDIFERENTE'
                checked={option === 'INDIFERENTE'}
                onChange={() => handleOptionSelection('INDIFERENTE')}
              />
              <span>INDIFERENTE</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="NÃOATENDEUASEXPECTATIVAS">
              <InputCheck
                type='checkbox'
                id='NÃOATENDEUASEXPECTATIVAS'
                value='NÃO ATENDEU AS EXPECTATIVAS'
                checked={option === 'NÃO ATENDEU AS EXPECTATIVAS'}
                onChange={() => handleOptionSelection('NÃO ATENDEU AS EXPECTATIVAS')}
              />
              <span>NÃO ATENDEU AS EXPECTATIVAS</span>
            </label>
          </div>
        </section>
      </main>
    <div className='flex justify-center items-center lg:mt-12'>
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

export default Question12
