import type { Metadata } from 'next';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Client Portal',
  alternates: { canonical: '/portal' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
