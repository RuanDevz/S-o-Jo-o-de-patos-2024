import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';

const Question12 = () => {

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
      <h1 className='text-white font-bold text-2xl text-center'>Sobre suas expectativas em relação ao São João</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
        <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' 
            htmlFor="SUPEROUASEXPECTATIVAS">
                <InputCheck
                type='checkbox'
                id='SUPEROUASEXPECTATIVAS'
                value='SUPEROU AS EXPECTATIVAS'
                checked={option === 'SUPEROU AS EXPECTATIVAS'}
                onChange={handleOptionSelection}
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
                onChange={handleOptionSelection}
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
                onChange={handleOptionSelection}
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
                onChange={handleOptionSelection}
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
                onChange={handleOptionSelection}
              />
              <span>NÃO ATENDEU AS EXPECTATIVAS</span>
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

export default Question12
