import React from 'react';
import { useAuth } from '../context/authcontext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { estudiante, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    
    return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>Acceso denegado. Por favor, inicia sesión.</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Bienvenido al Dashboard, {estudiante?.nombre} {estudiante?.apellido}</h1>
      <p style={{ textAlign: 'center' }}>Aquí podrás ver las pasantías y becas disponibles y gestionar tus postulaciones.</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <Link to="/pasantias" style={{ padding: '15px 25px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Ver Pasantías
        </Link>
        <Link to="/becas" style={{ padding: '15px 25px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          Ver Becas
        </Link>
      </div>

      <h3 style={{ marginTop: '40px', textAlign: 'center' }}>Tu Información:</h3>
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <p><strong>Legajo:</strong> {estudiante?.legajo}</p>
        <p><strong>DNI:</strong> {estudiante?.dni}</p>
        <p><strong>Email:</strong> {estudiante?.email}</p>
        <p><strong>Teléfono:</strong> {estudiante?.telefono}</p>
        <p><strong>Carrera:</strong> {estudiante?.carrera}</p>
        <p><strong>Año que cursa:</strong> {estudiante?.año}</p>
        <p><strong>Promedio:</strong> {estudiante?.promedio}</p>
        <p><strong>Experiencia:</strong> {estudiante?.experiencia || 'No especificada'}</p>
        <p><strong>Aptitudes:</strong> {estudiante?.aptitudes || 'No especificadas'}</p>
      </div>
    </div>
  );
};

export default DashboardPage;