import { sortOptions } from '../data/items.ts';
import type { SortOption } from '../types';

interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortSelector = ({ value, onChange }: SortSelectorProps) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as SortOption)}>
      {sortOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};