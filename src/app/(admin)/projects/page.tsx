import { Project } from '@/components/Projects/Projects';
import type { Metadata } from 'next'
import data from "../../../CONST/metadata.json";

export const metadata: Metadata = {
  title: data.projects.seoTitle,
  description: data.projects.content,
}

export default function ProjectPage() {
  return (
    <Project/>
  );
}