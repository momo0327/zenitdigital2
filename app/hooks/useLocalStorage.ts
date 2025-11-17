import { useState, useEffect } from 'react';

/**
 * Hook that syncs state with localStorage
 *
 * Provides persistent state that survives page refreshes.
 * SSR-safe: won't crash on server, syncs with localStorage after mount.
 * Automatically serializes/deserializes JSON.
 *
 * @param key - localStorage key to store value under
 * @param initialValue - Default value if no stored value exists
 * @returns Tuple of [storedValue, setValue] similar to useState
 *
 * @example
 * ```tsx
 * const ThemeToggle = () => {
 *   const [theme, setTheme] = useLocalStorage('theme', 'light');
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *       Current theme: {theme}
 *     </button>
 *   );
 * };
 * ```
 *
 * @example
 * ```tsx
 * // With complex objects
 * const UserSettings = () => {
 *   const [settings, setSettings] = useLocalStorage('userSettings', {
 *     notifications: true,
 *     autoSave: false
 *   });
 *
 *   return (
 *     <div>
 *       <label>
 *         <input
 *           type="checkbox"
 *           checked={settings.notifications}
 *           onChange={(e) => setSettings({
 *             ...settings,
 *             notifications: e.target.checked
 *           })}
 *         />
 *         Enable notifications
 *       </label>
 *     </div>
 *   );
 * };
 * ```
 */
export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  // State to store our value
  // Initialize with initialValue for SSR safety
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [mounted, setMounted] = useState(false);

  // On mount, read from localStorage
  useEffect(() => {
    setMounted(true);

    try {
      // Get from localStorage by key
      const item = window.localStorage.getItem(key);

      // Parse stored json or return initialValue if null
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      // If error reading localStorage, log and use initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function (same API as useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to localStorage (only on client)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // If error saving to localStorage, log it
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Return the value from localStorage if mounted, otherwise initialValue
  // This prevents hydration mismatch
  return [mounted ? storedValue : initialValue, setValue];
};
