import { useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { killTweens, animatePlusIcon } from '@/app/utils/gsapHelpers';

/**
 * Hook for managing icon rotation animations (plus/X transformation)
 */
export const useIconAnimation = (
  iconRef: React.RefObject<HTMLSpanElement>,
  plusHRef: React.RefObject<HTMLSpanElement>,
  plusVRef: React.RefObject<HTMLSpanElement>
) => {
  const spinTweenRef = useRef<gsap.core.Timeline | undefined>(undefined);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    const h = plusHRef.current;
    const v = plusVRef.current;
    if (!icon || !h || !v) return;

    // Kill existing animation using helper
    killTweens(spinTweenRef.current);

    // Ensure container never rotates
    gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

    // Use helper for plus icon animation
    spinTweenRef.current = animatePlusIcon(h, v, opening);

    // Add icon reset for closing animation
    if (!opening) {
      spinTweenRef.current.to(icon, { rotate: 0, duration: 0.001 }, 0);
    }
  }, [iconRef, plusHRef, plusVRef]);

  return { animateIcon, spinTweenRef };
};
