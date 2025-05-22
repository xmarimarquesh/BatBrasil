import { useState } from 'react';
import Menu from '../components/Menu';
import CardMaquina from '../components/CardMaquina';
import CardHistMaquina from '../components/CardHistMaquina';
import '../css/maquina.css';
import Modal from '../components/Modal';

type Historico = {
  texto: string;
  data: string;
};

type Maquina = {
  id: number;
  descricao: string;
  dataCompra: string;
  data: string;
  idSetor: string;
};

type Chamado = {
  id: number;
  idMaquina: number;
  funcionario: string;
  tecnico: string;
  descricao: string;
  feedback: string;
  dataChamado: string;
  historico: Historico[];
};

export default function Maquinas() {
  const [maquinaSelecionadaId, setMaquinaSelecionadaId] = useState<
    number | null
  >(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const maquinas: Maquina[] = [
    {
      id: 1,
      descricao: 'Enrolador de cigarro',
      dataCompra: '12/09/2023',
      data: '12/09/2023',
      idSetor: 'DU',
    },
    {
      id: 2,
      descricao: 'Seladora de pacotes',
      dataCompra: '15/08/2023',
      data: '15/08/2023',
      idSetor: 'IN',
    },
  ];

  const chamados: Chamado[] = [
    {
      id: 101,
      idMaquina: 1,
      funcionario: 'Juliana Dias',
      tecnico: 'João Silva',
      descricao: 'Peça da máquina com defeito',
      feedback: 'Peça trocada com sucesso',
      dataChamado: '13/07/2024 13:45',
      historico: [
        { texto: 'Chamado aberto', data: '13/07/2024 13:45' },
        { texto: 'Em andamento', data: '13/07/2024 13:50' },
        { texto: 'Chamado Finalizado', data: '13/07/2024 14:10' },
      ],
    },
    {
      id: 102,
      idMaquina: 1,
      funcionario: 'Carlos Silva',
      tecnico: 'Ana Souza',
      descricao: 'Barulho incomum no motor',
      feedback: 'Lubrificação aplicada',
      dataChamado: '20/07/2024 09:10',
      historico: [
        { texto: 'Chamado aberto', data: '20/07/2024 09:10' },
        { texto: 'Avaliação técnica', data: '20/07/2024 09:25' },
        { texto: 'Lubrificação aplicada', data: '20/07/2024 09:40' },
        { texto: 'Chamado finalizado', data: '20/07/2024 10:00' },
      ],
    },
    {
      id: 103,
      idMaquina: 2,
      funcionario: 'Maria Oliveira',
      tecnico: 'Pedro Lima',
      descricao: 'Falha no aquecimento',
      feedback: 'Sensor substituído',
      dataChamado: '22/07/2024 10:20',
      historico: [
        { texto: 'Chamado aberto', data: '22/07/2024 10:20' },
        { texto: 'Sensor verificado', data: '22/07/2024 10:30' },
        { texto: 'Sensor trocado', data: '22/07/2024 10:50' },
        { texto: 'Chamado finalizado', data: '22/07/2024 11:00' },
      ],
    },
  ];

  const handleSelecionarMaquina = (id: number) => {
    setMaquinaSelecionadaId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Menu />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Cadastrar máquina"
      >
        <div className="modal">
          <label>Nome máquina</label>
          <input type="text" />
          <label>Data compra</label>
          <input type="date" />

          <label>Setor</label>
          <select name="maquina" id="maquina">
            <option value="maquina1">Máquina 1</option>
            <option value="maquina2">Máquina 2</option>
            <option value="maquina3">Máquina 3</option>
            <option value="maquina4">Máquina 4</option>
          </select>
          <button className="button">Cadastrar</button>
        </div>
      </Modal>
      <div className="main">
        <div className='abrir-chamado'>
          <button onClick={() => setModalOpen(true)}>Cadastrar máquina</button>
        </div>
        <div className="maquinas">
          {maquinas.map((maquina) => (
            <div key={maquina.id}>
              <div onClick={() => handleSelecionarMaquina(maquina.id)}>
                <CardMaquina {...maquina} />
              </div>

              <div
                className={`historico ${maquinaSelecionadaId === maquina.id ? 'aberto' : ''}`}
              >
                {maquinaSelecionadaId === maquina.id &&
                  chamados
                    .filter((chamado) => chamado.idMaquina === maquina.id)
                    .map((chamado) => (
                      <CardHistMaquina
                        key={chamado.id}
                        id={chamado.id}
                        dataChamado={chamado.dataChamado}
                        funcionario={chamado.funcionario}
                        tecnico={chamado.tecnico}
                        descricao={chamado.descricao}
                        feedback={chamado.feedback}
                        historico={chamado.historico}
                      />
                    ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
