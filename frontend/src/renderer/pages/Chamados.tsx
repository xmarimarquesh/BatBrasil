import React, { useState, useEffect } from 'react';
import '../css/chamado.css';
import Menu from '../components/Menu';
import filtro from '../../../assets/filter.png';
import CardChamado from '../components/CardChamado';
import Modal from '../components/Modal';
import Chamado from '../components/Chamado';
import { useUser } from '../components/UserContext';
import arrow from '../../../assets/arrow.png';

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

export default function Chamados() {
  const { user } = useUser();

  const [activeTab, setActiveTab] = useState('todos');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isChamadoModalOpen, setChamadoModalOpen] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState<IChamado | null>(null);
  const [chamadosTodos, setChamadosTodos] = useState<IChamado[]>([]);
  const [chamadosMeus, setChamadosMeus] = useState<IChamado[]>([]);

  const [formData, setFormData] = useState({
    setor: '',
    maquina: '',
    tecnico: '',
    nivel: '',
    descricao: ''
  });

  const [setores, setSetores] = useState<{ id: number; nome: string }[]>([]);
  const [maquinas, setMaquinas] = useState<{ id: number; descricao: string }[]>([]);
  const [tecnicos, setTecnicos] = useState<{ id: number; nome: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/setores')
      .then(res => res.json())
      .then(data => setSetores(data));

    fetch('http://localhost:5000/tecnicos')
      .then(res => res.json())
      .then(data => setTecnicos(data));
  }, []);

  useEffect(() => {
    if (formData.setor) {
      fetch(`http://localhost:5000/maquinas/${formData.setor}`)
        .then(res => res.json())
        .then(data => setMaquinas(data));
    }
  }, [formData.setor]);

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { descricao, nivel, tecnico, maquina } = formData;

    if (!descricao || !nivel || !tecnico || !maquina) {
      alert("Preencha todos os campos.");
      return;
    }

    const chamadoData = {
      Descricao: descricao,
      IDFuncionario: user?.ruf,
      IDTecnico: parseInt(tecnico),
      IDStatus: 1, // Aberto
      IDDificuldade: parseInt(nivel),
      IDMaquina: parseInt(maquina)
    };

    try {
      const response = await fetch('http://localhost:5000/chamados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(chamadoData)
      });

      if (response.ok) {
        alert("Chamado aberto com sucesso!");
        setModalOpen(false);
      } else {
        alert("Erro ao abrir chamado.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de rede.");
    }
  };

  const openChamadoModal = (chamado: IChamado) => {
    setSelectedChamado(chamado);
    setChamadoModalOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  // Novo estado para filtro de prioridade
  const [filtroPrioridade, setFiltroPrioridade] = useState<string>(''); // '', 'Urgente', 'Média', 'Baixa'

  useEffect(() => {
    fetch('http://localhost:5000/chamados')
      .then(response => response.json())
      .then(data => {
        setChamadosTodos(data);
        setChamadosMeus(data.filter((c: IChamado) => c.NomeTecnico === user?.nome));
      })
      .catch(error => console.error('Erro ao buscar chamados:', error));
  }, [user]);

  // --------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // quantos chamados por página

  // escolher lista conforme a aba ativa
  const chamadosExibidosBase = activeTab === 'todos' ? chamadosTodos : chamadosMeus;

  // aplicar filtro de prioridade
  const chamadosExibidos = filtroPrioridade
    ? chamadosExibidosBase.filter(c => {
        // comparar o nível com o filtro selecionado
        // Como Nivel é string ("Urgente", "Média", "Baixa")
        return c.Nivel === filtroPrioridade;
      })
    : chamadosExibidosBase;

  // calcular índice inicial e final da página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // pegar só os chamados dessa página
  const currentItems = chamadosExibidos.slice(indexOfFirstItem, indexOfLastItem);

  // número total de páginas
  const totalPages = Math.ceil(chamadosExibidos.length / itemsPerPage);

  // funções para trocar página
  const goToPage = (pageNumber: number) => setCurrentPage(pageNumber);
  const goNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const goPrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // função para selecionar filtro e fechar dropdown
  const selecionarFiltro = (prioridade: string) => {
    setFiltroPrioridade(prioridade);
    setIsOpen(false);
    setCurrentPage(1); // resetar para a primeira página ao filtrar
  };

  return (
    <>
      <Chamado
        isOpen={isChamadoModalOpen}
        onClose={() => setChamadoModalOpen(false)}
        chamado={selectedChamado}
      />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Abrir Chamado">
        <div className='modal'>
          <label>Setor</label>
          <select name="setor" value={formData.setor} onChange={handleInputChange}>
            <option value="">Selecione</option>
            {setores.map(s => (
              <option key={s.id} value={s.id}>{s.nome}</option>
            ))}
          </select>

          <label>Máquina</label>
          <select name="maquina" value={formData.maquina} onChange={handleInputChange}>
            <option value="">Selecione</option>
            {maquinas.map(m => (
              <option key={m.id} value={m.id}>{m.descricao}</option>
            ))}
          </select>

          <label>Técnico</label>
          <select name="tecnico" value={formData.tecnico} onChange={handleInputChange}>
            <option value="">Selecione</option>
            {tecnicos.map(t => (
              <option key={t.id} value={t.id}>{t.nome}</option>
            ))}
          </select>

          <label>Prioridade</label>
          <select name="nivel" value={formData.nivel} onChange={handleInputChange}>
            <option value="">Selecione</option>
            <option value="1">Alta</option>
            <option value="2">Média</option>
            <option value="3">Baixa</option>
          </select>

          <label>Descrição</label>
          <input type="text" name="descricao" value={formData.descricao} onChange={handleInputChange} />

          <button className='button' onClick={handleSubmit}>Abrir chamado</button>
        </div>
      </Modal>

      <Menu />
      <div className='abaChamado'>
        <div className="container-chamados">
          <h1>Chamados</h1>

          <div className="mini-navbar">
            <button className={`tab-button ${activeTab === 'todos' ? 'active' : ''}`} onClick={() => setActiveTab('todos')}>Todos</button>
            <button className={`tab-button ${activeTab === 'meus' ? 'active' : ''}`} onClick={() => setActiveTab('meus')}>Meus</button>
          </div>

          <div className="conteudo-chamado">
            <div className="filter">
              <button onClick={toggleDropdown} className='but_filtro'><img src={filtro} alt="Filtro" /></button>
              <button onClick={() => setModalOpen(true)} className='abrir'>Abrir Chamado</button>
              {isOpen && (
                <div className="filtro-opcoes">
                  {/* Opção para limpar filtro */}
                  <div
                    onClick={() => selecionarFiltro('')}
                    className={filtroPrioridade === '' ? 'selected' : ''}
                    style={{ cursor: 'pointer', fontWeight: filtroPrioridade === '' ? 'bold' : 'normal' }}
                  >
                    Todos
                  </div>
                  <div
                    onClick={() => selecionarFiltro('Alta')}
                    className={filtroPrioridade === 'Alta' ? 'selected' : ''}
                    style={{ cursor: 'pointer', fontWeight: filtroPrioridade === 'Alta' ? 'bold' : 'normal' }}
                  >
                    Alta
                  </div>
                  <div
                    onClick={() => selecionarFiltro('Média')}
                    className={filtroPrioridade === 'Média' ? 'selected' : ''}
                    style={{ cursor: 'pointer', fontWeight: filtroPrioridade === 'Média' ? 'bold' : 'normal' }}
                  >
                    Média
                  </div>
                  <div
                    onClick={() => selecionarFiltro('Baixa')}
                    className={filtroPrioridade === 'Baixa' ? 'selected' : ''}
                    style={{ cursor: 'pointer', fontWeight: filtroPrioridade === 'Baixa' ? 'bold' : 'normal' }}
                  >
                    Baixa
                  </div>
                </div>
              )}
            </div>

            <div className="chamados">
              {currentItems.map((chamado) => (
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
              {currentItems.length === 0 && <p>Nenhum chamado encontrado para o filtro selecionado.</p>}
            </div>
            <div className="pagination">
              <button onClick={goPrev} disabled={currentPage === 1}><img src={arrow} alt="Anterior" className="arrow left" /></button>

              {[...Array(totalPages)].map((_, idx) => {
                const page = idx + 1;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={page === currentPage ? 'active' : ''}
                  >
                    {page}
                  </button>
                );
              })}

              <button onClick={goNext} disabled={currentPage === totalPages}><img src={arrow} alt="Próximo" className="arrow right" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
