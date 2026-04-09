export const EmptyState = ({ onClearFilters }: { onClearFilters: () => void }) => {
  return (
    <div>
      <p>No hay casos que coincidan con tus filtros.</p>
      <button onClick={onClearFilters}>Ver todos</button>
    </div>
  );
};