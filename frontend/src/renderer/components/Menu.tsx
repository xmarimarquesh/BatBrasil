import '../css/App.css';
import linha from '../../../assets/linha.jpg'
import logo from '../../../assets/logo.png'
import notification from '../../../assets/notification.png'
import { Link, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface User {
  id: number,
  nome: string,
  funcao: number
}

function Menu() {

  const [user, setUsuario] = useState<User | null>(null)

  useEffect(() => {
    fetch("http://localhost:5000/session", {
      method: "GET",
      credentials: "include", // ESSENCIAL para enviar cookies da sessão
    })
      .then(res => res.json())
      .then(user => {
        if (!user.error) {
          setUsuario(user);
        }
      });
  }, []);

  if (!user) {
    return <p>Carregando informações da sessão...</p>;
  }

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
          <NavLink to="/home" className={({ isActive }) => isActive ? 'text_menu active' : 'text_menu'}>Dashboards</NavLink>
          <NavLink to="/chamados" className={({ isActive }) => isActive ? 'text_menu active' : 'text_menu'}>Chamados</NavLink>
          <NavLink to="/maquinas" className={({ isActive }) => isActive ? 'text_menu active' : 'text_menu'}>Máquinas</NavLink>
          </div>

          <div className='Not'>            
            {user && <h3>{user.nome}</h3>}
            <img src={notification} alt="notifications" />
            <Link to="/" className='text_menu'>Sair</Link>
          </div>
        </div>
      </>
    );
}

export default Menu;