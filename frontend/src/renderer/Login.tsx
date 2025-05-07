import './css/login.css';
import linha from '../../assets/linha.jpg'
import logo from '../../assets/logo.png'

export default function Login() {
  return (
    <>
      <div>
          <img alt="icon" src={linha} className='Imagem'/>
          <div className='Logo'>
            <img src={logo} alt="BatBrasil"/>
          </div>
        </div>

        <div className='login'>
            <div className='complogin'>
                <h2>Login</h2>
                <div className='input'>
                <label htmlFor="">RRF</label>
                <input type="number" placeholder='Digite seu RRF de funcionário...' step='1'/>
                </div>
                <button>ENTRAR</button>
            </div>
        </div>
    </>
  );
}

