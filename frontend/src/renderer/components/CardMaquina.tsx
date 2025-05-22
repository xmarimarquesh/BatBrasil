import '../css/maquina.css';

interface CardMaquinaProps {
  id: number;
  descricao: string;
  dataCompra: string;
  idSetor: string;
  data: string;

}

export default function CardChamado({ id, descricao, dataCompra, idSetor, data }: CardMaquinaProps) {


  return (
    <div className="card-chamado">
      <div className="coluna-esquerda">
        <strong className='id'><div className='hash'>#</div>{id}</strong>
        <strong>{descricao}</strong>
      </div>
      <div className="coluna-centro">
        <p><strong>Data compra:</strong>{data}</p>
        <p><strong>Vida útil:</strong>{dataCompra}</p>
      </div>
      <div className="coluna-direita">
        <p className="data"><strong>{idSetor}</strong></p>
      </div>
    </div>
  );
};

