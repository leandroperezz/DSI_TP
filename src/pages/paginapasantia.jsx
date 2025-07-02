import React, { useEffect, useState } from 'react';
import { getAllPasantias } from '../services/api';
import { Link } from 'react-router-dom';

const PaginaPasantia = () => {
  const [pasantias, setPasantias] = useState([]);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPasantias = async () => {
      try {
        const data = await getAllPasantias();
        setPasantias(data);
      } catch (err) {
        setError('Error al cargar las pasantías: ' + err.message);
      } finally {
        setCarga(false);
      }
    };
    fetchPasantias();
  }, []);

  if (carga) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando pasantías disponibles...</div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Pasantías Disponibles</h1>
      {pasantias.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No hay pasantías disponibles en este momento.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {pasantias.map(pasantia => (
            <div key={pasantia.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: '0', marginBottom: '10px' }}>{pasantia.requisitos}</h3>
              <p><strong>Empresa:</strong> {pasantia.company ? pasantia.company.nombre_empresa : 'Desconocida'}</p>
              <p><strong>Duración:</strong> {pasantia.duracion}</p>
              <p><strong>Fecha de Inicio:</strong> {new Date(pasantia.fechaInicio).toLocaleDateString()}</p>
              <p><strong>Estado:</strong> {pasantia.estado}</p>
              <Link to={`/pasantias/${pasantia.id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 12px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                Ver Detalles / Postularse
              </Link>
            </div>
          ))}
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/menu" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#6c757d', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Volver al Menú
        </Link>
      </div>
    </div>
  );
};

export default PaginaPasantia;