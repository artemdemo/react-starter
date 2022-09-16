import React, { createContext } from 'react';
import axios from 'axios';

export type HttpClient = typeof axios;

type TransContextTypes = {
  httpClient: HttpClient;
};

export const HttpContext = createContext<TransContextTypes>({
  httpClient: axios,
});

export const HttpProvider: React.FC<TransContextTypes> = (props) => {
  const { children, httpClient } = props;
  return (
    <HttpContext.Provider value={{ httpClient }}>
      {children}
    </HttpContext.Provider>
  );
};
