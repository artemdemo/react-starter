import React from 'react';

const BaseUiContext = React.createContext({});

export const BaseUiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  console.log('BaseUiProvider');
  return (
    <BaseUiContext.Provider value={{}}>{children}</BaseUiContext.Provider>
  )
};
