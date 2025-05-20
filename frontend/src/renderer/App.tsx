import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Menu from './components/Menu';
import Login from "./pages/Login";
import Chamados from './pages/Chamados'; 
import Maquinas from './pages/Maquinas';

function Dashboard() {
  return (
    <>
      <Menu/>
      <div>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}

export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/chamados" element={<Chamados />} />
        <Route path="/maquinas" element={<Maquinas />} />
      </Routes>
    </Router>
  );
}
