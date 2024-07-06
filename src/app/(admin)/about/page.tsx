import { About } from '@/components/About/About';
import type { Metadata } from 'next'
import data from "../../../CONST/metadata.json";

export const metadata: Metadata = {
  title: data.about.seoTitle,
  description: data.about.content,
}

export default function AboutPage() {
  return (
    <About/>
  );
}
