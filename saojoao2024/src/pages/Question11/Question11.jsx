import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';

const Question11 = () => {

    const [option, setOption] = useState(null);
    const navigate = useNavigate()
  
    const handleOptionSelection = (event) => {
        setOption(event.target.value);
    };
  
    const handleclick = () =>{
      navigate('/question4')
    }

  return (
    <div>
       <header className='flex justify-center items-center mt-10'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-2xl text-center'>Sobre suas intenções de volta:</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
        <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' 
            htmlFor="COMCERTEZAVOLTO">
                <InputCheck
                type='checkbox'
                id='COMCERTEZAVOLTO'
                value='COM CERTEZA VOLTO'
                checked={option === 'COM CERTEZA VOLTO'}
                onChange={handleOptionSelection}
              />
              <span>COM CERTEZA VOLTO</span>
            </label>
          </div>
        <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="VOLTOELEVOAMIGOS">
            <InputCheck
                type='checkbox'
                id='VOLTOELEVOAMIGOS'
                value='VOLTO E LEVO AMIGOS'
                checked={option === 'VOLTO E LEVO AMIGOS'}
                onChange={handleOptionSelection}
              />
              <span>VOLTO E LEVO AMIGOS</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="NAOVOLTO">
              <InputCheck
                type='checkbox'
                id='NAOVOLTO'
                value='NÃO VOLTO'
                checked={option === 'NÃO VOLTO'}
                onChange={handleOptionSelection}
              />
              <span>NÃO VOLTO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="AINDATENHODUVIDAS">
              <InputCheck
                type='checkbox'
                id='AINDATENHODUVIDAS'
                value='AINDA TENHO DÚVIDAS'
                checked={option === 'AINDA TENHO DÚVIDAS'}
                onChange={handleOptionSelection}
              />
              <span>AINDA TENHO DÚVIDAS</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center'>
      <Button onClick={handleclick}>PROXIMA PERGUNTA >>></Button>
      </div>
    </div>
  )
}

export default Question11
