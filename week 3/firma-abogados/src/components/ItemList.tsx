import React, { useState, useEffect } from 'react';
import type { Caso } from '../types';

export const ItemList: React.FC = () => {
  const [casos, setCasos] = useState<Caso[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data: Caso[] = [
      {
        id: 1,
        nombreCliente: "Juan Pérez",
        descripcion: "Demanda laboral",
        tipo: "Laboral",
        estado: "Activo",
      },
      {
        id: 2,
        nombreCliente: "Ana Gómez",
        descripcion: "Caso penal",
        tipo: "Penal",
        estado: "En proceso",
      },
    ];

    setCasos(data);
    setLoading(false);
  }, []);

  if (loading) return <h2>Cargando casos...</h2>;

  return (
    <div>
      <h2>Casos Legales</h2>
      <p>Total: {casos.length}</p>

      {casos.map((c) => (
        <div key={c.id}>
          <h3>{c.nombreCliente}</h3>
          <p>{c.descripcion}</p>
          <p>{c.tipo} - {c.estado}</p>
        </div>
      ))}
    </div>
  );
};