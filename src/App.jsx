import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './pages/paginalogin';
import DashboardPage from './pages/paginamenu';

import { AuthProvider, useAuth } from './context/authcontext';

const NavBar = () => {
  const { estudiante, isAuthenticated, logout } = useAuth();
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to={isAuthenticated ? "/dashboard" : "/"} style={{ color: 'white', textDecoration: 'none', fontSize: '1.2em', fontWeight: 'bold' }}>Gestión Pasantías y Becas</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <span style={{ marginRight: '15px' }}>Hola, {estudiante?.nombre || estudiante?.legajo}</span>
        ) : (
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>Iniciar Sesión</Link>
        )}
        {isAuthenticated && (
          <button onClick={logout} style={{ background: 'none', border: '1px solid white', color: 'white', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>Cerrar Sesión</button>
        )}
      </div>
    </nav>
  );
};

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, carga } = useAuth();
  if (carga) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando autenticación...</div>;
  }
  return isAuthenticated ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } />
          {/* Aquí irán las rutas para listar pasantías, becas y formularios de postulación */}
          {/* <Route path="/pasantias" element={<PrivateRoute><InternshipListPage /></PrivateRoute>} /> */}
          {/* <Route path="/becas" element={<PrivateRoute><ScholarshipListPage /></PrivateRoute>} /> */}
          {/* <Route path="/pasantias/:id/postular" element={<PrivateRoute><InternshipApplicationForm /></PrivateRoute>} /> */}
          {/* <Route path="/becas/:id/postular" element={<PrivateRoute><ScholarshipApplicationForm /></PrivateRoute>} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;