'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useBlurDataURL } from '../../hooks/useBlurDataURL';
import { getAspectRatioPadding, IMAGE_QUALITY } from '../../utils/image';

interface ResponsiveImageProps {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Aspect ratio (width/height). Default: 16/9 */
  aspectRatio?: number;
  /** Whether to prioritize loading this image */
  priority?: boolean;
  /** Responsive sizes attribute for optimal loading */
  sizes?: string;
  /** Image quality (1-100). Default: 75 */
  quality?: number;
  /** Additional CSS classes */
  className?: string;
  /** Object fit style. Default: 'cover' */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  /** Enable blur placeholder */
  enableBlur?: boolean;
}

/**
 * Optimized responsive image component with automatic aspect ratio handling
 * Includes loading states, blur placeholders, and performance optimizations
 *
 * @example
 * // Basic usage with 16:9 aspect ratio
 * <ResponsiveImage
 *   src="/hero.jpg"
 *   alt="Hero banner"
 *   priority
 * />
 *
 * @example
 * // Custom aspect ratio and sizes
 * <ResponsiveImage
 *   src="/gallery-image.jpg"
 *   alt="Gallery item"
 *   aspectRatio={4/3}
 *   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 * />
 */
export const ResponsiveImage = ({
  src,
  alt,
  aspectRatio = 16 / 9,
  priority = false,
  sizes = '100vw',
  quality = IMAGE_QUALITY.MEDIUM,
  className = '',
  objectFit = 'cover',
  enableBlur = true,
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const blurDataURL = useBlurDataURL(700, Math.round(700 / aspectRatio));

  const paddingBottom = getAspectRatioPadding(aspectRatio);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ paddingBottom }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={quality}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ objectFit }}
        onLoad={() => setIsLoading(false)}
        placeholder={enableBlur ? 'blur' : 'empty'}
        blurDataURL={enableBlur ? blurDataURL : undefined}
      />
    </div>
  );
};
