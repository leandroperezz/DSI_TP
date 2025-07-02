import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './pages/paginalogin';
import PaginaMenu from './pages/paginamenu';
import PaginaPasantia from './pages/paginapasantia';
import PaginaBeca from './pages/pasginabeca';

import { AuthProvider, useAuth } from './context/authcontext';

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
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={
            <PrivateRoute>
              <PaginaMenu />
            </PrivateRoute>
          }/>
          <Route path="/pasantias" element={
            <PrivateRoute>
              <PaginaPasantia />
            </PrivateRoute>
          } />
          <Route path="/becas" element={
            <PrivateRoute>
              <PaginaBeca />
            </PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;