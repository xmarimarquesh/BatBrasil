import '../css/login.css';
import linha from '../../../assets/linha.jpg'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

interface StatusItem {
  id: number;
  status: string
}

export default function Login() {

  // const [data, setData] = useState<StatusItem[]>([])
  const [ruf, setRuf] = useState<string>("")
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("http://localhost:5000/status").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, []) 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // se usar sessão no Flask
        body: JSON.stringify({ ruf }),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/home");
      } else {
        setError(data.error || "Erro ao fazer login");
      }
    } catch (err) {
      setError("Erro de rede");
    }
  };

  return (
    <>
      <div>
          <img alt="icon" src={linha} className='Imagem'/>
          <div className='Logo'>
            <img src={logo} alt="BatBrasil"/>
          </div>
        </div>

        <div className='login'>
          <form onSubmit={handleLogin} className='complogin'>
                <h2>Login</h2>
                <div className='input'>
                <label htmlFor="">RRF</label>
                <input type="number" placeholder='Digite seu RRF de funcionário...' step='1' value={ruf} onChange={(e) => setRuf(e.target.value)} required />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type='submit' className='button'>ENTRAR</button>
          </form>

            {/* {(data.length === 0) ? (
              <p>Loading..</p>
            ) : (
              data.map((estadp, i) => (
                <p key={i}>{estadp.status}</p>
              ))
            )} */}
        </div>
    </>
  );
}

