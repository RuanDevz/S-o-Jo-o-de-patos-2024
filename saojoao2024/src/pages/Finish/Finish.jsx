import React from 'react'
import logo from '../../assets/LogoSaoJoao/Logosaojoao.png'

const Finish = () => {
  return (
    <div>
      <main className='flex justify-center items-center flex-col'>
        <h1 className='text-white font-bold text-center text-2xl mt-40'>Agradecemos sinceramente pela sua participação e pelo tempo dedicado a compartilhar suas opinições e experiências sobre o São João de Patos 2024</h1>

        <img className='mt-20' src={logo} alt="logo" />
      </main>
    </div>
  )
}

export default Finish
