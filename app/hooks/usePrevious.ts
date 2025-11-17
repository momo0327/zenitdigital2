import { useRef, useEffect } from 'react';

/**
 * Hook that returns the previous value of a state or prop
 *
 * Useful for comparing current and previous values to trigger effects,
 * animations, or conditional logic based on changes.
 *
 * @param value - The current value to track
 * @returns The previous value (undefined on first render)
 *
 * @example
 * ```tsx
 * const Counter = () => {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *
 *   return (
 *     <div>
 *       <p>Current: {count}</p>
 *       <p>Previous: {prevCount ?? 'N/A'}</p>
 *       <p>
 *         {prevCount !== undefined && count > prevCount && '📈 Increased'}
 *         {prevCount !== undefined && count < prevCount && '📉 Decreased'}
 *       </p>
 *       <button onClick={() => setCount(count + 1)}>Increment</button>
 *     </div>
 *   );
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Track prop changes for animations
 * const AnimatedBox = ({ isOpen }: { isOpen: boolean }) => {
 *   const wasOpen = usePrevious(isOpen);
 *
 *   useEffect(() => {
 *     if (!wasOpen && isOpen) {
 *       // Trigger opening animation
 *       console.log('Opening...');
 *     } else if (wasOpen && !isOpen) {
 *       // Trigger closing animation
 *       console.log('Closing...');
 *     }
 *   }, [isOpen, wasOpen]);
 *
 *   return <div>{isOpen ? 'Open' : 'Closed'}</div>;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Compare previous and current search query
 * const SearchResults = ({ query }: { query: string }) => {
 *   const prevQuery = usePrevious(query);
 *
 *   useEffect(() => {
 *     if (prevQuery !== query && query.length > 0) {
 *       console.log(`Search changed from "${prevQuery}" to "${query}"`);
 *       fetchResults(query);
 *     }
 *   }, [query, prevQuery]);
 *
 *   return <div>Searching for: {query}</div>;
 * };
 * ```
 */
export const usePrevious = <T,>(value: T): T | undefined => {
  // Ref to store the previous value
  const ref = useRef<T | undefined>(undefined);

  // Update ref after render completes
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value (before the update)
  return ref.current;
};
