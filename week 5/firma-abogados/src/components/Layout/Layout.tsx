import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

export const Layout = ({ children, sidebar }: LayoutProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 250 }}>{sidebar}</aside>
      <main style={{ padding: 20 }}>{children}</main>
    </div>
  );
};