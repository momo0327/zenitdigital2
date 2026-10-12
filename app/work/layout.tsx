import type { Metadata } from 'next';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Selected case studies from Zenia Digital — web platforms, mobile apps, full-stack systems, and AI integrations.',
  alternates: { canonical: '/work' },
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
