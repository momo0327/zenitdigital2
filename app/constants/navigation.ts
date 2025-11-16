/**
 * Navigation Constants
 *
 * Centralized navigation items, menu items, and social links
 * Single source of truth for all navigation across the site
 */

// Main Navigation Items
export const MAIN_NAV_ITEMS = [
  {
    label: 'Platform',
    href: '/platform',
    ariaLabel: 'Go to platform page',
  },
  {
    label: 'About',
    href: '/about',
    ariaLabel: 'Learn about us',
  },
  {
    label: 'Explore',
    href: '/explore',
    ariaLabel: 'Explore our features',
  },
  {
    label: 'Demo',
    href: '/demo',
    ariaLabel: 'Try our demo',
  },
] as const;

// Center Navigation Items (from navbar)
export const CENTER_NAV_ITEMS = [
  {
    label: 'Platform',
    href: '/platform',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'About us',
    href: '/about',
  },
] as const;

// Services Navigation
export const SERVICES_NAV = [
  {
    label: 'Web Development',
    href: '/WebDev',
    shortLabel: 'Web',
    description: 'Custom web applications and websites',
  },
  {
    label: 'Mobile Development',
    href: '/MobileDev',
    shortLabel: 'Mobile',
    description: 'iOS and Android mobile applications',
  },
  {
    label: 'Fullstack Development',
    href: '/FullstackDev',
    shortLabel: 'Fullstack',
    description: 'End-to-end development solutions',
  },
] as const;

// Social Media Links
export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/zenitdigital',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/zenitdigital',
    icon: 'twitter',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/zenitdigital',
    icon: 'github',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/zenitdigital',
    icon: 'instagram',
  },
] as const;

// Footer Navigation Structure
export const FOOTER_NAV = {
  services: [
    { label: 'Web Development', href: '/WebDev' },
    { label: 'Mobile Development', href: '/MobileDev' },
    { label: 'Fullstack Development', href: '/FullstackDev' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/#work' },
    { label: 'Contact', href: '/ContactPage' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Documentation', href: '/docs' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
} as const;

// Quick Action Links (CTA buttons in navigation)
export const QUICK_ACTIONS = {
  letsTalk: {
    label: "Let's Talk",
    href: '/ContactPage',
    variant: 'outline' as const,
  },
  getStarted: {
    label: 'Get Started',
    href: '/ContactPage',
    variant: 'primary' as const,
  },
  demo: {
    label: 'View Demo',
    href: '/demo',
    variant: 'secondary' as const,
  },
} as const;

// Breadcrumb Configuration
export const BREADCRUMBS = {
  home: { label: 'Home', href: '/' },
  services: { label: 'Services', href: '/services' },
  webDev: { label: 'Web Development', href: '/WebDev' },
  mobileDev: { label: 'Mobile Development', href: '/MobileDev' },
  fullstackDev: { label: 'Fullstack Development', href: '/FullstackDev' },
  contact: { label: 'Contact', href: '/ContactPage' },
  about: { label: 'About', href: '/about' },
} as const;

// Mobile Menu Items (includes additional items not in desktop nav)
export const MOBILE_MENU_ITEMS = [
  ...MAIN_NAV_ITEMS,
  {
    label: 'Services',
    href: '#',
    ariaLabel: 'View our services',
    submenu: SERVICES_NAV,
  },
  {
    label: 'Contact',
    href: '/ContactPage',
    ariaLabel: 'Contact us',
  },
] as const;

// Type exports
export type NavItem = typeof MAIN_NAV_ITEMS[number];
export type ServiceNav = typeof SERVICES_NAV[number];
export type SocialLink = typeof SOCIAL_LINKS[number];
