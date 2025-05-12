import React, { useState } from 'react';
import '../css/App.css';
import Menu from '../components/Menu';

export default function Chamados() {
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div className='abaChamado'>
      <Menu />
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

        {/* Aqui você pode renderizar o conteúdo com base na aba selecionada */}
        <div className="conteudo-chamado">
          {activeTab === 'todos' ? 
          <div className='chamados'>Lista de todos os chamados</div> : <div className='chamados'>Meus chamados</div>}
        </div>
      </div>
    </div>
  );
}
