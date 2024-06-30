'use client'
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { theme as Theme } from '../../baseStyles/Variables.styled';

export const ThemeContext = createContext({});

export const ThemeStatus = ({ children }) => {
  const { theme, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
    setMode(theme);
  }, [setMode, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      <ThemeProvider theme={Theme[selectedTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
