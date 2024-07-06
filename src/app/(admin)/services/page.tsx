import { Services } from '@/components/Services/Services';
import type { Metadata } from 'next'
import data from "../../../CONST/metadata.json";

export const metadata: Metadata = {
  title: data.services.seoTitle,
  description: data.services.content,
}

export default function ProjectPage() {
  return (
    <Services/>
  );
}