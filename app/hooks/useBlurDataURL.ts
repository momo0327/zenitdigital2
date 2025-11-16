/**
 * Generates animated shimmer effect for blur placeholders
 */
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

/**
 * Converts string to base64 encoding
 */
const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

/**
 * Hook for generating blur placeholder data URLs for Next.js Image components
 * Creates an animated shimmer effect during image loading
 *
 * @param width - Width of the placeholder (default: 700)
 * @param height - Height of the placeholder (default: 475)
 * @returns Base64-encoded SVG data URL for blur placeholder
 *
 * @example
 * const blurDataURL = useBlurDataURL(800, 600);
 *
 * <Image
 *   src="/image.jpg"
 *   placeholder="blur"
 *   blurDataURL={blurDataURL}
 *   alt="Description"
 * />
 */
export const useBlurDataURL = (width = 700, height = 475): string => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
};
