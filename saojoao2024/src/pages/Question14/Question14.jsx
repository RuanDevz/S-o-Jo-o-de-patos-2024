import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom'
import Context from '../../Context/Context'

const Question14 = () => {

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const [input, setInput] = useState('')

  const navigate = useNavigate()

  const {setError, feedbacks, setFeedbacks} = useContext(Context)



  const handleclick = () =>{
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

    navigate('/question15')
  }

  return (
    <div>
      <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col text-center '>
            <h1 className='text-white text-2xl font-bold py-10'>Quais foram os pontos mais positivos do evento?</h1>
            <Input onChange={(e) => setInput(e.target.value)} type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button onClick={handleclick}>PROXIMA PERGUNTA &gt;&gt;&gt;</Button>
            </div>
            <div className='flex justify-center items-center'>
              <Error/>
            </div>
        </main>
    </div>
  )
}

export default Question14
