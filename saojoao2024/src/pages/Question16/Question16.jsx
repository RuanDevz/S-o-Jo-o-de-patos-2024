import React, { useContext, useState, useEffect } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Context from '../../Context/Context'
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom'
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona'

const Question16 = () => {

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
    }
    window.scrollTo({top: 0});
    feedbacks.push(input)
    setFeedbacks(feedbacks)
    console.log(feedbacks)

    navigate('/question17')
  }


  return (
    <div>
            <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col text-center '>
            <h1 className='text-white text-2xl font-bold py-10 lg:text-4xl max-w-text4 text-center'>Algum feedback geral sobre o evento?</h1>
            <Input maxLength='40' onChange={(e) => setInput(e.target.value.toUpperCase())} type='text' placeholder='Digite aqui...'/>
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

export default Question16
