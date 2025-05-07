import '../App.css';
import linha from '../../../assets/linha.jpg'
import logo from '../../../assets/logo.png'
import notification from '../../../assets/notification.png'
import { Link, Route, Routes } from 'react-router-dom';



function Menu() {
    return (
      <>
        <div className='AbaSuperior'>
          <img alt="icon" src={linha} className='Imagem'/>
          <div className='Logo'>
            <img src={logo} alt="BatBrasil"/>
          </div>
        </div>
        <div className='Menu'>
          <div className='Y'>
            <Link to="/dashboards" className='text_menu'>Dashboards</Link>
            <Link to="/chamados" className='text_menu'>Chamados</Link>
            <Link to="/maquinas" className='text_menu'>Máquinas</Link>
          </div>
          <div className='Not'>
            <img src={notification} alt="notifications" />
            <Link to="/" className='text_menu'>Sair</Link>
          </div>
        </div>
      </>
    );
}

export default Menu;