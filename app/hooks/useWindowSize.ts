import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Hook that tracks the current window dimensions
 *
 * Returns an object with current window width and height.
 * Automatically updates when the window is resized.
 * SSR-safe: returns 0x0 on server, actual dimensions after mount.
 *
 * @returns Object with width and height properties
 *
 * @example
 * ```tsx
 * const Component = () => {
 *   const { width, height } = useWindowSize();
 *
 *   return (
 *     <div>
 *       Window size: {width} x {height}
 *     </div>
 *   );
 * };
 * ```
 */
export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect runs only on mount/unmount

  return windowSize;
};

/**
 * Hook that tracks window dimensions with debouncing
 *
 * Similar to useWindowSize but debounces resize events to reduce re-renders
 * during window resizing. Useful for expensive calculations based on window size.
 *
 * @param delay - Delay in milliseconds before updating size (default: 150ms)
 * @returns Object with width and height properties
 *
 * @example
 * ```tsx
 * const Component = () => {
 *   const { width, height } = useWindowSizeDebounced(200);
 *
 *   // Only updates every 200ms during resize
 *   return <div>Window: {width} x {height}</div>;
 * };
 * ```
 */
export const useWindowSizeDebounced = (delay: number = 150): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      // Clear previous timeout
      clearTimeout(timeoutId);

      // Set new timeout to update size after delay
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    // Set initial size immediately
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]); // Re-run if delay changes

  return windowSize;
};
