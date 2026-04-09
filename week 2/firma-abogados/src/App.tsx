// src/App.tsx
import React, { useState } from "react";
import type { Client, Case } from "./types";
import Header from "./components/shared/Header";
import ClientForm from "./components/clients/ClientForm";
import ClientList from "./components/clients/ClientList";
import CaseForm from "./components/cases/CaseForm";
import CaseList from "./components/cases/CaseList";

const App: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [cases, setCases] = useState<Case[]>([]);

  const addClient = (client: Client) => setClients([...clients, client]);
  const addCase = (c: Case) => setCases([...cases, c]);
  const deleteClient = (id: number) =>
    setClients(clients.filter((client) => client.id !== id));
  const deleteCase = (id: number) =>
    setCases(cases.filter((caseItem) => caseItem.id !== id));

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <Header />
      <h2>Clientes</h2>
      <ClientForm addClient={addClient} />
      <ClientList clients={clients} deleteClient={deleteClient} />
      <h2>Casos</h2>
      <CaseForm addCase={addCase} clients={clients} />
      <CaseList cases={cases} clients={clients} deleteCase={deleteCase} />
    </div>
  );
};

export default App;