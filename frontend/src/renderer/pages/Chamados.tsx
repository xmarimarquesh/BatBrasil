import React, { useRef, useState } from 'react';
import '../css/chamado.css';
import Menu from '../components/Menu';
import filtro from '../../../assets/filter.png';
import CardChamado from '../components/CardChamado';
import Modal from '../components/Modal';
import Chamado from '../components/Chamado';  
import { useEffect } from 'react';
import { useUser } from '../components/UserContext';

interface IChamado {
  Id: number;
  Descricao: string;
  StatusCurrent: string;
  NomeTecnico: string;
  NomeFuncionario: string;
  DataCriacao: Date; // ou Date, se converter no `fetch`
  Nivel: string;
  IDMaquina: number;
  Feedback: string;
}


export default function Chamados() {
  const [activeTab, setActiveTab] = useState('todos');
  const [isModalOpen, setModalOpen] = useState(false); 
  const [isChamadoModalOpen, setChamadoModalOpen] = useState(false); 
  const [selectedChamado, setSelectedChamado] = useState<IChamado | null>(null);
  const [chamadosTodos, setChamadosTodos] = useState<IChamado[]>([]);
  const [chamadosMeus, setChamadosMeus] = useState<IChamado[]>([]);


  const openChamadoModal = (chamado: any) => {
    setSelectedChamado(chamado);
    setChamadoModalOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  useEffect(() => {
    fetch('http://localhost:5000/chamados')
      .then(response => response.json())
      .then(data => {
        setChamadosTodos(data);
        setChamadosMeus(data.filter((c: IChamado) => c.NomeTecnico === user?.nome));
      })
      .catch(error => console.error('Erro ao buscar chamados:', error));
  }, []);


  const { user } = useUser();
  
  return (
    <>
      {/* Modal para mostrar os detalhes do chamado */}
      <Chamado
        isOpen={isChamadoModalOpen}
        onClose={() => setChamadoModalOpen(false)}  // Fecha o modal de detalhes
        chamado={selectedChamado} // Passa os dados do chamado
      />

      {/* Modal para criar um novo chamado */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}  // Fecha o modal de criação
        title="Abrir Chamado"  // Título do modal de criação
      >
        {/* Formulário para criação de novo chamado */}
        <div className='modal'>
          <label>Setor</label>
          <select name="setor" id="setor">
            <option value="setor1">Setor 1</option>
            <option value="setor2">Setor 2</option>
            <option value="setor3">Setor 3</option>
            <option value="setor4">Setor 4</option>
          </select>

          <label>Máquina</label>
          <select name="maquina" id="maquina">
            <option value="maquina1">Máquina 1</option>
            <option value="maquina2">Máquina 2</option>
            <option value="maquina3">Máquina 3</option>
            <option value="maquina4">Máquina 4</option>
          </select>

          <label htmlFor="">Descrição<input type="text" name="" id="" /></label>
          <button className='button' onClick={() => setModalOpen(false)}>Abrir chamado</button>
        </div>
      </Modal>

      <Menu />
      <div className='abaChamado'>
        <div className="container-chamados">
          <h1>Chamados</h1>

          <div className="mini-navbar">
            <button
              className={`tab-button ${activeTab === 'todos' ? 'active' : ''}`}
              onClick={() => setActiveTab('todos')}
            >
              Todos
            </button>
            <button
              className={`tab-button ${activeTab === 'meus' ? 'active' : ''}`}
              onClick={() => setActiveTab('meus')}
            >
              Meus
            </button>
          </div>

          <div className="conteudo-chamado">
            <div className="filter">
              <button onClick={toggleDropdown} className='but_filtro'><img src={filtro} alt="" /></button>
              <button onClick={() => setModalOpen(true)} className='abrir'>Abrir Chamado</button>
              {isOpen && (
                <div className="filtro-opcoes">
                  <div>Urgente</div>
                  <div>Média</div>
                  <div>Baixa</div>
                </div>
              )}
            </div>

            <div className="chamados">
              {activeTab === 'todos'
                ? chamadosTodos.map((chamado => (
                    <CardChamado
                      key={chamado.Id}
                      titulo={chamado.Descricao}
                      status={chamado.StatusCurrent}
                      responsavel={chamado.NomeTecnico}
                      autor={chamado.NomeFuncionario}
                      data={chamado.DataCriacao}
                      prioridade={chamado.Nivel}
                      onClick={() => openChamadoModal(chamado)}
                    />
                  )))
                : chamadosMeus.map((chamado) => (
                    <CardChamado
                      key={chamado.Id}
                      titulo={chamado.Descricao}
                      status={chamado.StatusCurrent}
                      responsavel={chamado.NomeTecnico}
                      autor={chamado.NomeFuncionario}
                      data={chamado.DataCriacao}
                      prioridade={chamado.Nivel}
                      onClick={() => openChamadoModal(chamado)}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
