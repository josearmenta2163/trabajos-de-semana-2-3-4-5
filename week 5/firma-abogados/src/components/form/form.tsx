import { createContext, useContext, useState } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

type FormValues = Record<string, string>;

type FormContextType = {
  values: FormValues;
  setValue: (name: string, value: string) => void;
} | null;

type FieldContextType = { name: string } | null;

type FormRootProps = {
  children: ReactNode;
  onSubmit: (values: FormValues) => void;
};

type FieldProps = {
  children: ReactNode;
  name: string;
};

type ChildrenProps = {
  children: ReactNode;
};

const FormContext = createContext<FormContextType>(null);
const FieldContext = createContext<FieldContextType>(null);

const FormRoot = ({ children, onSubmit }: FormRootProps) => {
  const [values, setValues] = useState<FormValues>({});

  const setValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >
      <FormContext.Provider value={{ values, setValue }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};

const Field = ({ children, name }: FieldProps) => (
  <FieldContext.Provider value={{ name }}>{children}</FieldContext.Provider>
);

const Label = ({ children }: ChildrenProps) => <label>{children}</label>;

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const field = useContext(FieldContext);
  const form = useContext(FormContext);

  if (!field || !form) return null;

  return (
    <input
      {...props}
      name={field.name}
      onChange={(e) => form.setValue(field.name, e.target.value)}
    />
  );
};

const Actions = ({ children }: ChildrenProps) => <div>{children}</div>;

const Submit = ({ children }: ChildrenProps) => (
  <button type="submit">{children}</button>
);

export const Form = Object.assign(FormRoot, {
  Field,
  Label,
  Input,
  Actions,
  Submit,
});