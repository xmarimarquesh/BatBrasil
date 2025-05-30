import '../css/menu.css'

import linha from '../../../assets/linha.jpg'
import logo from '../../../assets/logo.png'
import notification from '../../../assets/notification.png'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Notification from './Notification';
import React, { useEffect, useState } from 'react';

import { useUser } from "./UserContext";


function Menu() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = () => {
    setUser(null);

    navigate('/');
  };

  const { user } = useUser();

    return (
      <>
        <Notification
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Notificações">
          <div className='modal'>
            <p>notification 1</p>
            <p>notification 3</p>
            <p>notification 5</p>
            <p>notification 2</p>
            <p>notification 6</p>
          </div>
        </Notification>
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
            <button onClick={() => setModalOpen(true)}><img src={notification} alt="notifications" /></button>
            <button onClick={handleLogout} className='text_menu'>
              Sair
            </button>
          </div>
        </div>
      </>
    );
}

export default Menu;