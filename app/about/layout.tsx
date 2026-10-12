import type { Metadata } from 'next';
import { ABOUT_METADATA } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = ABOUT_METADATA;

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
