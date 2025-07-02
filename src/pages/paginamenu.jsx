import React, { useEffect } from 'react';
import { useAuth } from '../context/authcontext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PaginaMenu = () => {
  const { estudiante, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!estudiante) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando información del estudiante...</div>;
  }

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
        fontSize: '1.5em'
      }}>Bienvenido, {estudiante.nombre}</h2> 

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        marginTop: '30px',
        marginBottom: '20px'
      }}>
        <Link to="/pasantias"
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1em',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                boxSizing: 'border-box'
              }}
        >
          Inscripción a pasantía
        </Link>

        <Link to="/becas"
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1em',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                boxSizing: 'border-box'
              }}
        >
          Inscripción a beca
        </Link>

        <button
          onClick={logout}
          style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1em',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default PaginaMenu;