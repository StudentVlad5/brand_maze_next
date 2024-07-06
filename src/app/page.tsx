import React from 'react';
import {Home} from '@/components/Home/Home';
import type { Metadata } from 'next'
import data from "../CONST/metadata.json";

export const metadata: Metadata = {
  title: data.home.seoTitle,
  description: data.home.content,
}

export default function HomPage() {
  return ( 
      <Home/>  
     );
}
