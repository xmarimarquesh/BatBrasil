import '../css/cardMaquinas.css';

interface BotaoMaqProps {
  texto: string;
  tipo?: 'finalizado' | 'aberto' | 'em-andamento'; // você pode adicionar mais
}

export default function BotaoMaq({ texto, tipo = 'aberto' }: BotaoMaqProps) {
  return (
    <button className={`botao-maq ${tipo}`}>
      {texto}
    </button>
  );
}
