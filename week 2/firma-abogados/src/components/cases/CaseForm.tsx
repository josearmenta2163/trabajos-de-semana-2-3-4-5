import React, { useState } from "react";
import type { Case, Client } from "../../types";

interface Props {
  addCase: (c: Case) => void;
  clients: Client[];
}

const CaseForm: React.FC<Props> = ({ addCase, clients }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || clientId === 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    addCase({ id: Date.now(), title, description, clientId });
    setTitle("");
    setDescription("");
    setClientId(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input placeholder="Título del caso" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
      <select value={clientId} onChange={e => setClientId(Number(e.target.value))}>
        <option value={0}>Selecciona un cliente</option>
        {clients.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button type="submit">Agregar Caso</button>
    </form>
  );
};

export default CaseForm;