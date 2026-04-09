import React from 'react';
import { StatsCard } from './StatsCard';
import { ItemList } from './ItemList';
import { RealTimeIndicator } from './RealTimeIndicator';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Panel de Gestión - Firma de Abogados</h1>

      <StatsCard />
      <RealTimeIndicator />
      <ItemList />
    </div>
  );
};