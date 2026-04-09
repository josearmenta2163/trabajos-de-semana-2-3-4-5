import React, { useState } from "react";
import type { Client } from "../../types";

interface Props {
  addClient: (client: Client) => void;
}

const ClientForm: React.FC<Props> = ({ addClient }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Todos los campos son obligatorios");
      return;
    }
    addClient({ id: Date.now(), name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} />
      <button type="submit">Agregar Cliente</button>
    </form>
  );
};

export default ClientForm;