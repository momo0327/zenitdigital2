import type { Metadata } from 'next';
import { CONTACT_METADATA } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = CONTACT_METADATA;

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
