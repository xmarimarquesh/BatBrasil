import React from 'react';
import '../css/chamado.css';

interface ChamadoProps {
  isOpen: boolean;
  onClose: () => void;
  chamado: any; // Dados do chamado
}

export default function Chamado({ isOpen, onClose, chamado }: ChamadoProps) {
  if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content chamadoaberto" onClick={(e) => e.stopPropagation()}>
        <h2>Detalhes do Chamado</h2>
        {chamado && (
          <div>
            <p><strong>Título:</strong> {chamado.titulo}</p>
            <p><strong>Status:</strong> {chamado.status}</p>
            <p><strong>Responsável:</strong> {chamado.responsavel}</p>
            <p><strong>Autor:</strong> {chamado.autor}</p>
            <p><strong>Data:</strong> {chamado.data}</p>
            <p><strong>Prioridade:</strong> {chamado.prioridade}</p>
          </div>
        )}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
