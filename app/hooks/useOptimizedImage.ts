import { useState } from 'react';

interface UseOptimizedImageProps {
  src: string;
  priority?: boolean;
}

interface UseOptimizedImageReturn {
  isLoading: boolean;
  isError: boolean;
  imageProps: {
    onLoad: () => void;
    onError: () => void;
    priority?: boolean;
  };
}

/**
 * Hook for managing optimized image loading states
 * @param src - Image source URL
 * @param priority - Whether image should be prioritized for loading
 * @returns Loading state, error state, and props to spread on Image component
 *
 * @example
 * const { isLoading, isError, imageProps } = useOptimizedImage({
 *   src: '/hero.jpg',
 *   priority: true
 * });
 *
 * <Image src="/hero.jpg" alt="Hero" {...imageProps} />
 */
export const useOptimizedImage = ({
  src,
  priority
}: UseOptimizedImageProps): UseOptimizedImageReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => setIsLoading(false);

  const handleError = () => {
    setIsLoading(false);
    setIsError(true);
    console.error(`Failed to load image: ${src}`);
  };

  return {
    isLoading,
    isError,
    imageProps: {
      onLoad: handleLoad,
      onError: handleError,
      priority,
    },
  };
};
