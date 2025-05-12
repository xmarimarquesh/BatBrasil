import '../css/App.css';
import Menu from '../components/Menu';
import CardMaquinas from '../components/CardMaquinas';
import '../css/maquinas.css';

export default function Maquinas() {
  return (
    <>
      <Menu />
      <div className='main'>
        <h1>Maquinas</h1>
        <CardMaquinas />
      </div>
    </>
  );
}
