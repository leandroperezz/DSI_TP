import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authcontext';
import { useNavigate } from 'react-router-dom';

const PaginaLogin = () => {
  const [legajo, setLegajo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setmensaje] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const { login, isAuthenticated, carga } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!carga && isAuthenticated) {
      navigate('/menu');
    }
  }, [isAuthenticated, carga, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmensaje('');

    const result = await login({ legajo, contrasena });
    if (result.success) {
      setmensaje('Inicio de sesión exitoso.');
    } else {
      setmensaje(result.mensaje || 'Error al iniciar sesión. Legajo o contraseña incorrectos.');
    }
  };

  if (carga) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando autenticación...</div>;
  
  if (isAuthenticated) return null; 

   return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: '#333',
        fontSize: '1.8em'
      }}>Acceso Estudiantes</h2>
      {mensaje && <p style={{
        color: mensaje.includes('Error') ? 'red' : 'green',
        textAlign: 'center',
        marginBottom: '15px',
        fontSize: '0.9em'
      }}>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="legajo" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Legajo:</label>
          <input
            type="text"
            id="legajo"
            value={legajo}
            onChange={(e) => setLegajo(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              boxSizing: 'border-box',
              fontSize: '1em'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="contrasena" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Contraseña:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={mostrarContraseña ? 'text' : 'password'}
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                boxSizing: 'border-box',
                fontSize: '1em',
                paddingRight: '40px'
              }}
            />
            <span
              onClick={() => setMostrarContraseña(!mostrarContraseña)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#888'
              }}
            >
              {mostrarContraseña ? '👁️' : '🔒'}
            </span>
          </div>
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.1em',
          fontWeight: 'bold',
          marginBottom: '25px'
        }}>
          Ingresar
        </button>
      </form>
      <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#777', lineHeight: '1.5' }}>
        Si te olvidaste de la contraseña ponete en contacto con la oficina Alumnos.
        <br />
        <a style={{ color: '#353535', textDecoration: 'none', fontWeight: 'bold' }}>
          oficinaalumnos@universidad.com
        </a>
      </p>
    </div>
  );
};

export default PaginaLogin;