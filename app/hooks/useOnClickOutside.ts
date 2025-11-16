import { RefObject, useEffect } from 'react';

/**
 * Hook that detects clicks outside of a specified element
 *
 * @param ref - React ref object pointing to the element to detect outside clicks for
 * @param handler - Callback function to execute when outside click is detected
 *
 * @example
 * ```tsx
 * const Dropdown = () => {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const dropdownRef = useRef<HTMLDivElement>(null);
 *
 *   useOnClickOutside(dropdownRef, () => setIsOpen(false));
 *
 *   return <div ref={dropdownRef}>...</div>;
 * };
 * ```
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Re-run if ref or handler changes
};
