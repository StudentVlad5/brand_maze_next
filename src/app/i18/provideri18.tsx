
import { PropsWithChildren } from 'react';
import { I18nextProvider } from "react-i18next";
import i18n from "../i18/i18n";

export default function Provideri18({children } : PropsWithChildren) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}