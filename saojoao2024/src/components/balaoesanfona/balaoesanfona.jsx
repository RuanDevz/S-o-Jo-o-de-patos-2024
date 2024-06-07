import React from 'react';
import balao from '../../assets/Background/balao.png'
import sanfona from '../../assets/Background/SANFONA.png'
import './styles.css'

const BalaoESanfona = () => {
  return (
    <div>
      <img className='absolute top-0 left-0 w-32 -translate-x-12 -z-10' src={balao} alt="balao" />
      <div>
        <img className='absolute bottom-0 right-0 w-32 transform -rotate-45 translate-x-10 -z-10' src={sanfona} alt="sanfona" />
      </div>
    </div>
  );
}

export default BalaoESanfona;
