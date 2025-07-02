import React, { useEffect, useState } from 'react';
import { getAllBecas } from '../services/api';
import { Link } from 'react-router-dom';

const PaginaBeca = () => {
  const [becas, setBecas] = useState([]);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBecas = async () => {
      try {
        const data = await getAllBecas();
        setBecas(data);
      } catch (err) {
        setError('Error al cargar las becas: ' + err.message);
      } finally {
        setCarga(false);
      }
    };
    fetchBecas();
  }, []);

  if (carga) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando becas disponibles...</div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Becas Disponibles</h1>
      {becas.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No hay becas disponibles en este momento.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {becas.map(beca => (
            <div key={beca.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: '0', marginBottom: '10px' }}>{beca.descripcion_breve || 'Beca sin descripción'}</h3>
              <p><strong>Monto:</strong> ${beca.monto}</p>
              <p><strong>Duración:</strong> {beca.duracion}</p>
              <p><strong>Cupos:</strong> {beca.cupos}</p>
              <p><strong>Requisitos:</strong> {beca.requisitos}</p>
              <Link to={`/becas/${beca.id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 12px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
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

export default PaginaBeca;