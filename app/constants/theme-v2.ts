/**
 * Theme Constants — v2 Redesign
 *
 * Design tokens for the v2 site redesign (Hero2, Statement2, etc.).
 * Kept fully separate from the legacy palette in theme.ts.
 */

export const V2_COLORS = {
  background: '#FFFFFF',
  backgroundAlt: '#F8F9F6',
  text: '#021100',
  accent: '#B4FFA8',
} as const;

// Tailwind arbitrary-value friendly class fragments
export const V2_CLASSES = {
  bg: 'bg-[#FFFFFF]',
  bgAlt: 'bg-[#F8F9F6]',
  text: 'text-[#021100]',
  accentBg: 'bg-[#B4FFA8]',
  accentText: 'text-[#B4FFA8]',
} as const;

export type V2Colors = typeof V2_COLORS;
