import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom'
import Context from '../../Context/Context'
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona'

const Question17 = () => {


  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const {feedbacks, setFeedbacks} = useContext(Context)

  const [allfeedbacks, setAllfeedbacks] = useState({})

  const handlefinish = async (e) => {
    e.preventDefault();

    if(input === ''){
      setInput('Nome não informado')
    } else {
      window.scrollTo({top: 0});
      feedbacks.push(input)
      setFeedbacks(feedbacks)
      console.log(feedbacks)
      navigate('/finish');

      const response = await fetch('https://api.sheetmonkey.io/form/baNDLsj3CDPbUuaznPCuL1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbacks),
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
        setFeedbacks(feedbacks); 
      } else {
        console.error('Falha no envio do formulário:', response.status);
      }
    }
  }

  return (
    <div>
      <header className='flex justify-center items-center mt-28'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center flex-col text-center '>
        <form>
          <h1 className='text-white text-2xl font-bold py-10 lg:text-4xl'>Nome (opcional)</h1>
          <Input onChange={(e) => setInput(e.target.value.toUpperCase())} type='text' placeholder='Digite aqui...' value={input}/>
          <div className='mt-20'>
            <Button onClick={handlefinish}>FINALIZAR</Button>
          </div>
        </form>
      </main>
      <div>
          <BalaoESanfona />
      </div>
    </div>
  )
}

export default Question17
