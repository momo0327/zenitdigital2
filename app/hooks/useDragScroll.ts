import { useRef, useState, useCallback, MouseEvent } from 'react';

interface UseDragScrollOptions {
  /**
   * Scroll speed multiplier (higher = faster scrolling)
   * @default 2
   */
  scrollSpeed?: number;

  /**
   * Whether to show grab cursor
   * @default true
   */
  showCursor?: boolean;
}

interface UseDragScrollReturn {
  /** Ref to attach to the scrollable container */
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;

  /** Whether the user is currently dragging */
  isDragging: boolean;

  /** Mouse event handlers to attach to the container */
  handlers: {
    onMouseEnter(e: MouseEvent<Element, MouseEvent>): unknown;
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
  };
}

/**
 * Hook that enables drag-to-scroll functionality for a container
 *
 * Allows users to click and drag to scroll horizontally through content.
 * Automatically handles cursor changes and scroll calculations.
 *
 * @param options - Configuration options
 * @returns Object with ref, isDragging state, and event handlers
 *
 * @example
 * const MyComponent = () => {
 *   const { scrollContainerRef, handlers } = useDragScroll({ scrollSpeed: 2 });
 *
 *   return (
 *     <div
 *       ref={scrollContainerRef}
 *       {...handlers}
 *       className="overflow-x-auto"
 *     >
 *       <div>Scrollable content here</div>
 *     </div>
 *   );
 * };
 */
export const useDragScroll = (
  options: UseDragScrollOptions = {}
): UseDragScrollReturn => {
  const { scrollSpeed = 2, showCursor = true } = options;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!scrollContainerRef.current) return;

      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);

      if (showCursor) {
        scrollContainerRef.current.style.cursor = 'grabbing';
      }
    },
    [showCursor]
  );

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    if (scrollContainerRef.current && showCursor) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, [showCursor]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollContainerRef.current && showCursor) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, [showCursor]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;

      e.preventDefault();

      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * scrollSpeed;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft, scrollSpeed]
  );

  return {
    scrollContainerRef,
    isDragging,
    handlers: {
      onMouseEnter: () => {},
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
    },
  };
};
