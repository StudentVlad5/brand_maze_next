'use client'
import { useEffect, useState } from 'react';

export const useTheme = () => {
const [theme, setTheme] = useState('');

  useEffect(()=>{
      window?.localStorage?.getItem('theme') ? setTheme(window?.localStorage?.getItem('theme')) : window.matchMedia('(prefers-color-scheme: light)').matches ? setTheme('light') : setTheme('dark');
  },[]);

  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    window?.localStorage?.setItem('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window?.localStorage?.getItem('theme');
    localTheme ? setTheme(localTheme) : setTheme('light');
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
