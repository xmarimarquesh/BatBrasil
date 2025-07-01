import React, { useState } from 'react';
import '../css/chamado.css';

// Ícones (opcional, mas recomendado - usando SVGs simples como exemplo)
const IconUser = () => <svg /* SVG de usuário */ />;
const IconCalendar = () => <svg /* SVG de calendário */ />;
const IconTag = () => <svg /* SVG de tag/etiqueta */ />;

interface ChamadoProps {
  isOpen: boolean;
  onClose: () => void;
  chamado: any; 
}

export default function Chamado({ isOpen, onClose, chamado }: ChamadoProps) {
  if (!isOpen) return null;

  // Estado para controlar o status selecionado no dropdown
  const [selectedStatus, setSelectedStatus] = useState(chamado.StatusCurrent);

  const handleStatusUpdate = () => {
    // Aqui você adicionaria a lógica para enviar a atualização para o backend
    console.log(`Status do chamado ${chamado.id} atualizado para: ${selectedStatus}`);
    alert(`Status atualizado para: ${selectedStatus}`);
    // O ideal seria fechar o modal ou recarregar os dados após a confirmação do backend
    // onClose(); 
  };
  
  // Lógica para a Linha do Tempo
  const statusSteps = ['Aberto', 'Em andamento', 'Concluído'];
  const currentStatusIndex = statusSteps.indexOf(chamado.StatusCurrent);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-revamped" onClick={e => e.stopPropagation()}>
        
        {/* CABEÇALHO DO MODAL */}
        <div className="modal-header">
          <h2>Detalhes do Chamado</h2>
          <p className="header-title">{chamado.Descricao}</p>
        </div>

        {/* LINHA DO TEMPO DE STATUS */}
        <div className="timeline-container">
          <h3>Status do Chamado</h3>
          <div className="timeline-status">
            <div className="timeline-line">
                <div className="timeline-line-progress" style={{ width: `${currentStatusIndex * 50}%` }}></div>
            </div>
            {statusSteps.map((step, index) => (
              <div 
                key={step} 
                className={`timeline-step ${index <= currentStatusIndex ? 'completed' : ''} ${index === currentStatusIndex ? 'active' : ''}`}
              >
                <div className="step-circle"></div>
                <div className="step-label">{step}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CORPO COM DETALHES */}
        <div className="modal-body">
          <div className="details-grid">
            <div className="detail-item">
              <strong>Responsável Técnico:</strong>
              <p>{chamado.NomeTecnico || 'Não atribuído'}</p>
            </div>
            <div className="detail-item">
              <strong>Autor:</strong>
              <p>{chamado.NomeFuncionario}</p>
            </div>
            <div className="detail-item">
              <strong>Data da Abertura:</strong>
              <p>{new Date(chamado.DataCriacao).toLocaleDateString()}</p>
            </div>
            <div className="detail-item">
                <strong>Prioridade:</strong>
                <div className={`prioridade prioridade-${chamado.Nivel?.toLowerCase()}`}>
                    <span className="bolinha"></span> {chamado.Nivel}
                </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO DE ATUALIZAÇÃO PARA O TÉCNICO */}
        <div className="update-status-section">
          <label htmlFor="status-select">Atualizar Status:</label>
          <div className="update-controls">
            <select 
              id="status-select" 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="Aberto">Aberto</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
            </select>
            <button className="btn-save" onClick={handleStatusUpdate}>Salvar</button>
          </div>
        </div>

        {/* RODAPÉ DO MODAL */}
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>Fechar</button>
        </div>

      </div>
    </div>
  );
}