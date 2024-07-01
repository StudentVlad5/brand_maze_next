'use client'
import React from 'react';
// import { Plus_Jakarta_Sans } from 'next/font/google';
import { Sidebar } from './components/Sidebar/Sidebar';
// import './globals.css';
import { ThemeStatus } from './components/ThemeStatus/ThemeProvider';
import { LanguageStatus,  LanguageContext} from './components/Language/LanguageProvider';
import StyledComponentRegistry from '../lib/registry';
import { Providers } from './providers';
import HeaderComp from './components/Header/Header';
import { dir } from 'i18next';
import { languages, fallbackLng } from '../i18n/settings';

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }

// const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children, params: { lng } 
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  }
}) {
  // if (languages.indexOf(lng) < 0){lng = fallbackLng};
  // if (!lng){lng = "en"};
  return (
    <LanguageStatus>
      <LanguageContext.Consumer>
        {({ language, setLanguage }) => (
        <html lang={language} dir={dir(language)}>
          <ThemeStatus>
          <body>
            <StyledComponentRegistry>
              <HeaderComp lang={language}/>
              <main>
                <Sidebar lang={language}/>
                <Providers>{children}</Providers>
              </main>
            </StyledComponentRegistry>
          </body>
          </ThemeStatus>
        </html>
        )}
      </LanguageContext.Consumer>
    </LanguageStatus>
  );
}
