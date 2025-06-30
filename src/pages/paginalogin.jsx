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
      navigate('/dashboard');
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
      padding: '30px', /* Mayor padding para parecerse a la imagen */
      border: '1px solid #e0e0e0', /* Borde más sutil */
      borderRadius: '12px', /* Bordes más redondeados */
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)', /* Sombra más pronunciada */
      backgroundColor: 'white', /* Fondo blanco */
      fontFamily: 'Arial, sans-serif' /* Fuente similar */
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px', /* Más espacio debajo del título */
        color: '#333',
        fontSize: '1.8em' /* Tamaño de fuente del título */
      }}>Acceso Estudiantes</h2>
      {mensaje && <p style={{
        color: mensaje.includes('Error') ? 'red' : 'green',
        textAlign: 'center',
        marginBottom: '15px',
        fontSize: '0.9em' /* Tamaño de fuente del mensaje */
      }}>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}> {/* Más espacio debajo del grupo */}
          <label htmlFor="legajo" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Legajo:</label> {/* Estilo de label */}
          <input
            type="text"
            id="legajo"
            value={legajo}
            onChange={(e) => setLegajo(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px', /* Mayor padding en input */
              border: '1px solid #ddd', /* Borde sutil */
              borderRadius: '6px', /* Bordes redondeados */
              boxSizing: 'border-box',
              fontSize: '1em' /* Tamaño de fuente */
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}> {/* Más espacio debajo del grupo */}
          <label htmlFor="contrasena" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Contraseña:</label>
          <div style={{ position: 'relative' }}> {/* Contenedor para el ojo */}
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
                paddingRight: '40px' /* Espacio para el ojo */
              }}
            />
            {/* Ojo para mostrar/ocultar contraseña */}
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
              {mostrarContraseña ? '👁️' : '🔒'} {/* Ícono de ojo abierto o cerrado, o candado */}
            </span>
          </div>
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '15px', /* Más padding para el botón */
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px', /* Bordes más redondeados */
          cursor: 'pointer',
          fontSize: '1.1em', /* Tamaño de fuente del botón */
          fontWeight: 'bold',
          marginBottom: '25px' /* Espacio debajo del botón */
        }}>
          Ingresar
        </button>
      </form>
      {/* Texto de recuperación de contraseña */}
      <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#777', lineHeight: '1.5' }}>
        Si te olvidaste de la contraseña ponete en contacto con la oficina Alumnos.
        <br />
        <a href="mailto:oficinaalumnos@universidad.com" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
          oficinaalumnos@universidad.com
        </a>
      </p>
    </div>
  );
};

export default PaginaLogin;