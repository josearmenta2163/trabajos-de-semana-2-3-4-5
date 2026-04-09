import React, { useState, useEffect } from 'react';
import type { Stats } from '../types';

export const StatsCard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data: Stats = {
      totalCasos: 40,
      casosActivos: 25,
      porcentajeActivos: 62,
    };

    setStats(data);
    setLoading(false);
  }, []);

  if (loading) return <h2>Cargando estadísticas...</h2>;

  return (
    <div>
      <h2>Estadísticas Jurídicas</h2>

      <p>Total de casos: {stats?.totalCasos}</p>
      <p>Casos activos: {stats?.casosActivos}</p>
      <p>% activos: {stats?.porcentajeActivos}%</p>
    </div>
  );
};