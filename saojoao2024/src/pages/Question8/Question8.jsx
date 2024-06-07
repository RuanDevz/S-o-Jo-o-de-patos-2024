import React,{useState} from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Question8 = () => {

    const [nota, setNota] = useState(null)

    const handleNotaSelected = (e) =>{
        setNota(e.target.value)
    }

  return (
    <div>
        <header className='flex justify-center items-center mt-5'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-center py-2 text-2xl'>Sobre a estrutura do evento você gostou?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="gosteimuito">
              <InputCheck
                type='checkbox'
                id='gosteimuito'
                value='GOSTEI MUITO'
                checked={nota === 'GOSTEI MUITO'}
                onChange={handleNotaSelected}
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
                onChange={handleNotaSelected}
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
                onChange={handleNotaSelected}
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
                onChange={handleNotaSelected}
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
                onChange={handleNotaSelected}
              />
              <span>NÃO GOSTEI</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center'>
        <Button>PROXIMA PERGUNTA >>></Button>
      </div>
    </div>
  )
}

export default Question8
