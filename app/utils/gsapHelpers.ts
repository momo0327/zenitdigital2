import { gsap } from 'gsap';

/**
 * Safely kills multiple GSAP tweens/timelines
 * Handles undefined values gracefully
 *
 * @example
 * killTweens(openTl, closeTween, spinTween);
 */
export const killTweens = (
  ...tweens: (gsap.core.Tween | gsap.core.Timeline | undefined | null)[]
): void => {
  tweens.forEach((tween) => tween?.kill());
};

/**
 * Gets the offscreen position value based on menu position
 *
 * @param position - Menu position ('left' or 'right')
 * @returns Offscreen percentage value
 *
 * @example
 * const offscreen = getOffscreenValue('right'); // 100
 * gsap.set(panel, { xPercent: offscreen });
 */
export const getOffscreenValue = (position: 'left' | 'right'): number => {
  return position === 'left' ? -100 : 100;
};

/**
 * Sets multiple elements to an offscreen position
 *
 * @param elements - Array of HTML elements to move offscreen
 * @param position - Menu position
 *
 * @example
 * setOffscreen([panel, ...layers], 'right');
 */
export const setOffscreen = (
  elements: HTMLElement[],
  position: 'left' | 'right'
): void => {
  const offscreen = getOffscreenValue(position);
  gsap.set(elements, { xPercent: offscreen });
};

/**
 * Animates elements to offscreen position
 *
 * @param elements - Elements to animate
 * @param position - Menu position
 * @param options - GSAP animation options
 * @returns GSAP tween
 *
 * @example
 * animateOffscreen([panel, ...layers], 'right', {
 *   duration: 0.32,
 *   ease: 'power3.in'
 * });
 */
export const animateOffscreen = (
  elements: HTMLElement[],
  position: 'left' | 'right',
  options: gsap.TweenVars = {}
): gsap.core.Tween => {
  const offscreen = getOffscreenValue(position);
  return gsap.to(elements, {
    xPercent: offscreen,
    duration: 0.32,
    ease: 'power3.in',
    overwrite: 'auto',
    ...options,
  });
};

/**
 * Creates a rotation animation for the plus icon
 *
 * @param horizontal - Horizontal bar element
 * @param vertical - Vertical bar element
 * @param opening - Whether menu is opening (true) or closing (false)
 * @returns GSAP timeline
 */
export const animatePlusIcon = (
  horizontal: HTMLElement,
  vertical: HTMLElement,
  opening: boolean
): gsap.core.Timeline => {
  const timeline = gsap.timeline({
    defaults: { ease: opening ? 'power4.out' : 'power3.inOut' },
  });

  if (opening) {
    timeline
      .to(horizontal, { rotate: 45, duration: 0.5 }, 0)
      .to(vertical, { rotate: -45, duration: 0.5 }, 0);
  } else {
    timeline
      .to(horizontal, { rotate: 0, duration: 0.35 }, 0)
      .to(vertical, { rotate: 90, duration: 0.35 }, 0);
  }

  return timeline;
};

/**
 * Type for CSS custom properties in GSAP
 */
export type CSSCustomProperties = Record<string, string | number>;
