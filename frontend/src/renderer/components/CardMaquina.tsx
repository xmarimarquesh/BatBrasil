import '../css/maquina.css';

interface CardMaquinaProps {
  id: number;
  descricao: string;
  dataCompra: string;
  idSetor: string;
}

export default function CardChamado({ id, descricao, dataCompra, idSetor }: CardMaquinaProps) {
  
  const dataFormatada = new Date(dataCompra).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year:
       'numeric',
    });


  return (
    <div className="card-chamado">
      <div className="coluna-esquerda">
        <strong className='id'><div className='hash'>#</div>{id}</strong>
        <strong>{descricao}</strong>
      </div>
      <div className="coluna-centro">
        <p><strong>Data compra:</strong>{dataFormatada}</p>
      </div>
      <div className="coluna-direita">
        <p className="data"><strong>{idSetor}</strong></p>
      </div>
    </div>
  );
};

