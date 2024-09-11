import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Gestioncategorias from './pages/Gestioncategorias';
import Gestionproductos from './pages/Gestionproductos';
import Gestionproveedores from './pages/Gestionproveedores';
import Gestioncajas from './pages/Gestioncajas';
import Gestionclientes from './pages/Gestionclientes';
import Gestionusuarios from './pages/Gestionusuarios';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de Login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para la página de Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />} />

        {/* Ruta para la página de Gestion de Categorias */}
        <Route path="/Gestioncategorias" element={<Gestioncategorias />} />
        {/* Ruta para la página de Gestion de productos */}
        <Route path="/Gestionproductos" element={<Gestionproductos />} />
        {/* Ruta para la página de Gestion de proveedores */}
        <Route path="/Gestionproveedores" element={<Gestionproveedores />} />
        {/* Ruta para la página de Gestion de Cajas */}
        <Route path="/Gestioncajas" element={<Gestioncajas />} />
        {/* Ruta para la página de Gestion de Clientes */}
        <Route path="/Gestionclientes" element={<Gestionclientes />} />
        {/* Ruta para la página de Gestion de usuarios */}
        <Route path="/Gestionusuarios" element={<Gestionusuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
