export interface Caso {
  id: number;
  nombreCliente: string;
  descripcion: string;
  tipo: string;
  estado: string;
}

export interface Stats {
  totalCasos: number;
  casosActivos: number;
  porcentajeActivos: number;
}

export interface RealTimeData {
  value: number;
  label: string;
  unit: string;
  lastUpdated: string;
}