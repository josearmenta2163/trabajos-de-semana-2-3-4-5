import { categories } from '../data/items.ts';
import type { Category } from '../types';

interface FilterPanelProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  showOnlyAvailable: boolean;
  onAvailableChange: (value: boolean) => void;
  onClearFilters: () => void;
}

export const FilterPanel = ({
  selectedCategory,
  onCategoryChange,
  showOnlyAvailable,
  onAvailableChange,
  onClearFilters
}: FilterPanelProps) => {
  return (
    <div>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value as Category)}
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={showOnlyAvailable}
          onChange={(e) => onAvailableChange(e.target.checked)}
        />
        Solo activos
      </label>

      <button onClick={onClearFilters}>Limpiar</button>
    </div>
  );
};