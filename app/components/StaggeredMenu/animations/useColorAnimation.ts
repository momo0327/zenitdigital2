import { useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { killTweens } from '@/app/utils/gsapHelpers';
import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from '../StaggeredMenu.constants';

/**
 * Hook for managing menu button color transitions
 */
export const useColorAnimation = (
  toggleBtnRef: React.RefObject<HTMLButtonElement>,
  menuButtonColor: string,
  openMenuButtonColor: string,
  changeMenuColorOnOpen: boolean,
  prefersReducedMotion: boolean
) => {
  const colorTweenRef = useRef<gsap.core.Tween | undefined>(undefined);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;

      // Kill existing animation using helper
      killTweens(colorTweenRef.current);

      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        const duration = prefersReducedMotion ? ANIMATION_DURATIONS.reduced : ANIMATION_DURATIONS.color;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: ANIMATION_DURATIONS.colorDelay,
          duration,
          ease: ANIMATION_EASINGS.color
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [toggleBtnRef, openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen, prefersReducedMotion]
  );

  return { animateColor, colorTweenRef };
};
