# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 company website for Zenit Digital built with React 19, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture and includes animated UI components with GSAP.

## Tech Stack

- **Framework**: Next.js 15.5.3 with Turbopack
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animation**: GSAP 3.13.0
- **Fonts**: Google Fonts (Antonio, Geist Sans, Geist Mono)

## Common Commands

```bash
# Development
npm run dev          # Start development server with Turbopack

# Build & Deploy
npm run build        # Build for production with Turbopack
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Project Structure

### App Router Organization
- `app/page.tsx` - Homepage
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/globals.css` - Global styles with Tailwind and custom CSS variables
- `app/ContactPage/` - Contact page route
- `app/WebDev/` - Web development services page
- `app/MobileDev/` - Mobile development services page
- `app/FullstackDev/` - Full-stack development services page

### Components Architecture
- `app/components/` - Shared React components
  - `navbar.tsx` - Main navigation with StaggeredMenu integration
  - `StaggeredMenu.tsx` - Complex animated menu component using GSAP
  - `header.tsx`, `subHeader.tsx`, `ReversedHeader.tsx`, `triHeader.tsx` - Various header layouts
  - `FeaturesGrid.tsx` - Features display grid
  - `HelpGrid.tsx` - Help/support grid section
  - `selectedWorks.tsx` - Portfolio/case studies section
  - `Cta.tsx`, `GreenCta.tsx` - Call-to-action components
  - `Footer.tsx` - Site footer
  - Page-specific component subdirectories:
    - `WebDevPageComponents/`
    - `MobiledevPageComponents/`
    - `FullstackDevPageComponents/`

### Styling System
- Custom font: Antonio (loaded via Google Fonts)
- CSS variables for theming (background, foreground)
- Dark mode support via `prefers-color-scheme`
- Tailwind configuration via PostCSS plugin
- Path alias: `@/*` maps to root directory

### Animation Implementation
- GSAP is used for complex animations, particularly in `StaggeredMenu.tsx`
- StaggeredMenu features:
  - Timeline-based open/close animations
  - Icon rotation animations
  - Text cycle animations
  - Color transition effects
  - Staggered entrance animations for menu items
  - Uses React refs and `useLayoutEffect` for DOM manipulation

## Key Technical Details

### StaggeredMenu Component
This is a sophisticated animated navigation menu with:
- Position configuration (left/right)
- Customizable gradient background layers
- GSAP-powered animations for smooth transitions
- Mobile-responsive full-screen overlay
- Social links display
- Item numbering system
- Extensive inline styles for z-index management and fixed positioning

### Configuration Files
- `tsconfig.json` - TypeScript config with strict mode, ES2017 target
- `next.config.ts` - Next.js configuration (minimal setup)
- `postcss.config.mjs` - PostCSS with Tailwind plugin
- `eslint.config.mjs` - ESLint configuration

### Client Components
Components using hooks or browser APIs must include `'use client'` directive (e.g., `navbar.tsx`, `StaggeredMenu.tsx`)

## Development Notes

- Turbopack is enabled for faster builds and dev server
- All component imports use relative paths
- Image assets are in `/public` directory
- The project uses the App Router, not Pages Router
- TypeScript strict mode is enabled
