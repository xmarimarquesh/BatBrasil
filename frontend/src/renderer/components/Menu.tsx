import '../App.css';
import linha from '../../../assets/linha.jpg'
import logo from '../../../assets/logo.png'
import notification from '../../../assets/notification.png'

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
          <div>
            <a href="" className='text_menu'>Dashboards</a>
            <a href="" className='text_menu'>Chamados</a>
            <a href="" className='text_menu'>Máquinas</a>
          </div>
          <div className='Not'>
            <img src={notification} alt="notifications" />
            <a href="" className='text_menu'>Sair</a>
          </div>
        </div>
      </>
    );
}

export default Menu;