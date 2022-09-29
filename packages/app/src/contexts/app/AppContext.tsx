import React, { createContext } from 'react';

type AppContextTypes = {
  appVersion?: string;
  children?: React.ReactNode;
};

export const AppContext = createContext<AppContextTypes>({});

export const AppProvider: React.FC<AppContextTypes> = (props) => {
  const { children, appVersion } = props;
  return (
    <AppContext.Provider value={{ appVersion }}>{children}</AppContext.Provider>
  );
};
