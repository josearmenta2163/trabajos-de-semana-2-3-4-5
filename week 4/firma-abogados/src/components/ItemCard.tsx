export const ItemCard = ({ item, onDelete, onView }: any) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{item.name}</h3>
      <p>Tipo: {item.category}</p>
      <p>Honorarios: ${item.price}</p>
      <p>Prioridad: {item.rating}</p>

      {item.isAvailable ? (
        <p>🟢 Activo</p>
      ) : (
        <p>🔴 Cerrado</p>
      )}

      <button onClick={() => onView(item.id)}>Ver</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
};