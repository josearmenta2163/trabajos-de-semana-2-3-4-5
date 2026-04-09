export const SearchBar = ({ value, onChange }: any) => {
  return (
    <input
      type="text"
      placeholder="Buscar cliente..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};