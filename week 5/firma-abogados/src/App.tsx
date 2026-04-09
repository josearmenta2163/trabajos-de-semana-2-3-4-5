import { Layout } from './components/Layout/Layout';
import { SettingsPanel } from './components/SettingsPanel/SettingsPanel';
import { Card } from './components/Card/Card';
import { Form } from './components/form/form';

// DATOS
const clientes = [
  { id: '1', nombre: 'Juan Pérez', caso: 'Divorcio', estado: 'Activo' },
  { id: '2', nombre: 'María Gómez', caso: 'Laboral', estado: 'Pendiente' },
];

const App = () => {
  return (
    <Layout sidebar={<SettingsPanel />}>
      <h1>⚖️ Firma de Abogados</h1>

      {/* FORM */}
      <Form onSubmit={(values: Record<string, string>) => console.log(values)}>
        <Form.Field name="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Input />
        </Form.Field>

        <Form.Field name="caso">
          <Form.Label>Caso</Form.Label>
          <Form.Input />
        </Form.Field>

        <Form.Actions>
          <Form.Submit>Guardar</Form.Submit>
        </Form.Actions>
      </Form>

      {/* CARDS */}
      {clientes.map((c) => (
        <Card key={c.id}>
          <Card.Header>
            <Card.Title>{c.nombre}</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>{c.caso}</p>
            <p>{c.estado}</p>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

export { App };