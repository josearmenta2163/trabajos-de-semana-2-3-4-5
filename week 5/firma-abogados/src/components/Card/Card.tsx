import type { ReactNode } from 'react';

const CardRoot = ({ children }: { children: ReactNode }) => {
  return <div style={{ border: '1px solid #ccc', padding: 10 }}>{children}</div>;
};

const Header = ({ children }: { children: ReactNode }) => <div>{children}</div>;
const Title = ({ children }: { children: ReactNode }) => <h3>{children}</h3>;
const Body = ({ children }: { children: ReactNode }) => <div>{children}</div>;
const Footer = ({ children }: { children: ReactNode }) => <div>{children}</div>;
const Actions = ({ children }: { children: ReactNode }) => <div>{children}</div>;

export const Card = Object.assign(CardRoot, {
  Header,
  Title,
  Body,
  Footer,
  Actions,
});