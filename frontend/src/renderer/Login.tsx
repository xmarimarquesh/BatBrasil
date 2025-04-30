import './App.css';
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
                <label htmlFor="">RRF</label>
                <input type="text" />
                <button>ENTRAR</button>
            </div>
        </div>
    </>
  );
}

