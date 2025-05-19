import React, { useState } from 'react';
import '../css/App.css';
import Menu from '../components/Menu';
import filtro from '../../../assets/filter.png';
import CardChamado from '../components/CardChamado';
import Modal from '../components/Modal';


export default function Chamados() {
  const [activeTab, setActiveTab] = useState('todos');

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

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Abrir chamado">
        <div className='modal'>
          <label>Setor
          </label>
            <select name="setor" id="setor">
              <option value="setor1">Setor 1</option>
              <option value="setor2">Setor 2</option>
              <option value="setor3">Setor 3</option>
              <option value="setor4">Setor 4</option>
            </select>

          <label>Máquina
          </label>
            <select name="maquina" id="maquina">
              <option value="maquina1">Máquina 1</option>
              <option value="maquina2">Máquina 2</option>
              <option value="maquina3">Máquina 3</option>
              <option value="maquina4">Máquina 4</option>
            </select>
          <label htmlFor="">Descrição<input type="text" name="" id="" /></label>
          <button className='button'>Abrir chamado</button>
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
              <img src={filtro} alt="" />
              <button onClick={() => setModalOpen(true)}>Abrir Chamado</button>
            </div>
            {activeTab === 'todos' ? 
            <div className='chamados'>
              {chamadosTodos.map((chamado, index) => (
                <CardChamado key={index} {...chamado} />
              ))}
            </div> 
            : 
            <div className='chamados'>
              {chamadosMeus.map((chamado, index) => (
                <CardChamado key={index} {...chamado} />
              ))}
            </div> 
            }
          </div>
        </div>
      </div>
    </>
  );
}
