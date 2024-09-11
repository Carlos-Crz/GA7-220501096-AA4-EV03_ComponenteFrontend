import { useState } from 'react';
import React, { useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Lógica de autenticación.
  const handleLogin = (e) => {
    e.preventDefault();
    // Si las credenciales son correctas, navega al Dashboard
    if (username === 'admin' && password === 'admin') {
      navigate('Dashboard'); // Navegar al Dashboard
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  useEffect(() => {
    // Añadir la clase 'body-login' al body cuando este componente se monta
    document.body.classList.add('body-login');
    
    // Eliminar la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove('body-login');
    };
  }, []);
  
  useEffect(() => {
    // Cambiar el título de la página al entrar al Login
    document.title = 'Login';
  }, []);


  return (
    <form class="formulario" action="/html/dashboard.html" onSubmit={handleLogin}>
            <h1>Inicia Sesión</h1>
            <div>
                <label class="formulario_label" for="user-name">Nombre de usuario</label>
                <input id="username" class="formulario_input" type="text" placeholder="Ingresa tu nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div>
                <label class="formulario_label" for="pass">Contraseña</label>
                <input id="password" class="formulario_input" type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>

            <div class="button">
                <input type="checkbox" id="btn-switch"/>
                <label class="lbl-switch" for="btn-switch"></label>
                <label for="" class="label">Recuerdame</label>
            </div>
            
            <button class="formulario_button" type="submit">Iniciar Sesión</button>
        </form>
  );
}

export default Login;
