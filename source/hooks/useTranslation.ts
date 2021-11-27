import en from '../translations/en.json';

export const useTranslation = () => {
  return {
    t: (key: string) => {
      if (en.hasOwnProperty(key)) {
        return en[key];
      }
      return key;
    },
  };
};
