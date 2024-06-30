'use client'
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as Theme } from '../../baseStyles/Variables.styled';

export const ThemeContext = createContext({});

export const ThemeStatus = ({ children }) => {
const [theme, setTheme] = useState('light');
  useEffect(() => {
      window?.localStorage?.getItem('theme')
          ? setTheme(window?.localStorage?.getItem('theme'))
          : window.matchMedia('(prefers-color-scheme: light)').matches
            ? setTheme('light')
            : setTheme('dark');
  }, []);


  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeProvider theme={Theme[theme]}>{children}</ThemeProvider>
      </ThemeContext.Provider>
  );
};
