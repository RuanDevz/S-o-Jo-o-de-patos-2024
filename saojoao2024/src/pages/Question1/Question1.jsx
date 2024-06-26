import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Context from '../../Context/Context'
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom'
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona'

const Question1 = () => {


  const navigate = useNavigate()

  const [input, setInput] = useState('')
  const {setError, error, feedbacks, setFeedbacks} = useContext(Context)

  useEffect(() => {
    setError('')
  },[])
  

  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
  window.history.pushState(null, "", window.location.href);
  };

  const handleChange = (e) =>{
    setInput(e.target.value.toUpperCase())
  }

  const handleClick = () => {
    if (input.length === 0) {
      setError('Preencha o campo!');
      return;
    }

    window.scrollTo({top: 0});

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
            <h1 className='text-white text-2xl font-bold py-10 lg:text-4xl'>Qual estado você mora ?</h1>
            <Input onChange={handleChange} value={input} type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button onClick={handleClick}>PRÓXIMA PERGUNTA &gt;&gt;&gt; </Button>
            <div className='flex justify-center items-center'>
            <Error />
            </div>
            </div>
            <div>
              <BalaoESanfona />
            </div>
        </main>
    </div>
  )
}

export default Question1