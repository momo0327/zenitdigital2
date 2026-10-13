import type { Metadata } from 'next';
import { pageMetadata } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata(
  'Client Portal',
  'The Zenia client portal: follow progress, review designs and share feedback on your project, all in one place.',
  '/portal',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
