import '../css/App.css';
import Menu from '../components/Menu';
import CardHistMaquina from '../components/CardHistMaquina';
import '../css/maquinas.css';

export default function Maquinas() {
  return (
    <>
      <Menu />
      <div className="main">
        <h1>Maquinas</h1>
        <CardHistMaquina
          dataChamado="13/07/2024 13:45"
          funcionario="Juliana Dias Purcino"
          tecnico="Juliana Dias Purcino"
          descricao="Peça da máquina com defeito na bomba"
          feedback="Peça substituída com sucesso"
          historico={[
            { texto: 'Chamado Aberto', data: '13/07/2024 13:45' },
            { texto: 'Chamado em andamento', data: '13/07/2024 14:00' },
            { texto: 'Chamado finalizado', data: '13/07/2024 15:10' },
          ]} id={0}        />
        <CardHistMaquina
          dataChamado="13/07/2024 13:45"
          funcionario="Juliana Dias Purcino"
          tecnico="Juliana Dias Purcino"
          descricao="Peça da máquina com defeito na bomba"
          feedback="Peça substituída com sucesso"
          historico={[
            { texto: 'Chamado Aberto', data: '13/07/2024 13:45' },
            { texto: 'Chamado em andamento', data: '13/07/2024 14:00' },
            { texto: 'Chamado finalizado', data: '13/07/2024 15:10' },
          ]} id={0}        />
      </div>
    </>
  );
}
