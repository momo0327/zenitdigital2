import { useState, useEffect } from 'react';

/**
 * Hook that tracks whether the page/tab is currently visible
 *
 * Uses the Page Visibility API to detect when users switch tabs or minimize the browser.
 * Useful for pausing animations, videos, timers, or expensive operations when the page is hidden.
 *
 * @returns Boolean indicating if the page is currently visible
 *
 * @example
 * ```tsx
 * // Pause video when tab is hidden
 * const VideoPlayer = () => {
 *   const isVisible = usePageVisibility();
 *   const videoRef = useRef<HTMLVideoElement>(null);
 *
 *   useEffect(() => {
 *     if (!videoRef.current) return;
 *
 *     if (isVisible) {
 *       videoRef.current.play();
 *     } else {
 *       videoRef.current.pause();
 *     }
 *   }, [isVisible]);
 *
 *   return <video ref={videoRef} src="/video.mp4" />;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Pause animations when tab is hidden
 * const AnimatedComponent = () => {
 *   const isVisible = usePageVisibility();
 *
 *   useEffect(() => {
 *     if (!isVisible) {
 *       // Pause GSAP animations
 *       gsap.globalTimeline.pause();
 *     } else {
 *       gsap.globalTimeline.resume();
 *     }
 *   }, [isVisible]);
 *
 *   return <div>Animated content</div>;
 * };
 * ```
 *
 * @example
 * ```tsx
 * // Stop polling API when tab is hidden
 * const Dashboard = () => {
 *   const isVisible = usePageVisibility();
 *   const [data, setData] = useState(null);
 *
 *   useEffect(() => {
 *     if (!isVisible) return; // Don't poll when hidden
 *
 *     const interval = setInterval(() => {
 *       fetchData().then(setData);
 *     }, 5000);
 *
 *     return () => clearInterval(interval);
 *   }, [isVisible]);
 *
 *   return <div>{data}</div>;
 * };
 * ```
 */
export const usePageVisibility = (): boolean => {
  // Initialize with true for SSR compatibility
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if Page Visibility API is supported
    if (typeof document === 'undefined' || typeof document.hidden === 'undefined') {
      console.warn('Page Visibility API is not supported in this browser');
      return;
    }

    // Set initial visibility state
    setIsVisible(!document.hidden);

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
};
