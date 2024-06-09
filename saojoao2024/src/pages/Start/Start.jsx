import React, { useContext, useState } from 'react';
import logo from '../../assets/LogoSaoJoao/Logosaojoao.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import axios from 'axios';

const Start = () => {
  window.history.pushState(null, "", window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
  };

  const [telefone, setTelefone] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Estado para controlar a habilitação do botão
  const { error, setError, feedbacks, setFeedbacks } = useContext(Context);
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
  };

  const handleClick = () => {
    if (telefone.length < 14) {
      setError('Digite um telefone válido!');
      return;
    }

    setIsButtonDisabled(true); // Desabilita o botão ao iniciar a requisição

    axios.post('https://apisaojoao2024.vercel.app/telefone',{
      telefone: telefone
    }).then((response) =>{
      console.log(response.data);
      navigate('/question1');
    }).catch((err) => {
      setError('Telefone já cadastrado!');
      console.log(err);
    }).finally(() => {
      setIsButtonDisabled(false); // Habilita o botão ao finalizar a requisição
    });

    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;

    const DataAndTime = `${formattedDate} - ${formattedTime}`

    const feedbackWithNumber = telefone;

    setFeedbacks([...feedbacks, DataAndTime, feedbackWithNumber]);
  };

  return (
    <div>
      <header className='flex justify-center items-center mt-5 pb-10 lg:mt-14'>
        <img src={logo} alt="logo" />
      </header>
      <main className='flex flex-col justify-center items-center font-rockwell'>
        <p className='text-white bg-Ocean whitespace-nowrap font-medium lg:text-3xl p-0 lg:p-2'>A sua opinião é de extrema importância para nós!</p>
        <p className='text-white font-medium text-center text-xl max-w-80 pb-16 lg:max-w-desktop lg:text-3xl'>
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
        <button 
          onClick={handleClick} 
          disabled={isButtonDisabled} // Desabilita o botão se isButtonDisabled for verdadeiro
          className='bg-Pink p-3 text-white rounded-3xl border-4 border-white text-2xl w-40 lg:w-64 mt-8 cursor-pointer hover:bg-Pinkhover'>
          {isButtonDisabled ? 'Aguarde...' : 'INICIAR'} {/* Altera o texto do botão enquanto a requisição está em andamento */}
        </button>
        <Error />
      </div>
    </div>
  );
};

export default Start;
