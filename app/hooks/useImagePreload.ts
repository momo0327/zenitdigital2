import { useEffect, useState } from 'react';

/**
 * Hook for preloading images before they're needed
 * Useful for galleries, carousels, or next-page navigation
 *
 * @param imageUrls - Array of image URLs to preload
 * @returns Boolean indicating whether all images have been preloaded
 *
 * @example
 * const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];
 * const imagesReady = useImagePreload(images);
 *
 * if (!imagesReady) {
 *   return <LoadingSpinner />;
 * }
 *
 * return <Carousel images={images} />;
 */
export const useImagePreload = (imageUrls: string[]): boolean => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const promises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        if (!isCancelled) {
          setImagesPreloaded(true);
        }
      } catch (error) {
        console.error('Failed to preload images', error);
        // Set to true anyway to prevent infinite loading
        if (!isCancelled) {
          setImagesPreloaded(true);
        }
      }
    };

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageUrls]);

  return imagesPreloaded;
};
