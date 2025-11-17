# Zenit Digital - File Structure & Naming Convention

Complete project structure with naming conventions and organizational patterns.

## 📁 Directory Structure

```
zenitdigital2/
│
├── app/                                 # Next.js 15 App Router
│   │
│   ├── constants/                       # ✅ Centralized configuration
│   │   ├── index.ts                    # Re-export all constants
│   │   ├── theme.ts                    # Colors, gradients, spacing, z-index
│   │   ├── content.ts                  # Text content, marketing copy, FAQs
│   │   ├── navigation.ts               # Nav items, breadcrumbs, social links
│   │   └── seo.ts                      # SEO metadata, Open Graph, Twitter
│   │
│   ├── hooks/                          # ✅ Custom React hooks
│   │   ├── index.ts                    # Re-export all hooks
│   │   ├── useOptimizedImage.ts        # Loading states & error handling
│   │   ├── useBlurDataURL.ts           # Blur placeholder generation
│   │   ├── useProgressiveImage.ts      # Low→high quality loading
│   │   └── useImagePreload.ts          # Preload images before display
│   │
│   ├── utils/                          # ✅ Utility functions
│   │   ├── index.ts                    # Re-export all utilities
│   │   └── image.ts                    # Responsive sizes, aspect ratios, quality
│   │
│   ├── components/                     # React components
│   │   │
│   │   ├── ui/                         # ✅ Reusable UI components
│   │   │   ├── index.ts               # Re-export UI components
│   │   │   ├── ResponsiveImage.tsx    # Aspect ratio responsive images
│   │   │   └── OptimizedImage.tsx     # Fixed-size optimized images
│   │   │
│   │   ├── sections/                   # ✅ Page section components
│   │   │   ├── index.ts               # Re-export sections
│   │   │   ├── PageHeader.tsx         # Unified page header
│   │   │   └── ServiceCard.tsx        # Unified service card
│   │   │
│   │   ├── WebDevPageComponents/      # Web dev page specific
│   │   │   └── Header.tsx
│   │   │
│   │   ├── MobiledevPageComponents/   # Mobile dev page specific
│   │   │   └── Header.tsx
│   │   │
│   │   ├── FullstackDevPageComponents/ # Fullstack dev page specific
│   │   │   └── Header.tsx
│   │   │
│   │   ├── navbar.tsx                 # Main navigation
│   │   ├── StaggeredMenu.tsx          # Animated menu
│   │   ├── header.tsx                 # Homepage hero
│   │   ├── subHeader.tsx              # Web dev service card
│   │   ├── ReversedHeader.tsx         # Mobile dev service card
│   │   ├── triHeader.tsx              # Fullstack service card
│   │   ├── text.tsx                   # Text section
│   │   ├── FeaturesGrid.tsx           # Strategic approach grid
│   │   ├── HelpGrid.tsx               # Help section grid
│   │   ├── selectedWorks.tsx          # Portfolio carousel
│   │   ├── ScrollStack.tsx            # Stacking scroll animation
│   │   ├── ScrollStackDemo.tsx        # Demo version
│   │   ├── Steps.tsx                  # Process steps
│   │   ├── Faq.tsx                    # FAQ accordion
│   │   ├── Cta.tsx                    # Call to action
│   │   ├── GreenCta.tsx               # Alternative CTA
│   │   └── Footer.tsx                 # Site footer
│   │
│   ├── ContactPage/                   # Contact page route
│   │   ├── layout.tsx                 # Contact layout with metadata
│   │   └── page.tsx                   # Contact form
│   │
│   ├── WebDev/                        # Web development services
│   │   └── page.tsx
│   │
│   ├── MobileDev/                     # Mobile development services
│   │   └── page.tsx
│   │
│   ├── FullstackDev/                  # Fullstack development services
│   │   └── page.tsx
│   │
│   ├── layout.tsx                     # Root layout with fonts
│   ├── page.tsx                       # Homepage
│   ├── globals.css                    # Global styles & Tailwind
│   ├── IMAGE_OPTIMIZATION.md          # Image optimization docs
│   └── FILE_STRUCTURE.md              # This file
│
├── public/                            # Static assets
│   ├── images/                        # (recommended to organize)
│   ├── *.png                          # Image files
│   └── *.svg                          # Vector graphics
│
├── next.config.ts                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind CSS configuration
├── postcss.config.mjs                 # PostCSS configuration
├── tsconfig.json                      # TypeScript configuration
├── eslint.config.mjs                  # ESLint rules
├── package.json                       # Dependencies & scripts
├── CLAUDE.md                          # Project context for Claude
└── README.md                          # Project documentation
```

## 📐 Naming Conventions

### Files

| Type | Convention | Examples |
|------|-----------|----------|
| **React Components** | PascalCase | `Header.tsx`, `ServiceCard.tsx` |
| **Hooks** | camelCase with `use` prefix | `useOptimizedImage.ts` |
| **Utils** | camelCase | `image.ts` |
| **Constants** | camelCase | `theme.ts`, `seo.ts` |
| **Pages** | lowercase | `page.tsx` |
| **Layouts** | lowercase | `layout.tsx` |
| **Types/Interfaces** | PascalCase in *.ts | `ImageProps`, `ServiceType` |

### Variables & Functions

| Type | Convention | Examples |
|------|-----------|----------|
| **Constants** | UPPER_SNAKE_CASE | `BRAND_COLORS`, `IMAGE_SIZES` |
| **Functions** | camelCase | `getResponsiveSizes()` |
| **Components** | PascalCase | `ResponsiveImage` |
| **Hooks** | camelCase with `use` | `useBlurDataURL()` |
| **Variables** | camelCase | `imageProps`, `isLoading` |
| **Types** | PascalCase | `ResponsiveImageProps` |

### Component Structure

```tsx
// 1. Imports
import React from 'react';
import { useHook } from '../hooks';

// 2. Types/Interfaces
interface ComponentProps {
  prop: string;
}

// 3. Component
export const Component = ({ prop }: ComponentProps) => {
  // 4. Hooks
  const data = useHook();

  // 5. Event handlers
  const handleClick = () => {};

  // 6. Render
  return <div />;
};
```

## 🗂️ Organization Patterns

### Index Files
Every directory exports its contents via `index.ts`:

```typescript
// app/hooks/index.ts
export { useOptimizedImage } from './useOptimizedImage';
export { useBlurDataURL } from './useBlurDataURL';
// ...
```

**Import from:**
```tsx
// ✅ Good - clean imports
import { useOptimizedImage, useBlurDataURL } from '@/hooks';

// ❌ Avoid - verbose paths
import { useOptimizedImage } from '@/hooks/useOptimizedImage';
```

### Constants Organization

```typescript
// app/constants/theme.ts
export const BRAND_COLORS = { ... };
export const BACKGROUND_COLORS = { ... };

// app/constants/index.ts
export * from './theme';
export * from './content';
export * from './navigation';
export * from './seo';
```

**Usage:**
```tsx
import { BRAND_COLORS, SERVICES, NAV_ITEMS } from '@/constants';
```

### Component Grouping

```
components/
├── ui/              # Generic, reusable UI components
├── sections/        # Page-level sections (reusable across pages)
├── *PageComponents/ # Page-specific components
└── *.tsx           # Shared layout components (navbar, footer, etc.)
```

## 📦 Import Path Aliases

Currently using relative imports. Consider configuring path aliases:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./app/*"],
      "@/components/*": ["./app/components/*"],
      "@/hooks/*": ["./app/hooks/*"],
      "@/utils/*": ["./app/utils/*"],
      "@/constants/*": ["./app/constants/*"]
    }
  }
}
```

**Benefits:**
```tsx
// Instead of
import { Component } from '../../../components/ui/Component';

// Use
import { Component } from '@/components/ui';
```

## 🎨 CSS Organization

### Tailwind Classes Order
1. Layout (display, position, flex)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text)
5. Visual (background, border, shadow)
6. Interactive (hover, focus, transition)

```tsx
// ✅ Good - organized order
<div className="flex flex-col items-center justify-center p-8 w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow" />

// ❌ Avoid - random order
<div className="shadow-lg bg-white hover:shadow-xl w-full flex transition-shadow p-8 items-center mx-auto rounded-lg justify-center max-w-7xl flex-col" />
```

### Custom Styles
- Global styles: `app/globals.css`
- Component-scoped: Use `<style jsx>` or Tailwind
- CSS modules: Not currently used

## 🔍 File Locator Quick Reference

### Need to change...

| What | File Location |
|------|---------------|
| **Colors/Theme** | `app/constants/theme.ts` |
| **Marketing Text** | `app/constants/content.ts` |
| **SEO Metadata** | `app/constants/seo.ts` |
| **Navigation Links** | `app/constants/navigation.ts` |
| **Homepage** | `app/page.tsx` |
| **Contact Form** | `app/ContactPage/page.tsx` |
| **Main Navigation** | `app/components/navbar.tsx` |
| **Footer** | `app/components/Footer.tsx` |
| **Hero Section** | `app/components/header.tsx` |
| **Image Optimization** | `app/utils/image.ts` |
| **Image Hooks** | `app/hooks/` |
| **Reusable Images** | `app/components/ui/` |

## 📊 Component Hierarchy

```
Page (page.tsx)
│
├── Layout (layout.tsx)
│   ├── Navbar
│   │   └── StaggeredMenu
│   └── Footer
│
└── Page Content
    ├── Sections (sections/)
    │   ├── PageHeader
    │   └── ServiceCard
    │
    ├── UI Components (ui/)
    │   ├── ResponsiveImage
    │   └── OptimizedImage
    │
    └── Page-Specific (*PageComponents/)
        └── Custom components
```

## 🚀 Best Practices

### 1. Centralize Configuration
- ✅ Use constants for all reusable values
- ✅ Single source of truth for colors, text, links
- ❌ Avoid hardcoding values in components

### 2. Component Reusability
- ✅ Extract common patterns into reusable components
- ✅ Use composition over duplication
- ❌ Don't copy-paste component code

### 3. Type Safety
- ✅ Define TypeScript interfaces for all props
- ✅ Use `as const` for literal types
- ❌ Avoid `any` type

### 4. Import Organization
- ✅ Group imports: external → internal → local
- ✅ Use index files for clean imports
- ❌ Avoid deep relative paths

### 5. File Size
- ✅ Keep components under 300 lines
- ✅ Extract large components into smaller ones
- ❌ Don't create mega files

## 📚 Documentation

- `IMAGE_OPTIMIZATION.md` - Image optimization patterns
- `CLAUDE.md` - Project context for AI assistance
- `FILE_STRUCTURE.md` - This file
- `README.md` - Project overview

## 🔄 Migration Checklist

When adding new features:
- [ ] Add constants to appropriate file in `constants/`
- [ ] Create reusable hooks in `hooks/`
- [ ] Create utilities in `utils/`
- [ ] Build UI components in `components/ui/`
- [ ] Update index files for exports
- [ ] Add TypeScript types
- [ ] Update documentation
