import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../App.css';

function Layout({children}) {
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    // Función para ocultar el sidebar
    const toggleSidebar = () => {
        setIsSidebarHidden(!isSidebarHidden);
    };

    // Función para colapsar el sidebar
    const toggleSidebarCollapse = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const location = useLocation();

    useEffect(() => {
      // Cambiar el título de la página según la ruta actual
    switch (location.pathname) {
        case '/':
            document.title = 'Login';
            break;
        case '/Dashboard':
            document.title = 'Dashboard';
            break;
        case '/Gestioncategorias':
            document.title = 'Gestión de Categorias';
            break;
        case '/Gestionproductos':
            document.title = 'Gestión de Productos';
            break;
        case '/Gestionproveedores':
            document.title = 'Gestión de Proveedores';
            break;
        case '/Gestioncajas':
            document.title = 'Gestión de Cajas';
            break;
        case '/Gestionclientes':
            document.title = 'Gestión de Clientes';
            break;
        case '/Gestionusuarios':
            document.title = 'Gestión de Usuarios';
            break;
            default:
        document.title = 'SuperMarket';
        break;
    }
    }, [location]);

    return (
    <div>
        {/* Componente Header */}
        <Header toggleSidebar={toggleSidebar} />
        <div class="mainContainer">
            {/* Componente Sidebar */}
            <Sidebar isSidebarHidden={isSidebarHidden} isSidebarCollapsed={isSidebarCollapsed} toggleSidebarCollapse={toggleSidebarCollapse} />
            <main className={`conteiner ${isSidebarHidden ? 'expanded' : ''} ${isSidebarCollapsed ? 'expand' : ''}`}>
                {/* Contenido que se renderiza en el layout */}
                {children}
            </main>
        </div>
    </div>
    );
}

export default Layout;
