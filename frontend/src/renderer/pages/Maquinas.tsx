import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import CardMaquina from '../components/CardMaquina';
import CardHistMaquina from '../components/CardHistMaquina';
import '../css/maquina.css';
import Modal from '../components/Modal';

// --- INTERFACES ---
interface IMaquina {
  ID: number;
  Descricao: string;
  DataCompra: string;
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

interface ISetor {
  id: number;
  nome: string;
}

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [maquinaSelecionadaId, setMaquinaSelecionadaId] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const [maquinas, setMaquinas] = useState<IMaquina[]>([]);
  const [chamados, setChamadosTodos] = useState<IChamado[]>([]);
  const [setores, setSetores] = useState<ISetor[]>([]);

  const [novaDescricao, setNovaDescricao] = useState('');
  const [novaDataCompra, setNovaDataCompra] = useState('');
  const [novoSetorId, setNovoSetorId] = useState('');

  const fetchMaquinas = () => {
    fetch('http://localhost:5000/maquinas')
      .then(response => response.json())
      .then(data => setMaquinas(data))
      .catch(error => console.error('Erro ao buscar máquinas:', error));
  };
  
  useEffect(() => {
    fetchMaquinas();

    fetch('http://localhost:5000/chamados')
      .then(response => response.json())
      .then(data => setChamadosTodos(data))
      .catch(error => console.error('Erro ao buscar chamados:', error));

    
    fetch('http://localhost:5000/setores').then(res => res.json()).then(setSetores);
  }, []);

  const handleSelecionarMaquina = (id: number) => {
    setMaquinaSelecionadaId((prev) => (prev === id ? null : id));
  };

  const handleCadastrarMaquina = (e: React.FormEvent) => {
    e.preventDefault();

    if (!novaDescricao || !novaDataCompra || !novoSetorId) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    const novaMaquina = {
        Descricao: novaDescricao,
        DataCompra: novaDataCompra,
        IDSetor: parseInt(novoSetorId, 10)
    };

    fetch('http://localhost:5000/maquinas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaMaquina)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Falha ao cadastrar máquina');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
        setModalOpen(false);
        fetchMaquinas();
        setNovaDescricao('');
        setNovaDataCompra('');
        setNovoSetorId('');
    })
    .catch(error => {
        console.error('Erro ao cadastrar máquina:', error);
        alert('Ocorreu um erro ao cadastrar a máquina. Verifique o console.');
    });
  };

  return (
    <div className="app-container">
      <Menu />

     <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Cadastrar Nova Máquina">
        <form onSubmit={handleCadastrarMaquina}>
            <div className="cadastro-modal-body">
                <label htmlFor="nome-maquina">Nome da máquina</label>
                <input 
                    id="nome-maquina" 
                    type="text" 
                    value={novaDescricao} 
                    onChange={(e) => setNovaDescricao(e.target.value)}
                    required
                />

                <label htmlFor="data-compra">Data da compra</label>
                <input 
                    id="data-compra" 
                    type="date" 
                    value={novaDataCompra}
                    onChange={(e) => setNovaDataCompra(e.target.value)}
                    required
                />

                <label htmlFor="setor">Setor</label>
                <select 
                    name="setor" 
                    id="setor" 
                    value={novoSetorId}
                    onChange={(e) => setNovoSetorId(e.target.value)}
                    required
                >
                    <option value="" disabled>Selecione um setor</option>
                    {setores.map((setor) => (
                        <option key={setor.id} value={setor.id}>
                            {setor.nome}
                        </option>
                    ))}
                </select>
            </div>
            <div className="cadastro-modal-footer">
                <button className="btn-cadastrar" type="submit">Cadastrar</button>
            </div>
        </form>
      </Modal>

      <main className="main">
        <div className='abrir-chamado'>
          <button type="button" onClick={() => setModalOpen(true)}>Cadastrar Máquina</button>
        </div>
        <div className="maquinas">
          {maquinas.map((maquina) => (
            <div key={maquina.ID} className="card-container">
              <div onClick={() => handleSelecionarMaquina(maquina.ID)}>
                <CardMaquina 
                    id={maquina.ID} 
                    descricao={maquina.Descricao} 
                    dataCompra={maquina.DataCompra} 
                    idSetor={maquina.Setor}
                />
              </div>

              <div
                className={`historico ${maquinaSelecionadaId === maquina.ID ? 'aberto' : ''}`}
              >
                {maquinaSelecionadaId === maquina.ID && (
                  <>
                    <h4>Histórico de Chamados</h4>
                    {chamados.filter((chamado) => chamado.IDMaquina === maquina.ID).length > 0 ? (
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
                          />
                        ))
                    ) : (
                        <p>Nenhum chamado encontrado para esta máquina.</p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
