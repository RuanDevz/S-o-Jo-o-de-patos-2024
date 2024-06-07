import React, { useContext, useState } from 'react';
import logo from '../../assets/LogoSaoJoao/Logosaojoao.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';

const Start = () => {
  const [telefone, setTelefone] = useState('');
  const {error, setError, feedbacks, setFeedbacks} = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (e) => {
    let valor = e.target.value;
    

    valor = valor.replace(/\D/g, '');
    
    let formattedValue = '';
    if (valor.length > 0) {
      formattedValue = `(${valor.slice(0, 2)}) ${valor.slice(2, 3)} ${valor.slice(3, 7)}`;
      if (valor.length > 7) {
        formattedValue += `-${valor.slice(7, 11)}`;
      }
    }

    setTelefone(formattedValue);
    if (formattedValue.length === 14) {
      setTelefoneValido(true);
    } else {
      setTelefoneValido(false);
    }
  };

  const handleClick = () => {
    if (telefone.length < 14) {
      setError('Digite um telefone válido!');
      setTimeout(() => {
        setError('')
      }, 3000);
      return;
    }
    feedbacks.push(telefone)
    setFeedbacks(feedbacks)
    console.log(feedbacks)
    
    navigate('/question1');
  };

  return (
    <div>
      <header className='flex justify-center items-center mt-5 pb-10'>
        <img src={logo} alt="logo" />
      </header>
      <main className='flex flex-col justify-center items-center font-rockwell'>
        <p className='text-white bg-Ocean whitespace-nowrap font-medium'>A sua opinião é de extrema importância para nós!</p>
        <p className='text-white font-medium text-center text-xl max-w-80 pb-16'>
          Queremos saber <span className='text-Orange'>o que você achou</span> do São João da gente deste ano para que <span className='text-Pink'>possamos continuar aprimorando </span>e oferecendo uma experiência ainda melhor nas próximas edições
        </p>
      </main>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-white font-extralight tracking-widest pb-3 font-rockwell'>DIGITE SEU NÚMERO DE CONTATO</p>
        <div className='mb-4'>
          <Input
            max='14' 
            type='text'
            placeholder='(99) 9 9999-9999'
            value={telefone}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className='bg-Pink p-3 text-white rounded-3xl border-4 border-white text-2xl w-40'>INICIAR</button>
        <Error/>
      </div>
    </div>
  );
};

export default Start;
