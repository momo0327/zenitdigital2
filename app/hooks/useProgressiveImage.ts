import { useState, useEffect } from 'react';

interface UseProgressiveImageReturn {
  src: string;
  isLoading: boolean;
}

/**
 * Hook for progressive image loading (low quality → high quality)
 * Loads a low-quality placeholder first, then replaces with high-quality version
 *
 * @param lowQualitySrc - URL of low-quality/thumbnail image
 * @param highQualitySrc - URL of high-quality/full-resolution image
 * @returns Current image source and loading state
 *
 * @example
 * const { src, isLoading } = useProgressiveImage(
 *   '/images/hero-thumbnail.jpg',
 *   '/images/hero-full.jpg'
 * );
 *
 * <img
 *   src={src}
 *   alt="Hero"
 *   className={isLoading ? 'blur' : ''}
 * />
 */
export const useProgressiveImage = (
  lowQualitySrc: string,
  highQualitySrc: string
): UseProgressiveImageReturn => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    };

    img.onerror = () => {
      console.error(`Failed to load high-quality image: ${highQualitySrc}`);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return {
    src,
    isLoading: src === lowQualitySrc
  };
};
