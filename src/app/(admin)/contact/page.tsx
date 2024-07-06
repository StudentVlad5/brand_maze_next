import { Contact } from '@/components/Contact/Contact';
import type { Metadata } from 'next'
import data from "../../../CONST/metadata.json";

export const metadata: Metadata = {
  title: data.contact.seoTitle,
  description: data.contact.content,
}

export default function ProjectPage() {
  return (
    <Contact/>
  );
}
