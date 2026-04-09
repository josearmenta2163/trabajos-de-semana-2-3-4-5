import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

export const ItemList = ({ items, onDelete, onView, onClearFilters }: any) => {

  if (items.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div>
      {items.map((item: any) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};