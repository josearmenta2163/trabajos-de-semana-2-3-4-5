import React from "react";
import type { Case } from "../../types";

interface Props {
  c: Case;
  clientName: string;
  deleteCase: (id: number) => void;
}

const CaseCard: React.FC<Props> = ({ c, clientName, deleteCase }) => (
  <div style={{ border: "1px solid #ccc", marginBottom: "0.5rem", padding: "0.5rem" }}>
    <p><strong>Título:</strong> {c.title}</p>
    <p><strong>Descripción:</strong> {c.description}</p>
    <p><strong>Cliente:</strong> {clientName}</p>
    <button onClick={() => deleteCase(c.id)}>Eliminar Caso</button>
  </div>
);

export default CaseCard;