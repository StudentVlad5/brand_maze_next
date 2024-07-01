import React from 'react';
import { useTranslation } from '../i18n'


export default async  function Home({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng)
  return ( 
    <>
      <h1>{t('Home page')}</h1>
    </>
  );
}
