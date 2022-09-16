import en from '../translations/en.json';

export const useTranslation = () => {
  return {
    t: (key: string): string => {
      if (en.hasOwnProperty(key)) {
        // @ts-ignore
        return en[key];
      }
      return key;
    },
  };
};
