import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  /**
   * Percentage of element that must be visible to trigger callback
   * @default 0.1 (10%)
   */
  threshold?: number | number[];

  /**
   * Margin around the root element
   * Can expand or shrink intersection area
   * @default '0px'
   */
  rootMargin?: string;

  /**
   * If true, stops observing once element becomes visible
   * Useful for lazy-loading that only needs to trigger once
   * @default false
   */
  freezeOnceVisible?: boolean;

  /**
   * Optional root element for intersection
   * If null, uses viewport
   * @default null
   */
  root?: Element | null;
}

interface UseIntersectionObserverReturn {
  /** Ref to attach to the element you want to observe */
  ref: React.RefObject<HTMLElement | null>;

  /** Current IntersectionObserverEntry or undefined */
  entry: IntersectionObserverEntry | undefined;

  /** Whether the element is currently visible */
  isVisible: boolean;
}

/**
 * Hook that detects when an element enters or leaves the viewport
 *
 * Uses the Intersection Observer API to efficiently track element visibility.
 * Perfect for lazy-loading images, triggering animations on scroll, infinite scroll, etc.
 *
 * @param options - Configuration options for the intersection observer
 * @returns Object with ref, entry data, and visibility state
 *
 * @example
 * ```tsx
 * // Lazy load component when it enters viewport
 * const LazyComponent = () => {
 *   const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 });
 *
 *   return (
 *     <div ref={ref}>
 *       {isVisible && <HeavyComponent />}
 *     </div>
 *   );
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Trigger animation once when element becomes visible
 * const AnimatedBox = () => {
 *   const { ref, isVisible } = useIntersectionObserver({
 *     threshold: 0.3,
 *     freezeOnceVisible: true
 *   });
 *
 *   return (
 *     <div
 *       ref={ref}
 *       className={isVisible ? 'fade-in' : 'opacity-0'}
 *     >
 *       Content
 *     </div>
 *   );
 * };
 * ```
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    freezeOnceVisible = false,
    root = null,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  // If freezeOnceVisible is true and element has been visible, don't observe anymore
  const frozen = freezeOnceVisible && hasBeenVisible;

  useEffect(() => {
    const node = elementRef?.current;

    // Don't observe if no node or if frozen
    if (!node || frozen) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver is not supported in this browser');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);

        // Mark as visible if intersecting
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(node);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, frozen, root]);

  return {
    ref: elementRef,
    entry,
    isVisible: !!entry?.isIntersecting,
  };
};
