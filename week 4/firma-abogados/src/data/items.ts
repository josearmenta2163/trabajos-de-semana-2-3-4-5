import type { Item, Category, SortOption } from '../types';

export const items: Item[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    category: 'laboral',
    price: 500000,
    rating: 3,
    isAvailable: true,
    createdAt: '2026-01-01'
  },
  {
    id: 2,
    name: 'Ana Gómez',
    category: 'penal',
    price: 800000,
    rating: 5,
    isAvailable: true,
    createdAt: '2026-02-10'
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    category: 'civil',
    price: 300000,
    rating: 2,
    isAvailable: false,
    createdAt: '2026-03-05'
  }
];

export const categories: Array<{ value: Category; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'penal', label: 'Penal' },
  { value: 'civil', label: 'Civil' },
  { value: 'laboral', label: 'Laboral' }
];

export const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: 'name-asc', label: 'Nombre A-Z' },
  { value: 'name-desc', label: 'Nombre Z-A' },
  { value: 'price-asc', label: 'Menor costo' },
  { value: 'price-desc', label: 'Mayor costo' },
  { value: 'rating', label: 'Prioridad' }
];