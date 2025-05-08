import '../css/cardMaquinas.css';
import { Link, Route, Routes } from 'react-router-dom';

function CardMaquinas() {
  return (
    <>
      <div>
        <div className='tempo'>
          <div className='bolaTempo'></div>
          <div className='linhaTempo'></div>
        </div>
        <div>
          <div></div>
          <div className='card'>
            <h1>Chamado aberto por:</h1>
            <h1>De:</h1>
            <h1>Chamado aberto por:</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMaquinas;
