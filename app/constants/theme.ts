/**
 * Theme Constants
 *
 * Centralized color palette, spacing, and design tokens for Zenit Digital
 * Following Next.js 15 and Tailwind CSS 4 best practices
 */

// Brand Colors - Primary palette for each service
export const BRAND_COLORS = {
  web: '#FF5147',
  mobile: '#BEA1FC',
  fullstack: '#B4FFA8',
  accent: '#9AC2FF',
} as const;

// Background Colors - Dark theme backgrounds for each service
export const BACKGROUND_COLORS = {
  web: '#240000',
  mobile: '#120128',
  fullstack: '#051E01',
  dark: '#0A0D24',
  darkAlt: '#010A1E',
  darkNeutral: '#0D0D0D',
} as const;

// UI Colors - Common interface colors
export const UI_COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    700: '#374151',
    800: '#1F2937',
  },
} as const;

// Gradients - For StaggeredMenu and other gradient effects
export const GRADIENTS = {
  web: ['#FF5147', '#FF8A47'],
  mobile: ['#B19EEF', '#5227FF'],
  fullstack: ['#B4FFA8', '#7FFF6F'],
  accent: ['#9AC2FF', '#14AAFF'],
} as const;

// Spacing - Consistent padding/margin values
export const SPACING = {
  section: {
    mobile: 'px-5 py-16',
    tablet: 'md:px-12 md:py-20',
    desktop: 'lg:px-16 lg:py-24',
    full: 'px-5 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24',
  },
  container: {
    maxWidth: 'max-w-7xl',
    centered: 'max-w-7xl mx-auto',
  },
} as const;

// Z-Index - Layering system for fixed/absolute elements
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  navbar: 60,
  menuButton: 70,
  menuPanel: 80,
  tooltip: 90,
  notification: 100,
} as const;

// Breakpoints - Responsive design breakpoints (matches Tailwind defaults)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation Durations - Consistent timing for transitions
export const ANIMATION = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

// Image Sizes - Consistent image dimensions
export const IMAGE_SIZES = {
  hero: {
    mobile: 'w-80',
    tablet: 'md:w-96',
    desktop: 'lg:w-[500px] xl:w-[550px] 2xl:w-[600px]',
  },
  card: {
    small: 'w-64 h-64',
    medium: 'w-80 h-80',
    large: 'w-96 h-96',
  },
} as const;

// Service Types - For type safety across the app
export type ServiceType = 'web' | 'mobile' | 'fullstack';

// Helper function to get service-specific colors
export const getServiceTheme = (service: ServiceType) => ({
  color: BRAND_COLORS[service],
  background: BACKGROUND_COLORS[service],
  gradient: GRADIENTS[service],
});

// Type exports for TypeScript
export type BrandColor = typeof BRAND_COLORS;
export type BackgroundColor = typeof BACKGROUND_COLORS;
export type UIColor = typeof UI_COLORS;
