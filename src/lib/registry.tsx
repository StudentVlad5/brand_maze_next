'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../app/baseStyles/GlobalStyle';

export default function StyledComponentRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    // @ts-ignore
    styleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined')
    return (
      <>
        <GlobalStyle />
        {children}
      </>
    );

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}