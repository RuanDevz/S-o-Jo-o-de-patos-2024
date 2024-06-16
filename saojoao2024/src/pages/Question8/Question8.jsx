import React,{useContext, useState, useEffect} from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question8 = () => {

  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};


    const [nota, setNota] = useState(null)

    const {setError, feedbacks, setFeedbacks} = useContext(Context)

    
  useEffect(() => {
    setError('')
  },[])
    
    const navigate = useNavigate()

    const handleNotaSelected = (event) =>{
        setNota(event)
    }

    const handleclick = () =>{
      if(!nota){
        setError('Preencha o campo!')
      }else{
        window.scrollTo({top: 0});
        feedbacks.push(nota)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question9')
      }
    }

  return (
    <div style={{zoom: zoom}} className='font-rockwell'>
        <header className='flex justify-center items-center mt-5 2xl:mt-32'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center flex-col gap-0 font-rockwell lg:flex-row lg:gap-40'>
      <h1 className='text-white font-bold text-center py-10 text-2xl lg:max-w-80 lg:text-5xl lg:leading-normal'>Sobre a estrutura do evento você gostou?</h1>
        <section className='lg:text-3xl'>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="gosteimuito">
              <InputCheck
                type='checkbox'
                id='gosteimuito'
                value='GOSTEI MUITO'
                checked={nota === 'GOSTEI MUITO'}
                onChange={() => handleNotaSelected('GOSTEI MUITO')}
              />
              <span>GOSTEI MUITO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="gostei">
              <InputCheck
                type='checkbox'
                id='gostei'
                value='GOSTEI'
                checked={nota === 'GOSTEI'}
                onChange={() => handleNotaSelected('GOSTEI')}
              />
              <span>GOSTEI</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="indiferente">
              <InputCheck
                type='checkbox'
                id='indiferente'
                value='INDIFERENTE'
                checked={nota === 'INDIFERENTE'}
                onChange={() => handleNotaSelected('INDIFERENTE')}
              />
              <span>INDIFERENTE</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="poderiamelhorar">
              <InputCheck
                type='checkbox'
                id='poderiamelhorar'
                value='PODERERIA MELHORAR'
                checked={nota === 'PODERERIA MELHORAR'}
                onChange={() => handleNotaSelected('PODERERIA MELHORAR')}
              />
              <span>PODERERIA MELHORAR</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="naogostei">
              <InputCheck
                type='checkbox'
                id='naogostei'
                value='NÃO GOSTEI'
                checked={nota === 'NÃO GOSTEI'}
                onChange={() => handleNotaSelected('NÃO GOSTEI')}
              />
              <span>NÃO GOSTEI</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center lg:mt-10'>
        <Button onClick={handleclick}>PRÓXIMA PERGUNTA &gt;&gt;&gt; </Button>
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

export default Question8
