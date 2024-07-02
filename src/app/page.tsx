'use client'
import React, {useContext} from 'react';
import { Context } from './components/Language/LanguageContext';

import Home from './components/Home/Home';

export default function HomPage() {
const { language } = useContext(Context)
console.log("language", language);
  return ( 
      <Home language={language}/>       
  );
}
