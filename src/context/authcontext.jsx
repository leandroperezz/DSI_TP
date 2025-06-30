import React, { createContext, useState, useEffect, useContext } from 'react';
import { loginEstudiante as apiloginEstudiante, getEstudianteAutenticado as apigetEstudianteAutenticado } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [estudiante, setEstudiante] = useState(null);
  const [token, setToken] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedEstudiante = localStorage.getItem('estudiante');
    if (storedToken && storedEstudiante) {
      setToken(storedToken);
      setEstudiante(JSON.parse(storedEstudiante));
    }
    setCarga(false);
  }, []);

  const isAuthenticated = !!token;

  const login = async (credentials) => {
    try {
      const data = await apiloginEstudiante(credentials);
      setToken(data.token);
      setEstudiante(data.estudiante);
      localStorage.setItem('token', data.token);
      localStorage.setItem('estudiante', JSON.stringify(data.estudiante));
      return { success: true, estudiante: data.estudiante };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setToken(null);
    setEstudiante(null);
    localStorage.removeItem('token');
    localStorage.removeItem('estudiante');
  };

  const reloadDataEstudiante = async () => {
    if (isAuthenticated) {
      try {
        const data = await apigetEstudianteAutenticado();
        setEstudiante(data);
        localStorage.setItem('estudiante', JSON.stringify(data));
      } catch (error) {
        console.error('Error al recargar datos del estudiante:', error);
        logout();
      }
    }
  };


  return (
    <AuthContext.Provider value={{ estudiante, token, isAuthenticated, login, logout, carga, reloadDataEstudiante }}>
      {!carga && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};