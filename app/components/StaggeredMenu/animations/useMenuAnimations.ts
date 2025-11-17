import { useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { killTweens, animateOffscreen, type CSSCustomProperties } from '@/app/utils/gsapHelpers';
import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from '../StaggeredMenu.constants';

/**
 * Hook for managing main menu open/close animations
 */
export const useMenuAnimations = (
  position: 'left' | 'right',
  prefersReducedMotion: boolean,
  resetPanelElements: () => void
) => {
  const openTlRef = useRef<gsap.core.Timeline | undefined>(undefined);
  const closeTweenRef = useRef<gsap.core.Tween | undefined>(undefined);
  const itemEntranceTweenRef = useRef<gsap.core.Tween | undefined>(undefined);
  const busyRef = useRef(false);

  const buildOpenTimeline = useCallback(
    (panel: HTMLElement, layers: HTMLElement[]) => {
      // Adjust durations for reduced motion preference
      const getDuration = (base: number) => prefersReducedMotion ? ANIMATION_DURATIONS.reduced : base;

      // Kill any existing animations using helper
      killTweens(openTlRef.current, closeTweenRef.current, itemEntranceTweenRef.current);
      closeTweenRef.current = undefined;

      // Reset panel elements to initial state
      resetPanelElements();

      const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
      const numberEls = Array.from(
        panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
      ) as HTMLElement[];
      const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
      const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

      const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
      const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

      const tl = gsap.timeline({ paused: true });

      layerStates.forEach((ls, i) => {
        tl.fromTo(
          ls.el,
          { xPercent: ls.start },
          { xPercent: 0, duration: getDuration(ANIMATION_DURATIONS.layer), ease: ANIMATION_EASINGS.panelOpen },
          i * 0.07
        );
      });

      const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
      const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);

      tl.fromTo(
        panel,
        { xPercent: panelStart },
        { xPercent: 0, duration: getDuration(ANIMATION_DURATIONS.panel), ease: ANIMATION_EASINGS.panelOpen },
        panelInsertTime
      );

      if (itemEls.length) {
        const itemsStartRatio = 0.15;
        const itemsStart = panelInsertTime + getDuration(ANIMATION_DURATIONS.panel) * itemsStartRatio;

        tl.to(
          itemEls,
          {
            yPercent: 0,
            rotate: 0,
            duration: getDuration(ANIMATION_DURATIONS.itemEntrance),
            ease: ANIMATION_EASINGS.panelOpen,
            stagger: { each: 0.1, from: 'start' }
          },
          itemsStart
        );

        if (numberEls.length) {
          tl.to(
            numberEls,
            {
              duration: getDuration(ANIMATION_DURATIONS.numberFade),
              ease: ANIMATION_EASINGS.numberFade,
              stagger: { each: 0.08, from: 'start' },
              ...({ '--sm-num-opacity': 1 } as CSSCustomProperties)
            },
            itemsStart + 0.1
          );
        }
      }

      if (socialTitle || socialLinks.length) {
        const socialsStart = panelInsertTime + getDuration(ANIMATION_DURATIONS.panel) * 0.4;

        if (socialTitle) {
          tl.to(
            socialTitle,
            { opacity: 1, duration: getDuration(ANIMATION_DURATIONS.text), ease: ANIMATION_EASINGS.color },
            socialsStart
          );
        }
        if (socialLinks.length) {
          tl.to(
            socialLinks,
            {
              y: 0,
              opacity: 1,
              duration: getDuration(ANIMATION_DURATIONS.socialFade),
              ease: ANIMATION_EASINGS.socialFade,
              stagger: { each: 0.08, from: 'start' },
              onComplete: () => {
                gsap.set(socialLinks, { clearProps: 'opacity' });
              }
            },
            socialsStart + 0.04
          );
        }
      }

      openTlRef.current = tl;
      return tl;
    },
    [resetPanelElements, prefersReducedMotion]
  );

  const playOpen = useCallback(
    (panel: HTMLElement, layers: HTMLElement[]) => {
      if (busyRef.current) return;
      busyRef.current = true;
      const tl = buildOpenTimeline(panel, layers);
      if (tl) {
        tl.eventCallback('onComplete', () => {
          busyRef.current = false;
        });
        tl.play(0);
      } else {
        busyRef.current = false;
      }
    },
    [buildOpenTimeline]
  );

  const playClose = useCallback(
    (panel: HTMLElement, layers: HTMLElement[]) => {
      // Kill existing animations using helper
      killTweens(openTlRef.current, itemEntranceTweenRef.current, closeTweenRef.current);
      openTlRef.current = undefined;

      const all: HTMLElement[] = [...layers, panel];

      // Animate offscreen using helper
      closeTweenRef.current = animateOffscreen(all, position, {
        onComplete: () => {
          resetPanelElements();
          busyRef.current = false;
        }
      });
    },
    [position, resetPanelElements]
  );

  return {
    playOpen,
    playClose,
    openTlRef,
    closeTweenRef,
    itemEntranceTweenRef,
    busyRef,
  };
};
