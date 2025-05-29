import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import CardMaquina from '../components/CardMaquina';
import CardHistMaquina from '../components/CardHistMaquina';
import '../css/maquina.css';
import Modal from '../components/Modal';

interface IMaquina {
  ID: number;
  Descricao: string;
  DataCriacao: Date;
  Setor: string;
}

interface IChamado {
  Id: number;
  Descricao: string;
  StatusCurrent: string;
  NomeTecnico: string;
  NomeFuncionario: string;
  DataCriacao: Date;
  Nivel: string;
  IDMaquina: number;
  Feedback: string;
}


export default function Maquinas() {
  const [maquinaSelecionadaId, setMaquinaSelecionadaId] = useState<
    number | null
  >(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const [maquinas, setMaquinas] = useState<IMaquina[]>([]);
  const [chamados, setChamadosTodos] = useState<IChamado[]>([]);
  
  useEffect(() => {
      fetch('http://localhost:5000/chamados')
        .then(response => response.json())
        .then(data => {
          setChamadosTodos(data);
        })
        .catch(error => console.error('Erro ao buscar chamados:', error));
    }, []);

  useEffect(() => {
    fetch('http://localhost:5000/maquinas')
      .then(response => response.json())
      .then(data => {
        setMaquinas(data);
      })
      .catch(error => console.error('Erro ao buscar chamados:', error));
  }, []);


  const handleSelecionarMaquina = (id: number) => {
    console.log("id: ", id)
    setMaquinaSelecionadaId((prev) => (prev === id ? null : id));
    console.log("maquina selecionada: ", maquinaSelecionadaId)
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
          <button className="button" type="button">Cadastrar</button>
        </div>
      </Modal>
      <div className="main">
        <div className='abrir-chamado'>
          <button type="button" onClick={() => setModalOpen(true)}>Cadastrar máquina</button>
        </div>
        <div className="maquinas">
          {maquinas.map((maquina) => (
            <div key={maquina.ID}>
              <div onClick={() => handleSelecionarMaquina(maquina.ID)}>
                <CardMaquina id={maquina.ID} descricao={maquina.Descricao} dataCompra={maquina.DataCriacao} idSetor={maquina.Setor}/>
              </div>

              <div
                className={`historico ${maquinaSelecionadaId === maquina.ID ? 'aberto' : ''}`}
              >
                {maquinaSelecionadaId === maquina.ID &&
                  chamados
                    .filter((chamado) => chamado.IDMaquina === maquina.ID)
                    .map((chamado) => (
                      <CardHistMaquina
                        key={chamado.Id}
                        id={chamado.Id}
                        dataChamado={chamado.DataCriacao}
                        funcionario={chamado.NomeFuncionario}
                        tecnico={chamado.NomeTecnico}
                        descricao={chamado.Descricao}
                        feedback={chamado.Feedback}
                        // historico={chamado.}
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
