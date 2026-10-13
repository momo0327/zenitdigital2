import type { Metadata } from 'next';
import { pageMetadata } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata(
  'Our Work',
  'Work from Zenia Digital: ShelfWise, a live restaurant inventory product built by our co-founder, and four concept projects, each with a case study.',
  '/work',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
