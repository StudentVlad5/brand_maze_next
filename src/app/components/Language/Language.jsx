'use client'

import { useEffect } from 'react';
import i18next from 'i18next';
import { SelectContainerLanguage, SelectLanguage } from './Language.styled';


const Language = ({ language, setLanguage }) => {

      useEffect(() => {
          const saveLanguage = localStorage.getItem('chosenLanguage');
          if (saveLanguage) {
              i18next.changeLanguage(saveLanguage);
              setLanguage(saveLanguage);
          }
      }, [setLanguage]);

      const changeLanguage = (event) => {
          const language = event;
          i18next.changeLanguage(language);
          localStorage.setItem('chosenLanguage', language);
          setLanguage(language);
      };

    return (
        <SelectContainerLanguage>
            <label htmlFor="language-select"></label>
            <SelectLanguage
                id="language-select"
                onChange={(e) => changeLanguage(e.currentTarget.value)}
                value={language}
            >
                <option value="en">En</option>
                <option value="ua">Ua</option>
            </SelectLanguage>
        </SelectContainerLanguage>
    );
};

export default Language;
