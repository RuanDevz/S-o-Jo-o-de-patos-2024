import React, { useState } from 'react';
import logo from '../../assets/LogoSaoJoao/Logosaojoao.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const [telefone, setTelefone] = useState('');
  const [telefoneValido, setTelefoneValido] = useState(true);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const valor = e.target.value;
    setTelefone(valor);
    const regex = /^\(\d{2}\) \d \d{4}-\d{4}$/;
    setTelefoneValido(regex.test(valor));
  };

  const handleclick = () =>{
    navigate('/question1')
  }

  return (
    <div>
      <header className='flex justify-center items-center mt-10 pb-10'>
        <img src={logo} alt="logo" />
      </header>
      <main className='flex flex-col justify-center items-center font-rockwell'>
        <p className='text-white bg-Ocean whitespace-nowrap font-medium'>A sua opinião é de extrema importância para nós!</p>
        <p className='text-white font-medium text-center text-xl max-w-80 pb-16'>
          Queremos saber <span className='text-Orange'>o que você achou</span> do São João da gente deste ano para que <span className='text-Pink'>possasmos continuar aprimorando </span>e oferendo uma experiência ainda melhor nas próximas edições
        </p>
      </main>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-white font-extralight tracking-widest pb-3 font-rockwell'>DIGITE SEU NÚMERO DE CONTATO</p>
        <div className='mb-4'>
        <Input
          max='11'
          type='text'
          placeholder='(99) 9 9999-9999'
          value={telefone}
          onChange={handleChange}
        />
        </div>
        <button onClick={handleclick} className='bg-Pink p-3 text-white rounded-3xl border-4 border-white text-2xl w-40'>INICIAR</button>
      </div>
    </div>
  );
};

export default Start;
