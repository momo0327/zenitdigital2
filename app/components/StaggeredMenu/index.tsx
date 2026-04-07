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
import styles from './StaggeredMenu.module.css';

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

    const itemEls = Array.from(panel.querySelectorAll('[data-sm="panel-itemLabel"]')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('[data-sm="panel-list"][data-numbering] [data-sm="panel-item"]')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('[data-sm="socials-title"]') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('[data-sm="socials-link"]')) as HTMLElement[];

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
        ? Array.from(preContainer.querySelectorAll('[data-sm="prelayer"]')) as HTMLElement[]
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
    if (!openRef.current) {
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
      return;
    }

    const target = !openRef.current;
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;

    // Set busy state before starting animations
    busyRef.current = true;

    if (target && panel) {
      openRef.current = true;
      setOpen(true);
      onMenuOpen?.();
      playOpen(panel, layers);
      animateIcon(true);
      animateColor(true);
      animateText(true);
    } else {
      handleClose();
    }

    // Clear busy state after longest animation completes
    // itemEntrance (1s) is the longest, plus buffer for text animation cycles
    const maxDuration = prefersReducedMotion ? 200 : 1200;
    setTimeout(() => {
      busyRef.current = false;
    }, maxDuration);
  }, [playOpen, handleClose, animateIcon, animateColor, animateText, onMenuOpen, prefersReducedMotion]);

  const wrapperClassName = [className, styles.wrapper].filter(Boolean).join(' ');

  return (
    <div
      className={wrapperClassName}
      style={accentColor ? ({ '--sm-accent': accentColor } as StyleProps) : undefined}
      data-position={position}
      data-open={open || undefined}
      data-sm="wrapper"
    >
      {/* Background layers */}
      <div
        ref={preLayersRef}
        className={styles.prelayers}
        aria-hidden="true"
      >
        {colorLayers.map((c, i) => (
          <div
            key={i}
            className={styles.prelayer}
            data-sm="prelayer"
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
      />
    </div>
  );
};

export default StaggeredMenu;
