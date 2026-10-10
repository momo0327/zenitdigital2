'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';

// The Zenia site is the primary site and ships its own header inside
// ZeniaShell, so the legacy Navbar must stay out of its routes.
const ZENIA_ROUTES = ['/', '/about', '/services', '/portal'];

/**
 * Renders the legacy Navbar only on the remaining Zenit Digital pages. The
 * Zenia routes bring their own header, and /zenit mounts its own v2 navbar.
 */
const NavbarSwitcher: React.FC = () => {
  const pathname = usePathname();

  if (ZENIA_ROUTES.includes(pathname) || pathname === '/zenit') {
    return null;
  }

  return <Navbar />;
};

export default NavbarSwitcher;
