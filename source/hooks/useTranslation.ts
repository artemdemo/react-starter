import { useContext } from 'react';
import { TransContext } from '../contexts/TransContext';

export const useTranslation = () => {
  const trans = useContext(TransContext);
  return {
    t: (key: string) => {
      if (trans.en.hasOwnProperty(key)) {
        return trans.en[key];
      }
      return key;
    },
  };
};
