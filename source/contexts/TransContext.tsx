import React, { createContext } from 'react';

type TransContextTypes = {};

export const TransContext = createContext<TransContextTypes>({});

export const TransProvider: React.FC<TransContextTypes> = (props) => {
  const { children } = props;
  return <TransContext.Provider value={{}}>{children}</TransContext.Provider>;
};
