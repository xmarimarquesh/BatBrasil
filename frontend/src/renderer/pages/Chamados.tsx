import React, { useRef, useState } from 'react';
import '../css/App.css';
import Menu from '../components/Menu';
import filtro from '../../../assets/filter.png';
import CardChamado from '../components/CardChamado';
import Modal from '../components/Modal';  // Modal para criar um novo chamado
import Chamado from '../components/Chamado';  // Modal para mostrar detalhes do chamado


export default function Chamados() {
  const [activeTab, setActiveTab] = useState('todos'); // Controla se exibe "Todos" ou "Meus"
  const [isModalOpen, setModalOpen] = useState(false); // Controla se o modal de criação está aberto
  const [isChamadoModalOpen, setChamadoModalOpen] = useState(false); // Controla o modal de detalhes do chamado
  const [selectedChamado, setSelectedChamado] = useState<any>(null); // Armazena os dados do chamado selecionado

  const chamadosTodos = [
    {
      titulo: 'Disco de afiação quebrou',
      status: 'Em aberto',
      responsavel: 'José Ricardo Almeida Campos',
      autor: 'Paulo Gomes',
      data: '17/04/2025',
      prioridade: 'Urgente',
    },
    {
      titulo: 'Sistema não responde',
      status: 'Em andamento',
      responsavel: 'Ana Julia Ribeiro',
      autor: 'Marcos Silva',
      data: '16/04/2025',
      prioridade: 'Média',
    },
    {
      titulo: 'Erro na geração de relatório',
      status: 'Concluído',
      responsavel: 'Carlos Eduardo',
      autor: 'Fernanda Lopes',
      data: '15/04/2025',
      prioridade: 'Fácil',
    },
    {
      titulo: 'Monitor piscando',
      status: 'Em aberto',
      responsavel: 'Rafael Martins',
      autor: 'Larissa Dias',
      data: '18/04/2025',
      prioridade: 'Urgente',
    },
  ];

  const chamadosMeus = [
    {
      titulo: 'Disco de afiação quebrou',
      status: 'Em aberto',
      responsavel: 'José Ricardo Almeida Campos',
      autor: 'Paulo Gomes',
      data: '17/04/2025',
      prioridade: 'Urgente',
    },
    {
      titulo: 'Sistema não responde',
      status: 'Em andamento',
      responsavel: 'Ana Julia Ribeiro',
      autor: 'Marcos Silva',
      data: '16/04/2025',
      prioridade: 'Média',
    }
  ];

  const openChamadoModal = (chamado: any) => {
    setSelectedChamado(chamado); // Define os dados do chamado selecionado
    setChamadoModalOpen(true); // Abre o modal de detalhes do chamado
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  
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
                ? chamadosTodos.map((chamado, index) => (
                    <CardChamado
                      key={index}
                      {...chamado}
                      onClick={() => openChamadoModal(chamado)} // Abre o modal de detalhes
                    />
                  ))
                : chamadosMeus.map((chamado, index) => (
                    <CardChamado
                      key={index}
                      {...chamado}
                      onClick={() => openChamadoModal(chamado)} // Abre o modal de detalhes
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
