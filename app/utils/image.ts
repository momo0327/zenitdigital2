/**
 * Image optimization utilities for Next.js
 * Responsive sizing, placeholder generation, and helper functions
 */

/**
 * Configuration for responsive image breakpoints
 */
interface ResponsiveSizesConfig {
  /** Viewport width percentage for mobile devices (default: 100) */
  mobile?: number;
  /** Viewport width percentage for tablet devices (default: 50) */
  tablet?: number;
  /** Viewport width percentage for desktop devices (default: 33) */
  desktop?: number;
}

/**
 * Generates responsive sizes string for Next.js Image component
 * Optimizes image loading based on viewport size
 *
 * @param breakpoints - Configuration object for different device sizes
 * @returns Formatted sizes string for Next.js Image
 *
 * @example
 * // Full width on mobile, half on tablet, third on desktop
 * const sizes = getResponsiveSizes({
 *   mobile: 100,
 *   tablet: 50,
 *   desktop: 33
 * });
 *
 * <Image
 *   src="/hero.jpg"
 *   alt="Hero"
 *   sizes={sizes}
 * />
 *
 * @example
 * // Custom breakpoints for a gallery
 * const sizes = getResponsiveSizes({
 *   mobile: 100,
 *   tablet: 50,
 *   desktop: 25
 * });
 */
export const getResponsiveSizes = (
  breakpoints: ResponsiveSizesConfig = {}
): string => {
  const { mobile = 100, tablet = 50, desktop = 33 } = breakpoints;

  return `(max-width: 640px) ${mobile}vw, (max-width: 1024px) ${tablet}vw, ${desktop}vw`;
};

/**
 * Common responsive sizes presets for typical use cases
 */
export const IMAGE_SIZES = {
  /** Full width on all devices */
  FULL: getResponsiveSizes({ mobile: 100, tablet: 100, desktop: 100 }),

  /** Hero image: full on mobile, 2/3 on larger screens */
  HERO: getResponsiveSizes({ mobile: 100, tablet: 66, desktop: 66 }),

  /** Card grid: full on mobile, half on tablet, third on desktop */
  CARD: getResponsiveSizes({ mobile: 100, tablet: 50, desktop: 33 }),

  /** Gallery: full on mobile, half on tablet, quarter on desktop */
  GALLERY: getResponsiveSizes({ mobile: 100, tablet: 50, desktop: 25 }),

  /** Thumbnail: consistent small size across devices */
  THUMBNAIL: getResponsiveSizes({ mobile: 25, tablet: 20, desktop: 15 }),

  /** Split layout: full on mobile, half on larger screens */
  SPLIT: getResponsiveSizes({ mobile: 100, tablet: 50, desktop: 50 }),
} as const;

/**
 * Common aspect ratios for maintaining consistent image proportions
 */
export const ASPECT_RATIOS = {
  /** Square (1:1) - Social media profiles, avatars */
  SQUARE: 1,

  /** Portrait (3:4) - Mobile screenshots, portraits */
  PORTRAIT: 3 / 4,

  /** Landscape (4:3) - Traditional photography */
  LANDSCAPE: 4 / 3,

  /** Widescreen (16:9) - Modern displays, video thumbnails */
  WIDESCREEN: 16 / 9,

  /** Ultrawide (21:9) - Cinematic, hero banners */
  ULTRAWIDE: 21 / 9,

  /** Golden ratio (1.618:1) - Aesthetically pleasing compositions */
  GOLDEN: 1.618,
} as const;

/**
 * Calculates padding-bottom percentage for aspect ratio boxes
 * Used for maintaining aspect ratio with CSS
 *
 * @param aspectRatio - Width to height ratio (e.g., 16/9)
 * @returns Percentage value for padding-bottom
 *
 * @example
 * const padding = getAspectRatioPadding(16 / 9);
 * // Returns: "56.25%"
 *
 * <div style={{ paddingBottom: padding }}>
 *   <Image src="..." alt="..." fill />
 * </div>
 */
export const getAspectRatioPadding = (aspectRatio: number): string => {
  return `${(1 / aspectRatio) * 100}%`;
};

/**
 * Image quality presets for different use cases
 * Lower quality = smaller file size = faster loading
 */
export const IMAGE_QUALITY = {
  /** Low quality for thumbnails and previews */
  LOW: 50,

  /** Medium quality for general content */
  MEDIUM: 75,

  /** High quality for hero images and important visuals */
  HIGH: 90,

  /** Maximum quality for critical brand assets */
  MAX: 100,
} as const;
