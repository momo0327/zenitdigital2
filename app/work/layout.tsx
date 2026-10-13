import type { Metadata } from 'next';
import { pageMetadata } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata(
  'Our Work',
  'Concept projects from Zenia Digital: a mobile app, a full-stack platform, an e-commerce store and a UI/UX design, each with a case study.',
  '/work',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
