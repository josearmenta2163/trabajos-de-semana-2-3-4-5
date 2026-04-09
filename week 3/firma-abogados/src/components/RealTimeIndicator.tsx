import React, { useState, useEffect } from 'react';
import type { RealTimeData } from '../types';

export const RealTimeIndicator: React.FC = () => {
  const [data, setData] = useState<RealTimeData | null>(null);

  useEffect(() => {
    const load = () => {
      const info: RealTimeData = {
        value: Math.floor(Math.random() * 10),
        label: "Citas en curso",
        unit: "citas",
        lastUpdated: new Date().toISOString(),
      };

      setData(info);
    };

    load();
    const interval = setInterval(load, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!data) return <h2>Cargando...</h2>;

  return (
    <div>
      <h2>Tiempo Real</h2>
      <h1>{data.value} {data.unit}</h1>
      <p>{data.label}</p>
      <small>{new Date(data.lastUpdated).toLocaleTimeString()}</small>
    </div>
  );
};