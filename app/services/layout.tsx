import type { Metadata } from 'next';

// page.jsx is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive digital services: Web Development, Mobile App Development, and Fullstack Solutions. Custom-built solutions for your business needs.',
  alternates: { canonical: '/services' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
