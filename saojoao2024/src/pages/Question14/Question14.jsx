import React, { useContext, useState, useEffect } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom'
import Context from '../../Context/Context'
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona'

const Question14 = () => {

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const [input, setInput] = useState('')

  const navigate = useNavigate()

  const {setError, feedbacks, setFeedbacks} = useContext(Context)

  
  useEffect(() => {
    setError('')
  },[])



  const handleclick = () =>{
    if (input.length === 0) {
      setError('Preencha o campo!');
      return;
    }
    window.scrollTo({top: 0});
    feedbacks.push(input)
    setFeedbacks(feedbacks)
    console.log(feedbacks)

    navigate('/question15')
  }

  const handleChange = (e) =>{
    setInput(e.target.value.toUpperCase())
  }

  return (
    <div>
      <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col text-center '>
            <h1 className='text-white text-2xl font-bold py-10 lg:text-4xl lg:max-w-text4'>Quais foram os pontos mais positivos do evento?</h1>
            <Input onChange={handleChange} type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button onClick={handleclick}>PRÓXIMA PERGUNTA &gt;&gt;&gt;</Button>
            </div>
            <div className='flex justify-center items-center'>
              <Error/>
            </div>
            <div>
          <BalaoESanfona />
      </div>
        </main>
    </div>
  )
}

export default Question14
