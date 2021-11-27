import React, { createContext } from 'react';

type TransContextTypes = {
  en: {
    [key: string]: string;
  };
};

export const TransContext = createContext<TransContextTypes>({
  en: {},
});

export const TransProvider: React.FC<TransContextTypes> = (props) => {
  const { children, en } = props;
  return (
    <TransContext.Provider value={{ en }}>{children}</TransContext.Provider>
  );
};
