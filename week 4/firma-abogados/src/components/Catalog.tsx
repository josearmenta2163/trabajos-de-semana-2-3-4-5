import { useState, useMemo } from 'react';
import { items as initialItems } from '../data/items.ts';
import type { Category, Item, SortOption } from '../types';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { SortSelector } from './SortSelector';
import { ItemList } from './ItemList';

export const Catalog = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('all');
  const [onlyActive, setOnlyActive] = useState(false);
  const [sort, setSort] = useState<SortOption>('name-asc');

  const processedItems = useMemo(() => {
    let result = [...items];

    if (search) {
      result = result.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'all') {
      result = result.filter(i => i.category === category);
    }

    if (onlyActive) {
      result = result.filter(i => i.isAvailable);
    }

    if (sort === 'name-asc') result.sort((a,b)=>a.name.localeCompare(b.name));
    if (sort === 'name-desc') result.sort((a,b)=>b.name.localeCompare(a.name));
    if (sort === 'price-asc') result.sort((a,b)=>a.price-b.price);
    if (sort === 'price-desc') result.sort((a,b)=>b.price-a.price);
    if (sort === 'rating') result.sort((a,b)=>b.rating-a.rating);

    return result;
  }, [items, search, category, onlyActive, sort]);

  const handleDelete = (id: number) => {
    setItems((prev: Item[]) => prev.filter((i: Item) => i.id !== id));
  };

  const handleView = (id: number) => {
    alert('Ver caso ' + id);
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setOnlyActive(false);
    setSort('name-asc');
  };

  return (
    <div>
      <h1>⚖️ Firma de Abogados</h1>

      <SearchBar value={search} onChange={setSearch} />

      <FilterPanel
        selectedCategory={category}
        onCategoryChange={setCategory}
        showOnlyAvailable={onlyActive}
        onAvailableChange={setOnlyActive}
        onClearFilters={clearFilters}
      />

      <SortSelector value={sort} onChange={setSort} />

      <ItemList
        items={processedItems}
        onDelete={handleDelete}
        onView={handleView}
        onClearFilters={clearFilters}
      />
    </div>
  );
};