import React from 'react';
// import { Plus_Jakarta_Sans } from 'next/font/google';
import { Sidebar } from './components/Sidebar/Sidebar';
import './globals.css';


// const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Sidebar />
            {children}
      </body>
    </html>
  );
}
