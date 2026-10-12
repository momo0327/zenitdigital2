'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';

/**
 * The legacy Zenit Digital navbar. The Zenia site is the primary site now and
 * ships its own header inside ZeniaShell, so this renders only on the
 * remaining legacy pages.
 *
 * Opt-in rather than opt-out: a new Zenia route gets no legacy navbar by
 * default. The previous version listed the Zenia routes to skip, so every
 * route added there showed a second header until this list was updated.
 */
const LEGACY_NAVBAR_ROUTES = [
  '/AIDev',
  '/FullstackDev',
  '/MobileDev',
  '/WebDev',
  '/privacy',
  '/terms',
];

const NavbarSwitcher: React.FC = () => {
  const pathname = usePathname();

  const isLegacyRoute = LEGACY_NAVBAR_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  return isLegacyRoute ? <Navbar /> : null;
};

export default NavbarSwitcher;
