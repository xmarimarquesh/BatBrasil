import '../css/App.css';

interface CardChamadoProps {
  titulo: string;
  status: string;
  responsavel: string;
  autor: string;
  data: string;
  prioridade: string;
}

export default function CardChamado ({ titulo, status, responsavel, autor, data, prioridade } : CardChamadoProps) {
  const statusColor = {
    'Em aberto': 'red',
    'Em andamento': 'goldenrod',
    'Concluído': 'green',
  }[status];

  const prioridadeColor = {
    'Urgente': 'orange',
    'Média': 'yellowgreen',
    'Fácil': 'lime',
  }[prioridade];

  return (
    <div className="card-chamado">
      <div className="coluna-esquerda">
        <strong>{titulo}</strong>
        <span className="status" style={{ color: statusColor }}>{status}</span>
      </div>
      <div className="coluna-centro">
        <p><strong>Responsável:</strong> {responsavel}</p>
        <p><strong>Por:</strong> {autor}</p>
      </div>
      <div className="coluna-direita">
        <p className="data"><strong>{data}</strong></p>
        <div className="prioridade">
          <span className="bolinha" style={{ backgroundColor: prioridadeColor }}></span>
          <span>{prioridade}</span>
        </div>
      </div>
    </div>
  );
};

