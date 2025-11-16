import { useState, useEffect } from 'react';

/**
 * Hook that tracks whether a CSS media query matches
 *
 * Allows you to use CSS media queries in JavaScript for responsive component logic.
 * Updates when the media query match changes (e.g., window resize).
 * SSR-safe: returns false on server, actual value after mount.
 *
 * @param query - CSS media query string
 * @returns Boolean indicating if the query matches
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const isMobile = useMediaQuery('(max-width: 768px)');
 *   const isDark = useMediaQuery('(prefers-color-scheme: dark)');
 *
 *   return (
 *     <div>
 *       {isMobile ? <MobileNav /> : <DesktopNav />}
 *     </div>
 *   );
 * };
 * ```
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);

    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Create listener function
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Modern API (addEventListener)
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers (addListener - deprecated but still needed for some browsers)
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
};

/**
 * Common breakpoint definitions matching Tailwind CSS defaults
 */
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

/**
 * Hook that provides convenient access to common responsive breakpoints
 *
 * Returns an object with boolean values for each standard breakpoint.
 * Matches Tailwind CSS breakpoints for consistency.
 *
 * @returns Object with breakpoint states
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const { isMobile, isTablet, isDesktop } = useBreakpoint();
 *
 *   return (
 *     <div>
 *       {isMobile && <p>Mobile view</p>}
 *       {isTablet && <p>Tablet view</p>}
 *       {isDesktop && <p>Desktop view</p>}
 *     </div>
 *   );
 * };
 * ```
 */
export const useBreakpoint = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  // Specific Tailwind breakpoints
  const isSm = useMediaQuery(breakpoints.sm);
  const isMd = useMediaQuery(breakpoints.md);
  const isLg = useMediaQuery(breakpoints.lg);
  const isXl = useMediaQuery(breakpoints.xl);
  const is2Xl = useMediaQuery(breakpoints['2xl']);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
  };
};
