import React from 'react';
// import { Plus_Jakarta_Sans } from 'next/font/google';
import { Sidebar } from './components/Sidebar/Sidebar';
// import './globals.css';
import { ThemeStatus } from './components/ThemeStatus/ThemeProvider';
import StyledComponentRegistry from '../lib/registry';
import { Providers } from './providers';
import HeaderComp from './components/Header/Header';
 

// const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeStatus>
      <body>
        <StyledComponentRegistry>
          <HeaderComp/>
          <Sidebar />
          <Providers>{children}</Providers>
        </StyledComponentRegistry>
      </body>
      </ThemeStatus>
    </html>
  );
}
