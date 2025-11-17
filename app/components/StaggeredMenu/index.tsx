'use client'
import React, { useState, useRef, useCallback, useLayoutEffect, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { StaggeredMenuHeader } from './StaggeredMenuHeader';
import { StaggeredMenuPanel } from './StaggeredMenuPanel';
import { useMenuAnimations } from './animations/useMenuAnimations';
import { useIconAnimation } from './animations/useIconAnimation';
import { useColorAnimation } from './animations/useColorAnimation';
import { useTextAnimation } from './animations/useTextAnimation';
import { useOnClickOutside } from '@/app/hooks/useOnClickOutside';
import { usePageVisibility } from '@/app/hooks/usePageVisibility';
import { usePrefersReducedMotion } from '@/app/hooks/usePrefersReducedMotion';
import { getOffscreenValue, killTweens, type CSSCustomProperties } from '@/app/utils/gsapHelpers';
import { StaggeredMenuProps, StyleProps } from './StaggeredMenu.types';
import { DEFAULT_COLORS, DEFAULT_LOGO_URL, DEFAULT_ACCENT_COLOR } from './StaggeredMenu.constants';

/**
 * StaggeredMenu - Animated overlay navigation menu
 *
 * Features:
 * - Smooth GSAP-powered animations
 * - Customizable colors and positioning
 * - Accessibility support (reduced motion, ARIA labels)
 * - Social links integration
 * - Responsive design
 */
export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = DEFAULT_COLORS,
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = DEFAULT_LOGO_URL,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = DEFAULT_ACCENT_COLOR,
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const busyRef = useRef(false);

  // DOM element refs
  const panelRef = useRef<HTMLDivElement>(null!);
  const preLayersRef = useRef<HTMLDivElement>(null!);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const toggleBtnRef = useRef<HTMLButtonElement>(null!);
  const plusHRef = useRef<HTMLSpanElement>(null!);
  const plusVRef = useRef<HTMLSpanElement>(null!);
  const iconRef = useRef<HTMLSpanElement>(null!);
  const textInnerRef = useRef<HTMLSpanElement>(null!);
  const textWrapRef = useRef<HTMLSpanElement>(null!);

  // Memoize computed values
  const offscreen = useMemo(() => getOffscreenValue(position), [position]);

  const colorLayers = useMemo(() => {
    const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
    const arr = [...raw];
    if (arr.length >= 3) {
      const mid = Math.floor(arr.length / 2);
      arr.splice(mid, 1);
    }
    return arr;
  }, [colors]);

  // Extract shared panel reset logic
  const resetPanelElements = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 } as CSSCustomProperties);
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
  }, []);

  // Accessibility hooks
  const prefersReducedMotion = usePrefersReducedMotion();
  const isPageVisible = usePageVisibility();

  // Animation hooks
  const { playOpen, playClose, openTlRef, closeTweenRef, itemEntranceTweenRef } = useMenuAnimations(
    position,
    prefersReducedMotion,
    resetPanelElements
  );
  const { animateIcon, spinTweenRef } = useIconAnimation(iconRef, plusHRef, plusVRef);
  const { animateColor, colorTweenRef } = useColorAnimation(
    toggleBtnRef,
    menuButtonColor,
    openMenuButtonColor,
    changeMenuColorOnOpen,
    prefersReducedMotion
  );
  const { animateText, textLines, textCycleAnimRef } = useTextAnimation(textInnerRef, prefersReducedMotion);

  // Pause animations when tab is hidden
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPageVisible) {
        gsap.globalTimeline.pause();
      } else {
        gsap.globalTimeline.resume();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isPageVisible]);

  // Cleanup all animations on unmount
  useEffect(() => {
    return () => {
      // Kill all animations when component unmounts
      // Note: We intentionally capture ref values at cleanup time, not effect creation time
      // This ensures we clean up whatever animations exist when the component unmounts
      killTweens(
        openTlRef.current,
        closeTweenRef.current,
        spinTweenRef.current,
        textCycleAnimRef.current,
        colorTweenRef.current,
        itemEntranceTweenRef.current
      );
    };
  }, []);

  // Initialize GSAP settings
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      // Early return before context operations
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      // Group related element queries
      const preLayers = preContainer
        ? Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[]
        : [];

      preLayerElsRef.current = preLayers;

      // Single batch set for performance - panel and layers
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      // Single batch set for icon elements
      gsap.set([plusH, plusV, icon], { transformOrigin: '50% 50%' });
      gsap.set(plusH, { rotate: 0 });
      gsap.set(plusV, { rotate: 90 });
      gsap.set(icon, { rotate: 0 });

      // Set text initial state
      gsap.set(textInner, { yPercent: 0 });

      // Set button color
      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }, panelRef); // Scope to panel for better cleanup

    return () => ctx.revert();
  }, [menuButtonColor, offscreen]);

  // Sync button color when props change
  useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  // Shared close handler
  const handleClose = useCallback(() => {
    console.log('🔴 handleClose called, openRef.current:', openRef.current);
    if (!openRef.current) {
      console.log('⚠️ handleClose exiting early - menu already closed');
      return;
    }

    openRef.current = false;
    setOpen(false);
    onMenuClose?.();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (panel) {
      playClose(panel, layers);
    }
    console.log('🎨 Calling close animations...');
    animateIcon(false);
    animateColor(false);
    animateText(false);
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  // Close menu when clicking outside
  useOnClickOutside(panelRef, handleClose);

  // Toggle menu open/close
  const toggleMenu = useCallback(() => {
    // Prevent rapid toggling while animations are in progress
    if (busyRef.current) {
      console.log('⏸️ Menu is busy, ignoring toggle');
      return;
    }

    const target = !openRef.current;
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;

    console.log('🔵 toggleMenu called:', { target, hasPanel: !!panel, currentOpen: openRef.current });

    // Set busy state before starting animations
    busyRef.current = true;

    if (target && panel) {
      console.log('✅ Opening menu...');
      openRef.current = true;
      setOpen(true);
      onMenuOpen?.();
      playOpen(panel, layers);
      animateIcon(true);
      animateColor(true);
      animateText(true);
    } else {
      console.log('❌ Closing menu...');
      handleClose();
    }

    // Clear busy state after longest animation completes
    // itemEntrance (1s) is the longest, plus buffer for text animation cycles
    const maxDuration = prefersReducedMotion ? 200 : 1200;
    setTimeout(() => {
      busyRef.current = false;
      console.log('🔓 Menu no longer busy');
    }, maxDuration);
  }, [playOpen, handleClose, animateIcon, animateColor, animateText, onMenuOpen, prefersReducedMotion]);

  return (
    <div className="sm-scope w-full h-full">
      <div
        className={(className ? className + ' ' : '') + 'staggered-menu-wrapper relative w-full h-full z-40'}
        style={accentColor ? ({ '--sm-accent': accentColor } as StyleProps) : undefined}
        data-position={position}
        data-open={open || undefined}
      >
        {/* Background layers */}
        <div
          ref={preLayersRef}
          className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
          aria-hidden="true"
        >
          {colorLayers.map((c, i) => (
            <div
              key={i}
              className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Header with logo and toggle */}
        <StaggeredMenuHeader
          logoUrl={logoUrl}
          open={open}
          toggleBtnRef={toggleBtnRef}
          textWrapRef={textWrapRef}
          textInnerRef={textInnerRef}
          iconRef={iconRef}
          plusHRef={plusHRef}
          plusVRef={plusVRef}
          textLines={textLines}
          onToggle={toggleMenu}
        />

        {/* Menu panel */}
        <StaggeredMenuPanel
          ref={panelRef}
          open={open}
          items={items}
          socialItems={socialItems}
          displaySocials={displaySocials}
          displayItemNumbering={displayItemNumbering}
          accentColor={accentColor}
        />
      </div>

      {/* Inline styles (kept from original component) */}
      <style>{`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; }
.sm-scope .staggered-menu-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 2em; background: transparent; pointer-events: none; z-index: 20; }
.sm-scope .staggered-menu-header > * { pointer-events: auto; }
.sm-scope .sm-logo { display: flex; align-items: center; user-select: none; }
.sm-scope .sm-logo-img { display: block; height: 32px; width: auto; object-fit: contain; }
.sm-scope .sm-toggle { position: relative; display: inline-flex; align-items: center; gap: 0.3rem; background: transparent; border: none; cursor: pointer; color: #e9e9ef; font-weight: 500; line-height: 1; overflow: visible; }
.sm-scope .sm-toggle:focus-visible { outline: 2px solid #ffffffaa; outline-offset: 4px; border-radius: 4px; }
.sm-scope .sm-line:last-of-type { margin-top: 6px; }
.sm-scope .sm-toggle-textWrap { position: relative; margin-right: 0.5em; display: inline-block; height: 1em; overflow: hidden; white-space: nowrap; width: var(--sm-toggle-width, auto); min-width: var(--sm-toggle-width, auto); }
.sm-scope .sm-toggle-textInner { display: flex; flex-direction: column; line-height: 1; }
.sm-scope .sm-toggle-line { display: block; height: 1em; line-height: 1; }
.sm-scope .sm-icon { position: relative; width: 14px; height: 14px; flex: 0 0 14px; display: inline-flex; align-items: center; justify-content: center; will-change: transform; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.sm-scope .sm-icon-line { position: absolute; left: 50%; top: 50%; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transform: translate(-50%, -50%); will-change: transform; }
.sm-scope .sm-line { display: none !important; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(260px, 38vw, 420px); height: 100%; background: white; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; padding: 6em 2em 2em 2em; overflow-y: auto; z-index: 10; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(260px, 38vw, 420px); pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-list .sm-socials-link { opacity: 1; transition: opacity 0.3s ease; }
.sm-scope .sm-socials-list:hover .sm-socials-link:not(:hover) { opacity: 0.35; }
.sm-scope .sm-socials-list:focus-within .sm-socials-link:not(:focus-visible) { opacity: 0.35; }
.sm-scope .sm-socials-list .sm-socials-link:hover,
.sm-scope .sm-socials-list .sm-socials-link:focus-visible { opacity: 1; }
.sm-scope .sm-socials-link:focus-visible { outline: 2px solid var(--sm-accent, #ff0000); outline-offset: 3px; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #111; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-title { margin: 0; font-size: 1rem; font-weight: 600; color: #fff; text-transform: uppercase; }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #000; font-weight: 600; font-size: 5rem; font-antonio; cursor: pointer; line-height: 1; letter-spacing: -2px; text-transform: uppercase; transition: background 0.25s, color 0.25s; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-item:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-list[data-numbering] { counter-reset: smItem; }
.sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after { counter-increment: smItem; content: counter(smItem, decimal-leading-zero); position: absolute; top: 0.1em; right: 3.2em; font-size: 18px; font-weight: 400; color: var(--sm-accent, #ff0000); letter-spacing: 0; pointer-events: none; user-select: none; opacity: var(--sm-num-opacity, 0); }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .staggered-menu-wrapper[data-open] .sm-logo-img { filter: invert(100%); } }
@media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } .sm-scope .staggered-menu-wrapper[data-open] .sm-logo-img { filter: invert(100%); } }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;
