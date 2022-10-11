type TENV = {
  production: boolean;
  appVersion: string;
};

declare const ENV: TENV;

declare module '*.css';
declare module '*.json';

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.md';
