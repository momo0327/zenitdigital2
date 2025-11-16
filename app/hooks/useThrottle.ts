import { useEffect, useRef, useState } from 'react';

/**
 * Hook that throttles a rapidly changing value
 *
 * Unlike debouncing (which delays until changes stop), throttling ensures
 * the value updates at most once per time interval, even if changes are continuous.
 * Perfect for scroll, resize, or mouse move events.
 *
 * @param value - The value to throttle
 * @param limit - Minimum time in milliseconds between updates (default: 200ms)
 * @returns The throttled value
 *
 * @example
 * ```tsx
 * // Throttle scroll position updates
 * const ScrollComponent = () => {
 *   const [scrollY, setScrollY] = useState(0);
 *   const throttledScrollY = useThrottle(scrollY, 100);
 *
 *   useEffect(() => {
 *     const handleScroll = () => setScrollY(window.scrollY);
 *     window.addEventListener('scroll', handleScroll);
 *     return () => window.removeEventListener('scroll', handleScroll);
 *   }, []);
 *
 *   // Only re-renders every 100ms instead of every scroll event
 *   return <div>Scroll: {throttledScrollY}px</div>;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Throttle search input (consider useDebounce for this use case)
 * const Search = () => {
 *   const [query, setQuery] = useState('');
 *   const throttledQuery = useThrottle(query, 300);
 *
 *   useEffect(() => {
 *     // API call happens at most once every 300ms
 *     if (throttledQuery) {
 *       searchAPI(throttledQuery);
 *     }
 *   }, [throttledQuery]);
 *
 *   return <input onChange={(e) => setQuery(e.target.value)} />;
 * };
 * ```
 */
export const useThrottle = <T,>(value: T, limit: number = 200): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    // Calculate time since last update
    const timeSinceLastRan = Date.now() - lastRan.current;

    // If enough time has passed, update immediately
    if (timeSinceLastRan >= limit) {
      setThrottledValue(value);
      lastRan.current = Date.now();
      return;
    }

    // Otherwise, schedule an update after remaining time
    const handler = setTimeout(
      () => {
        setThrottledValue(value);
        lastRan.current = Date.now();
      },
      limit - timeSinceLastRan
    );

    // Clear timeout if value changes again before it fires
    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};
