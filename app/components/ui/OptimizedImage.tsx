'use client';

import Image from 'next/image';
import { useOptimizedImage } from '../../hooks/useOptimizedImage';
import { useBlurDataURL } from '../../hooks/useBlurDataURL';
import { IMAGE_QUALITY } from '../../utils/image';

interface OptimizedImageProps {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Image width in pixels */
  width: number;
  /** Image height in pixels */
  height: number;
  /** Whether to prioritize loading this image */
  priority?: boolean;
  /** Image quality (1-100). Default: 75 */
  quality?: number;
  /** Additional CSS classes */
  className?: string;
  /** Responsive sizes attribute */
  sizes?: string;
  /** Enable blur placeholder */
  enableBlur?: boolean;
  /** Callback when image loads successfully */
  onLoadComplete?: () => void;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Optimized image component with loading states and error handling
 * Use this for images with fixed dimensions
 *
 * @example
 * // Hero image with priority loading
 * <OptimizedImage
 *   src="/hero.jpg"
 *   alt="Hero banner"
 *   width={1920}
 *   height={1080}
 *   priority
 *   quality={90}
 * />
 *
 * @example
 * // Card image with custom sizing
 * <OptimizedImage
 *   src="/card.jpg"
 *   alt="Product"
 *   width={400}
 *   height={300}
 *   sizes="(max-width: 640px) 100vw, 400px"
 * />
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = IMAGE_QUALITY.MEDIUM,
  className = '',
  sizes,
  enableBlur = true,
  onLoadComplete,
  style,
}: OptimizedImageProps) => {
  const { isLoading, isError, imageProps } = useOptimizedImage({
    src,
    priority,
  });

  const blurDataURL = useBlurDataURL(width, height);

  const handleLoadComplete = () => {
    imageProps.onLoad();
    onLoadComplete?.();
  };

  if (isError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
        style={{ width, height }}
      >
        <p className="text-gray-400 text-sm">Failed to load image</p>
      </div>
    );
  }

  return (
    <div className="relative" style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        onLoad={handleLoadComplete}
        onError={imageProps.onError}
        priority={priority}
        placeholder={enableBlur ? 'blur' : 'empty'}
        blurDataURL={enableBlur ? blurDataURL : undefined}
      />
    </div>
  );
};
