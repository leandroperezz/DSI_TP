const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || JSON.stringify(errorData) || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const getToken = () => {
  return localStorage.getItem('token');
};


export const loginEstudiante = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/autenticacion/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return handleResponse(response);
};

export const logoutEstudiante = async () => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/autenticacion/logout`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return handleResponse(response);
};

export const getEstudianteAutenticado = async () => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/autenticacion/estudiante`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return handleResponse(response);
};

export const registrarEstudiante = async (studentData) => {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const response = await fetch(`${API_BASE_URL}/admin/estudiantes`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(studentData),
  });
  return handleResponse(response);
};


export const getAllPasantias = async () => {
  const response = await fetch(`${API_BASE_URL}/pasantias`);
  return handleResponse(response);
};

export const getPasantiaPorId = async (id) => {
  const response = await fetch(`${API_BASE_URL}/pasantias/${id}`);
  return handleResponse(response);
};


export const getAllBecas = async () => {
  const response = await fetch(`${API_BASE_URL}/becas`);
  return handleResponse(response);
};

export const getBecaPorId = async (id) => {
  const response = await fetch(`${API_BASE_URL}/becas/${id}`);
  return handleResponse(response);
};


export const PostularPasantia = async (applicationData) => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/postulaciones/pasantia`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(applicationData),
  });
  return handleResponse(response);
};

export const PostularBeca = async (applicationData) => {
  const token = getToken();
  const response = await fetch(`${API_BASE_URL}/postulaciones/beca`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(applicationData),
  });
  return handleResponse(response);
};