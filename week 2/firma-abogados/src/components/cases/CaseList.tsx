import React from "react";
import type { Case, Client } from "../../types";
import CaseCard from "./CaseCard";

interface Props {
  cases: Case[];
  clients: Client[];
  deleteCase: (id: number) => void;
}

const CaseList: React.FC<Props> = ({ cases, clients, deleteCase }) => {
  if (cases.length === 0) return <p>No hay casos registrados</p>;
  return (
    <div>
      {cases.map(caseItem => {
        const client = clients.find(cl => cl.id === caseItem.clientId);
        return <CaseCard key={caseItem.id} c={caseItem} clientName={client ? client.name : "Desconocido"} deleteCase={deleteCase} />;
      })}
    </div>
  );
};

export default CaseList;