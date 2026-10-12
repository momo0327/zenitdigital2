'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';

/**
 * The legacy Zenit Digital navbar. The Zenia site is the primary site now and
 * ships its own header inside ZeniaShell, and /zenit mounts its own v2 navbar,
 * so this renders only on the remaining legacy pages.
 *
 * Opt-in rather than opt-out: a new Zenia route gets no legacy navbar by
 * default. The previous version listed the Zenia routes to skip, so every
 * route added there showed a second header until this list was updated.
 */
const LEGACY_NAVBAR_ROUTES = [
  '/AIDev',
  '/ContactPage',
  '/FullstackDev',
  '/MobileDev',
  '/WebDev',
  '/faqs',
  '/privacy',
  '/terms',
  // /zenit itself mounts Navbar2; its sub-pages carry no navbar of their own.
  '/zenit/about',
  '/zenit/services',
  '/zenit/work',
];

const NavbarSwitcher: React.FC = () => {
  const pathname = usePathname();

  const isLegacyRoute = LEGACY_NAVBAR_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  return isLegacyRoute ? <Navbar /> : null;
};

export default NavbarSwitcher;
