/**
 * Animation constants for StaggeredMenu component
 * Centralized for consistency and maintainability
 */

export const ANIMATION_DURATIONS = {
  panel: 0.65,
  layer: 0.5,
  close: 0.32,
  icon: 0.5,
  iconClose: 0.35,
  text: 0.5,
  color: 0.3,
  colorDelay: 0.18,
  socialFade: 0.55,
  numberFade: 0.6,
  itemEntrance: 1,
  // Reduced motion overrides
  reduced: 0.1,
} as const;

export const ANIMATION_EASINGS = {
  panelOpen: 'power4.out',
  close: 'power3.in',
  iconOpen: 'power4.out',
  iconClose: 'power3.inOut',
  color: 'power2.out',
  text: 'power4.out',
  socialFade: 'power3.out',
  numberFade: 'power2.out',
} as const;

export const DEFAULT_COLORS = ['#B19EEF', '#5227FF'];
export const DEFAULT_LOGO_URL = '/logowhite.png';
export const DEFAULT_MENU_COLOR = '#fff';
export const DEFAULT_ACCENT_COLOR = '#5227FF';
