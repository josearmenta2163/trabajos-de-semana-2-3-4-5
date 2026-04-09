import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

const ConfigContext = createContext({});

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  return <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>;
};

export const useConfig = () => useContext(ConfigContext);