type TENV = {
  production: boolean;
  appVersion: string;
};

declare const ENV: TENV;

declare module '*.css';
