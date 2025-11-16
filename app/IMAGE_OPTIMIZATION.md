# Next.js Image Optimization System

This document outlines the image optimization infrastructure for the Zenit Digital website.

## 📁 File Structure

```
app/
├── hooks/                    # Custom React hooks
│   ├── index.ts             # Centralized hook exports
│   ├── useOptimizedImage.ts # Loading states & error handling
│   ├── useBlurDataURL.ts    # Blur placeholder generation
│   ├── useProgressiveImage.ts # Progressive loading (low→high quality)
│   └── useImagePreload.ts   # Preload images before display
│
├── utils/                   # Utility functions
│   ├── index.ts            # Centralized utility exports
│   └── image.ts            # Image sizing, aspect ratios, quality
│
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── index.ts        # Centralized component exports
│   │   ├── ResponsiveImage.tsx  # Responsive images with aspect ratio
│   │   └── OptimizedImage.tsx   # Fixed-size optimized images
│   │
│   └── sections/           # Page sections
│       ├── PageHeader.tsx
│       └── ServiceCard.tsx
```

## 🎯 Components

### 1. ResponsiveImage
**Use for:** Images that should adapt to container size with maintained aspect ratio

```tsx
import { ResponsiveImage } from '@/components/ui';
import { IMAGE_SIZES, ASPECT_RATIOS } from '@/utils';

// Basic usage
<ResponsiveImage
  src="/hero.jpg"
  alt="Hero banner showcasing our services"
  priority
/>

// Custom aspect ratio and sizes
<ResponsiveImage
  src="/gallery-1.jpg"
  alt="Project showcase"
  aspectRatio={ASPECT_RATIOS.LANDSCAPE}
  sizes={IMAGE_SIZES.CARD}
  quality={90}
/>
```

**Props:**
- `src` (required): Image URL
- `alt` (required): Alt text for accessibility
- `aspectRatio`: Width/height ratio (default: 16/9)
- `priority`: Prioritize loading (use for above-fold images)
- `sizes`: Responsive sizes string
- `quality`: Image quality 1-100 (default: 75)
- `objectFit`: CSS object-fit value
- `enableBlur`: Show blur placeholder while loading

### 2. OptimizedImage
**Use for:** Images with fixed dimensions

```tsx
import { OptimizedImage } from '@/components/ui';
import { IMAGE_QUALITY } from '@/utils';

<OptimizedImage
  src="/logo.png"
  alt="Zenit Digital logo"
  width={200}
  height={80}
  priority
  quality={IMAGE_QUALITY.HIGH}
/>
```

**Props:**
- `src` (required): Image URL
- `alt` (required): Alt text
- `width` (required): Width in pixels
- `height` (required): Height in pixels
- `priority`: Prioritize loading
- `quality`: Image quality 1-100
- `sizes`: Responsive sizes string
- `enableBlur`: Show blur placeholder
- `onLoadComplete`: Callback when loaded

## 🪝 Hooks

### 1. useOptimizedImage
Manages loading states and error handling

```tsx
import { useOptimizedImage } from '@/hooks';

const MyComponent = () => {
  const { isLoading, isError, imageProps } = useOptimizedImage({
    src: '/hero.jpg',
    priority: true
  });

  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1920}
      height={1080}
      {...imageProps}
    />
  );
};
```

### 2. useBlurDataURL
Generates animated shimmer blur placeholders

```tsx
import { useBlurDataURL } from '@/hooks';

const blurDataURL = useBlurDataURL(800, 600);

<Image
  src="/image.jpg"
  alt="Description"
  placeholder="blur"
  blurDataURL={blurDataURL}
/>
```

### 3. useProgressiveImage
Progressive loading: thumbnail → full quality

```tsx
import { useProgressiveImage } from '@/hooks';

const { src, isLoading } = useProgressiveImage(
  '/thumbnail.jpg',
  '/full-quality.jpg'
);

<img
  src={src}
  className={isLoading ? 'blur-sm' : 'blur-0'}
/>
```

### 4. useImagePreload
Preload images before they're visible

```tsx
import { useImagePreload } from '@/hooks';

const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];
const imagesReady = useImagePreload(images);

if (!imagesReady) {
  return <LoadingSpinner />;
}

return <Carousel images={images} />;
```

## 🛠️ Utilities

### IMAGE_SIZES
Pre-configured responsive sizes for common layouts

```tsx
import { IMAGE_SIZES } from '@/utils';

IMAGE_SIZES.FULL      // 100vw all devices
IMAGE_SIZES.HERO      // 100vw mobile, 66vw desktop
IMAGE_SIZES.CARD      // 100vw mobile, 50vw tablet, 33vw desktop
IMAGE_SIZES.GALLERY   // 100vw mobile, 50vw tablet, 25vw desktop
IMAGE_SIZES.THUMBNAIL // 25vw mobile, 20vw tablet, 15vw desktop
IMAGE_SIZES.SPLIT     // 100vw mobile, 50vw desktop
```

### ASPECT_RATIOS
Common aspect ratios for consistent proportions

```tsx
import { ASPECT_RATIOS } from '@/utils';

ASPECT_RATIOS.SQUARE     // 1:1
ASPECT_RATIOS.PORTRAIT   // 3:4
ASPECT_RATIOS.LANDSCAPE  // 4:3
ASPECT_RATIOS.WIDESCREEN // 16:9
ASPECT_RATIOS.ULTRAWIDE  // 21:9
ASPECT_RATIOS.GOLDEN     // 1.618:1
```

### IMAGE_QUALITY
Quality presets for different use cases

```tsx
import { IMAGE_QUALITY } from '@/utils';

IMAGE_QUALITY.LOW     // 50 - thumbnails
IMAGE_QUALITY.MEDIUM  // 75 - general content (default)
IMAGE_QUALITY.HIGH    // 90 - hero images
IMAGE_QUALITY.MAX     // 100 - brand assets
```

### getResponsiveSizes()
Generate custom responsive sizes

```tsx
import { getResponsiveSizes } from '@/utils';

const sizes = getResponsiveSizes({
  mobile: 100,  // 100vw on mobile
  tablet: 50,   // 50vw on tablet
  desktop: 33   // 33vw on desktop
});

<Image sizes={sizes} ... />
```

## 📋 Best Practices

### 1. Always Use Alt Text
```tsx
// ❌ Bad
<Image src="/logo.png" alt="logo" />

// ✅ Good
<Image src="/logo.png" alt="Zenit Digital - Web Development Services" />
```

### 2. Set Priority for Above-the-Fold Images
```tsx
// Hero images, logos in viewport
<ResponsiveImage src="/hero.jpg" alt="..." priority />
```

### 3. Use Appropriate Sizes
```tsx
// ❌ Bad - loads full width on all devices
<Image src="/card.jpg" sizes="100vw" />

// ✅ Good - optimized per device
<Image src="/card.jpg" sizes={IMAGE_SIZES.CARD} />
```

### 4. Choose Quality Based on Content
```tsx
// Thumbnails
<OptimizedImage quality={IMAGE_QUALITY.LOW} />

// General content
<OptimizedImage quality={IMAGE_QUALITY.MEDIUM} />

// Hero images, important visuals
<OptimizedImage quality={IMAGE_QUALITY.HIGH} />
```

### 5. Enable Blur Placeholders
```tsx
// Improves perceived performance
<ResponsiveImage enableBlur />
```

## 🚀 Migration Guide

### Before (Standard Next.js Image)
```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  className="w-full h-auto"
/>
```

### After (Optimized)
```tsx
<ResponsiveImage
  src="/hero.jpg"
  alt="Hero banner showcasing modern web development"
  aspectRatio={ASPECT_RATIOS.WIDESCREEN}
  sizes={IMAGE_SIZES.HERO}
  priority
  quality={IMAGE_QUALITY.HIGH}
/>
```

## 📊 Performance Impact

- **Automatic WebP/AVIF conversion**: 30-50% smaller file sizes
- **Blur placeholders**: Improved perceived loading speed
- **Responsive sizing**: Only load necessary resolution
- **Priority loading**: Critical images load first
- **Lazy loading**: Off-screen images load on-demand

## 🔧 next.config.js Setup

Ensure your `next.config.js` has image optimization enabled:

```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

## 📝 Examples

See the following components for implementation examples:
- `/app/components/sections/PageHeader.tsx`
- `/app/components/sections/ServiceCard.tsx`
- `/app/components/header.tsx`

## 🆘 Troubleshooting

**Images not loading?**
- Check that image paths start with `/` (e.g., `/hero.jpg` not `hero.jpg`)
- Verify images exist in `/public` directory

**Blur placeholder not showing?**
- Ensure `enableBlur={true}` is set
- Check that `placeholder="blur"` and `blurDataURL` are provided

**Images too large?**
- Reduce `quality` prop
- Use appropriate `sizes` attribute
- Check if image dimensions are unnecessarily large
