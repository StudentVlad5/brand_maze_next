import React from 'react';
import { useTranslation } from 'react-i18next';

export default  function Home(language) {
  const { t } = useTranslation();

    return <h1>{t('Home')}</h1>;
}
