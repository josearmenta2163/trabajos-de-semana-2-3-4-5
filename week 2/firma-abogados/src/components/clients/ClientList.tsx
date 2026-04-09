import React from "react";
import type { Client } from "../../types";
import ClientCard from "./ClientCard";

interface Props {
  clients: Client[];
  deleteClient: (id: number) => void;
}

const ClientList: React.FC<Props> = ({ clients, deleteClient }) => {
  if (clients.length === 0) return <p>No hay clientes registrados</p>;
  return (
    <div>
      {clients.map((c) => (
        <ClientCard
          key={c.id}
          client={c}
          deleteClient={deleteClient}
        />
      ))}
    </div>
  );
};

export default ClientList;