# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 company website for Zenit Digital built with React 19, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture and includes animated UI components with GSAP.

## Tech Stack

- **Framework**: Next.js 15.5.3 with Turbopack
- **React**: 19.1.0
- **TypeScript**: 5.x (strict mode enabled)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animation**: GSAP 3.13.0
- **Icons**: lucide-react
- **Fonts**: Geist Sans, Geist Mono (via next/font)

## Common Commands

```bash
# Development
npm run dev          # Start development server with Turbopack

# Build & Deploy
npm run build        # Build for production with Turbopack
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint (configured with Next.js ESLint rules)
```

## Project Architecture

### Directory Structure
```
app/
├── components/          # Shared React components
│   ├── StaggeredMenu/  # Complex animated menu (modular structure)
│   ├── sections/       # Reusable page sections
│   └── ui/            # Base UI components (Skeleton, Images, etc.)
├── constants/          # Centralized configuration and content
│   ├── content.ts     # Marketing copy, company info, CTA text
│   ├── navigation.ts  # All navigation items and menu structures
│   ├── seo.ts        # SEO metadata and schema
│   └── theme.ts      # Brand colors and theme tokens
├── hooks/             # Custom React hooks
├── utils/             # Utility functions (GSAP helpers, image utils)
├── [page-routes]/     # Route-specific pages (WebDev, MobileDev, etc.)
└── globals.css       # Global styles with CSS variables
```

### App Router Pages
- `app/page.tsx` - Homepage
- `app/layout.tsx` - Root layout with fonts, SEO, and structure (Navbar, Footer, CookieConsent)
- `app/about/page.tsx` - About page
- `app/ContactPage/` - Contact page route
- `app/WebDev/`, `app/MobileDev/`, `app/FullstackDev/` - Service pages
- `app/work/page.tsx` - Portfolio page
- `app/faqs/page.tsx` - FAQ page
- `app/services/page.tsx` - Services overview
- `app/privacy/page.tsx`, `app/terms/page.tsx` - Legal pages
- `app/sitemap.ts`, `app/robots.ts` - SEO configuration files

### Component Organization

**Base Components**
- `navbar.tsx` - Main navigation with StaggeredMenu integration
- `Footer.tsx` - Site footer with company info and navigation
- `ContactForm.tsx` - Contact form with validation
- `CookieConsent.tsx` - GDPR-compliant cookie consent banner

**Layout Components**
- `header.tsx`, `subHeader.tsx`, `ReversedHeader.tsx`, `triHeader.tsx` - Various header layouts
- `sections/PageHeader.tsx` - Standardized page header component
- `sections/ServiceCard.tsx` - Service card component

**Feature Components**
- `FeaturesGrid.tsx` - Feature display grid
- `HelpGrid.tsx` - Help/support grid section
- `selectedWorks.tsx` - Portfolio/case studies section
- `Achievments.tsx` - Achievement stats display
- `Faq.tsx` - FAQ accordion component
- `Steps.tsx` - Process steps component

**CTA Components**
- `Cta.tsx`, `GreenCta.tsx` - Call-to-action components

**UI Components** (`app/components/ui/`)
- `Skeleton.tsx` - Loading skeleton component
- `PageSkeletons.tsx` - Page-specific loading states
- `OptimizedImage.tsx` - Image component with optimization
- `ResponsiveImage.tsx` - Responsive image handling
- `FadeInOnScroll.tsx` - Scroll-based animation wrapper

**Page-Specific Components**
- `WebDevPageComponents/` - Web development page components
- `MobiledevPageComponents/` - Mobile development page components
- `FullstackDevPageComponents/` - Fullstack development page components

### StaggeredMenu Architecture

The `StaggeredMenu` component is a sophisticated animated navigation menu with modular architecture:

**Structure:**
- `index.tsx` - Main component orchestrating animations and state
- `StaggeredMenuHeader.tsx` - Logo and toggle button
- `StaggeredMenuPanel.tsx` - Menu panel with navigation items
- `StaggeredMenuToggle.tsx` - Toggle button component
- `StaggeredMenu.types.ts` - TypeScript type definitions
- `StaggeredMenu.constants.ts` - Default configuration values

**Animation Hooks** (`animations/`):
- `useMenuAnimations.ts` - Panel open/close animations
- `useIconAnimation.ts` - Toggle icon rotation animations
- `useTextAnimation.ts` - Text cycling animations
- `useColorAnimation.ts` - Color transition effects

**Key Features:**
- GSAP-powered timeline animations with stagger effects
- Accessibility support (reduced motion, keyboard navigation)
- Position configuration (left/right)
- Customizable gradient backgrounds
- Social links integration
- Mobile-responsive full-screen overlay

### Constants Architecture

Centralized configuration files in `app/constants/`:

**content.ts** - Single source of truth for all copy:
- `COMPANY` - Company information (name, contact, address)
- `MARKETING_COPY` - Reusable taglines and marketing text
- `SERVICES` - Service page content (web, mobile, fullstack)
- `CTA` - Call-to-action button labels
- `FOOTER` - Footer content and links
- `FEATURES` - Feature grid content
- `PORTFOLIO_ITEMS` - Portfolio case studies
- `FAQ_ITEMS` - FAQ questions and answers
- `CONTACT_FORM` - Form labels and validation messages

**navigation.ts** - All navigation structures:
- `MAIN_NAV_ITEMS` - Primary navigation
- `CENTER_NAV_ITEMS` - Center navigation items
- `SERVICES_NAV` - Service navigation with descriptions
- `SOCIAL_LINKS` - Social media links
- `FOOTER_NAV` - Footer navigation structure
- `MOBILE_MENU_ITEMS` - Mobile-specific navigation

**theme.ts** - Brand colors and design tokens:
- `BRAND_COLORS` - Primary brand color palette
- Theme-related constants

**seo.ts** - SEO metadata and structured data:
- `DEFAULT_METADATA` - Default Next.js metadata
- `LOCAL_BUSINESS_SCHEMA` - JSON-LD schema for Swedish market SEO

### Custom Hooks System

Comprehensive set of custom React hooks in `app/hooks/`:

**Image Optimization:**
- `useOptimizedImage` - Image optimization utilities
- `useBlurDataURL` - Generate blur placeholder data URLs
- `useProgressiveImage` - Progressive image loading
- `useImagePreload` - Preload images for faster display

**UI Interaction:**
- `useOnClickOutside` - Detect clicks outside an element
- `useDragScroll` - Drag-to-scroll functionality

**Performance:**
- `useDebounce` - Debounce values
- `useThrottle` - Throttle function calls
- `useIntersectionObserver` - Observe element visibility

**Responsive Design:**
- `useMediaQuery` - Match media queries
- `useBreakpoint` - Get current breakpoint
- `useWindowSize` - Track window dimensions
- `useWindowSizeDebounced` - Debounced window size

**State Management:**
- `useLocalStorage` - Persist state to localStorage
- `usePrevious` - Track previous value
- `usePageVisibility` - Detect when tab is visible

**Accessibility:**
- `usePrefersReducedMotion` - Respect user motion preferences

### Utility Functions

**gsapHelpers.ts** - GSAP animation utilities:
- `getOffscreenValue()` - Calculate off-screen positioning
- `killTweens()` - Clean up GSAP animations
- `CSSCustomProperties` type for CSS custom properties

**image.ts** - Image processing utilities

## Key Technical Details

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Path alias: `@/*` maps to root directory
- Module resolution: bundler (optimized for Next.js)

### Client Components
Components using hooks or browser APIs must include `'use client'` directive:
- Navigation components (navbar, StaggeredMenu)
- Interactive components (ContactForm, CookieConsent)
- Animation components (FadeInOnScroll)

### GSAP Animation Patterns
- Use `useLayoutEffect` for DOM-dependent GSAP setup
- Always create cleanup functions with `gsap.context().revert()`
- Use refs for DOM elements, never query selectors directly in effects
- Respect `prefersReducedMotion` for accessibility
- Pause animations when page visibility changes

### Content Management
- All text content should be added to `app/constants/content.ts`
- All navigation items should be defined in `app/constants/navigation.ts`
- This ensures consistency and makes updates easy
- Import from `@/app/constants` or `@/constants` using the path alias

### Styling Approach
- Tailwind CSS 4 for styling (configured via PostCSS)
- CSS variables for theming in `globals.css`
- Dark mode support via `prefers-color-scheme`
- Antonio font for headings (custom), Geist for body text
- Responsive breakpoints: mobile (640px), tablet (768px), desktop (1024px)

### SEO & Performance
- Metadata exported from page components using Next.js Metadata API
- LocalBusiness JSON-LD schema for Swedish market SEO
- Loading states with Skeleton components
- Image optimization with custom hooks and Next.js Image
- `robots.ts` and `sitemap.ts` for search engine configuration

### Error Handling
- `error.tsx` - Route-level error boundary
- `global-error.tsx` - Global error boundary
- `not-found.tsx` - 404 page
- `loading.tsx` - Loading states for pages

## Development Workflow

1. **Adding New Content**: Update constants files first, then use them in components
2. **Creating New Pages**: Follow App Router conventions, add metadata, include loading/error states
3. **New Components**: Place in appropriate directory (components/, sections/, ui/)
4. **Animations**: Use existing GSAP hooks or create new ones following established patterns
5. **Styling**: Use Tailwind classes, refer to theme constants for colors
6. **Navigation**: Add new routes to navigation constants, update StaggeredMenu items

## Important Notes

- Turbopack is enabled for faster builds and dev server (--turbopack flag)
- All component imports use path alias `@/app/...` or relative paths
- Image assets are in `/public` directory
- The project uses App Router, not Pages Router
- SEO is configured for Swedish market (Göteborg office location)
- Company contact: hello@zenitdigital.se
