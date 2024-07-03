'use client'
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ThemeStatus } from './components/ThemeStatus/ThemeProvider';
import StyledComponentRegistry from '../lib/registry';
import { Providers } from './providers';
import HeaderComp from './components/Header/Header';
import { Context } from './components/Language/LanguageContext';
import  Provideri18  from './i18/provideri18';
import i18n from "./i18/i18n";

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }

// const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
  params: {
    lang: string;
    setLanguage: any;
  }
}) {
  const [language, setLanguage] = useState('en')
  const value = {
    language, setLanguage
  }
  return (

     <Context.Provider value={value}>
      <Provideri18>
        <html lang={i18n.language}>
          <ThemeStatus>
          <body>
            <StyledComponentRegistry>
              <HeaderComp lang={language} setLanguage={setLanguage}/>
              <main>
                <Sidebar/>
                <Providers>{children}</Providers>
              </main>
            </StyledComponentRegistry>
          </body>
          </ThemeStatus>
        </html>
      </Provideri18>
  </Context.Provider>
  );
}
