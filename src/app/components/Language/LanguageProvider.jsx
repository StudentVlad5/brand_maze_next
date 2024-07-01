'use client'
import { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageStatus = ({ children }) => {
const [language, setLanguage] = useState('en');
  useEffect(() => {
      window?.localStorage?.getItem('chosenLanguage')
          ? setLanguage(window?.localStorage?.getItem('chosenLanguage'))
          : setLanguage('en');
  }, []);

  useEffect(() => {
            window?.localStorage?.setItem('chosenLanguage', language)
  }, [language]);

  return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
          {children}
      </LanguageContext.Provider>
  );
};
