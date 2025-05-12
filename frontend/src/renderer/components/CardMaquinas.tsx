import '../css/cardMaquinas.css';
import { Link, Route, Routes } from 'react-router-dom';

var dataChamado = '13/07/2024 13:45';
var funcionario = 'Juliana Dias Purcino';
var tecnico = 'Juliana Dias Purcino';
var descricao = 'Peça da máquina com deifeito na bomba';

function CardMaquinas() {
  return (
    <>
      <div className="mainCard">
        <div className="tempo">
          <div className="bolaTempo"></div>
          <div className="linhaTempo"></div>
        </div>
        <div className="pagCard">
          <div className="data">{dataChamado}</div>
          <div className="card">
            <div className="font">Chamado aberto por:{funcionario}</div>
            <div className='desc'>
              <div className="font">Descrição: </div>
              <div className="inputDesc">{descricao}</div>
            </div>
            <div className='desc'>
              <div className="font">Feedback: </div>
              <div className="inputDesc">{descricao}</div>
            </div>
            <div>
              

            </div>

            <div className="font">Técnico: {tecnico}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMaquinas;
