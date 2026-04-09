export interface Item {
  id: number;
  name: string; // nombre del cliente
  category: string; // tipo de caso (penal, civil, laboral)
  price: number; // honorarios
  rating: number; // prioridad
  isAvailable: boolean; // activo o cerrado
  createdAt: string;
}

export type Category = 'all' | 'penal' | 'civil' | 'laboral';

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating';

export interface FilterState {
  searchTerm: string;
  category: Category;
  showOnlyAvailable: boolean;
  sortBy: SortOption;
}