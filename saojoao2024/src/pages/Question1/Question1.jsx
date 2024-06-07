import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Context from '../../Context/Context'
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom'

const Question1 = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState('')
  const {setError, error, feedbacks, setFeedbacks} = useContext(Context)
  

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
  window.history.pushState(null, "", window.location.href);
  };

  const handleClick = () => {
    if (input.length === 0) {
      setError('Preencha o campo!');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    feedbacks.push(input)
    setFeedbacks(feedbacks)
    console.log(feedbacks)

    navigate('/question2')
  };
  
  return (
    <div className='font-rockwell'>
        <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col '>
            <h1 className='text-white text-2xl font-bold py-10'>Qual estado você mora ?</h1>
            <Input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button onClick={handleClick}>PROXIMA PERGUNTA &gt;&gt;&gt; </Button>
            <div className='flex justify-center items-center'>
            <Error />
            </div>
            </div>
        </main>
    </div>
  )
}

export default Question1