import '../App.css';
import linha from '../../../assets/linha.jpg'
import logo from '../../../assets/logo.png'

function Menu() {
    return (
      <>
        <div className='Menu'>
          <img alt="icon" src={linha} className='Imagem'/>
          <div className='Logo'>
            <img src={logo} alt="BatBrasil"/>
          </div>
        </div>
        <div>
          <div>
            <a href="">Dashboards</a>
            <a href="">Chamados</a>
            <a href="">Máquinas</a>
          </div>
          <div>
            <img src="../../../assets/notification.png" alt="" />
          </div>
        </div>
      </>
    );
}

export default Menu;