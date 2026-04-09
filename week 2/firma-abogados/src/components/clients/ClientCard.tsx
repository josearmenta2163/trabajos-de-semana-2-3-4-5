import React from "react";
import type { Client } from "../../types";

interface Props {
  client: Client;
  deleteClient: (id: number) => void;
}

const ClientCard: React.FC<Props> = ({ client, deleteClient }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "0.5rem", marginBottom: "0.5rem" }}>
      <p><strong>Nombre:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Teléfono:</strong> {client.phone}</p>
      <button onClick={() => deleteClient(client.id)}>Eliminar</button>
    </div>
  );
};

export default ClientCard;