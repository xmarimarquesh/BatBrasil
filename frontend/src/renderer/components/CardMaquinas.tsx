import '../css/cardMaquinas.css';
import { Link, Route, Routes } from 'react-router-dom';
import BotaoMaq from './BotaoMaq';

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
        <div className="arruma">
          <div className="data">{dataChamado}</div>
          <div className="pagCard">
            <div className="card">
              <div className="desc">
                <div className="fontBold">Chamado aberto por:</div>
                <div className="font">{funcionario}</div>
              </div>
              <div className="desc">
                <div className="fontBold">Descrição: </div>
                <div className="inputDesc">{descricao}</div>
              </div>
              <div className="desc">
                <div className="fontBold">FeedBack: </div>
                <div className="inputDesc">{descricao}</div>
              </div>
              <div className="desc">
                <div className="fontBold">Técnico: </div>
                <div className="font">{tecnico}</div>
              </div>
            </div>
            <div className="cardHist">
              <div className="fontBold">Histórico</div>
              <BotaoMaq texto={'Em andamento'}></BotaoMaq>
              <BotaoMaq texto={'Em andamento'}></BotaoMaq>
              <BotaoMaq texto={'Em andamento'}></BotaoMaq>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMaquinas;
