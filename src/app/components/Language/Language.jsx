// import i18next from 'i18next';
'use client'
import React, { useEffect, useState, useContext } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './Language.styled';
import { LanguageContext } from './LanguageProvider';

const Language = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState('en');
// let {language, setLanguage} = useContext(LanguageStatus); 
// console.log('language'), language;
// console.log('language', useContext(LanguageStatus));
  // useEffect(() => {
  //   const saveLanguage = localStorage.getItem('chosenLanguage');
  //   if (saveLanguage) {
  //     i18next.changeLanguage(saveLanguage);
  //     setSelectedLanguage(saveLanguage);
  //   }
  // }, []);

  // const changeLanguage = event => {
  //   const language = event.target.value;
  //   i18next.changeLanguage(language);
  //   localStorage.setItem('chosenLanguage', language);
  //   setSelectedLanguage(language);
  // };

  return (
      <LanguageContext.Consumer>
          {({ language, setLanguage }) => (
              <SelectContainerLanguage>
                  <label htmlFor="language-select"></label>
                  <SelectLanguage
                      id="language-select"
                      onChange={(e) => setLanguage(e.currentTarget.value)}
                      value={language}
                  >
                      <option value="en">En</option>
                      <option value="ua">Ua</option>
                  </SelectLanguage>
              </SelectContainerLanguage>
          )}
      </LanguageContext.Consumer>
  );
};

export default Language;
