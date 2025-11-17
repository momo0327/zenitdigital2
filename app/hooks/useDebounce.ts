import { useEffect, useState } from 'react';

/**
 * Hook that debounces a rapidly changing value
 *
 * Returns a debounced version of the value that only updates after the specified delay
 * has passed without the value changing. Useful for optimizing expensive operations
 * like API calls, search inputs, or scroll calculations.
 *
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds before updating the debounced value (default: 500ms)
 * @returns The debounced value
 *
 * @example
 * ```tsx
 * const SearchComponent = () => {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearch = useDebounce(searchTerm, 500);
 *
 *   useEffect(() => {
 *     if (debouncedSearch) {
 *       // API call only happens after 500ms of no typing
 *       fetchSearchResults(debouncedSearch);
 *     }
 *   }, [debouncedSearch]);
 *
 *   return <input onChange={(e) => setSearchTerm(e.target.value)} />;
 * };
 * ```
 */
export const useDebounce = <T,>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up a timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timeout if value changes before delay expires
    // This is the cleanup function that runs before the next effect
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run effect when value or delay changes

  return debouncedValue;
};
