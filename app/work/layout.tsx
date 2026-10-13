import type { Metadata } from 'next';
import { pageMetadata } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata(
  'Our Work',
  'Work from Zenia Digital: our internal products Cal Your Friends, an app for finding the day friends are free, and ShelfWise, restaurant inventory software, plus five concept projects.',
  '/work',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
