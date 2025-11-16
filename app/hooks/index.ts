/**
 * Custom React hooks for Next.js application
 * Centralized exports for all custom hooks
 */

// Image Optimization Hooks
export { useOptimizedImage } from './useOptimizedImage';
export { useBlurDataURL } from './useBlurDataURL';
export { useProgressiveImage } from './useProgressiveImage';
export { useImagePreload } from './useImagePreload';

// UI Interaction Hooks
export { useOnClickOutside } from './useOnClickOutside';
export { useDragScroll } from './useDragScroll';

// Performance Optimization Hooks
export { useDebounce } from './useDebounce';
export { useThrottle } from './useThrottle';
export { useIntersectionObserver } from './useIntersectionObserver';

// Responsive Design Hooks
export { useMediaQuery, useBreakpoint, breakpoints } from './useMediaQuery';
export { useWindowSize, useWindowSizeDebounced } from './useWindowSize';

// State Management Hooks
export { useLocalStorage } from './useLocalStorage';
export { usePrevious } from './usePrevious';
export { usePageVisibility } from './usePageVisibility';
