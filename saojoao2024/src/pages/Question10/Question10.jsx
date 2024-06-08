import React, {useContext, useState} from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/Error/Error';
import Context from '../../Context/Context';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question10 = () => {
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

    const [nota, setNota] = useState(null);

    const {setError, feedbacks, setFeedbacks} = useContext(Context)

    const navigate = useNavigate()

    const handleNotaSelected = (event) => {
        setNota(event);
    };

    const handleclick = () =>{
        if(!nota){
          setError('Preencha o campo!')
          setTimeout(() => {
           setError('')
           return
          }, 3000);
        }else{
           window.scrollTo({top: 0});
          feedbacks.push(nota)
          setFeedbacks(feedbacks)
          console.log(feedbacks)
          navigate('/question11')
        }
      }

  return (
    <div>
        <header className='flex justify-center items-center mt-5'>
                <Logo/>
            </header>
            <main className='flex justify-center items-center flex-col gap-0 font-rockwell lg:flex-row lg:gap-40'>
                <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white font-bold text-center text-base py-2 lg:text-5xl lg:max-w-text'>Você ficou satisfeito com a organização do evento ?</h1>
                <p className='text-xs text-center lg:text-lg lg:mt-3'><span className='text-Ocean font-bold'>1 PARA POUCO SATISFEITO</span><span className='text-Orange font-bold'> 5 PARA MUITO SATISFEITO</span></p>
                </div>
                <section className='lg:text-3xl'>
                    <div>
                        <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="one">
                            <InputCheck
                                type='checkbox'
                                id='one'
                                value='1'
                                checked={nota === '1'}
                                onChange={() => handleNotaSelected('1')}
                            />
                            <span>1</span>
                        </label>
                    </div>
                    <div>
                        <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="two">
                            <InputCheck
                                type='checkbox'
                                id='two'
                                value='2'
                                checked={nota === '2'}
                                onChange={() => handleNotaSelected('2')}
                            />
                            <span>2</span>
                        </label>
                    </div>
                    <div>
                        <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="three">
                            <InputCheck
                                type='checkbox'
                                id='three'
                                value='3'
                                checked={nota === '3'}
                                onChange={() => handleNotaSelected('3')}
                            />
                            <span>3</span>
                        </label>
                    </div>
                    <div>
                        <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="four">
                            <InputCheck
                                type='checkbox'
                                id='four'
                                value='4'
                                checked={nota === '4'}
                                onChange={() => handleNotaSelected('4')}
                            />
                            <span>4</span>
                        </label>
                    </div>
                    <div>
                        <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="five">
                            <InputCheck
                                type='checkbox'
                                id='five'
                                value='5'
                                checked={nota === '5'}
                                onChange={() => handleNotaSelected('5')}
                            />
                            <span>5</span>
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
            <div>
          <BalaoESanfona />
      </div>
    </div>
  )
}

export default Question10
