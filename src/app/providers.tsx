'use client';

import { PropsWithChildren } from 'react';
import { GlobalStyle } from './baseStyles/GlobalStyle';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}