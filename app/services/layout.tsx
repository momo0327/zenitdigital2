import type { Metadata } from 'next';
import { pageMetadata } from '@/app/constants/seo';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata(
  'Our Services',
  'Web, mobile and full-stack development from one team in Gothenburg: apps, websites and connected platforms, designed and built together.',
  '/services',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
