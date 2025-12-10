'use client'

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/app/hooks/usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextRevealProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  dimColor?: string;
  start?: string;
  end?: string;
  enableHaptic?: boolean;
  hapticIntensity?: number;
}

export default function ScrollTextReveal({
  children,
  className = '',
  highlightColor = 'currentColor',
  dimColor = 'rgba(0, 0, 0, 0.2)',
  start = 'top 80%',
  end = 'top 20%',
  enableHaptic = false,
  hapticIntensity = 5
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const lastVibrateTime = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    if (prefersReducedMotion) return;

    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll('.reveal-word');

      if (elements.length === 0) return;

      // Haptic feedback function
      const triggerHaptic = () => {
        if (!enableHaptic || prefersReducedMotion) return;

        const now = Date.now();
        // Throttle vibrations to max once every 100ms
        if (now - lastVibrateTime.current < 100) return;

        if ('vibrate' in navigator) {
          navigator.vibrate(hapticIntensity);
          lastVibrateTime.current = now;
        }
      };

      const ctx = gsap.context(() => {
        // Create smooth color transition for each word
        gsap.fromTo(
          elements,
          {
            color: dimColor
          },
          {
            color: highlightColor,
            stagger: {
              each: 0.05,
              ease: 'none'
            },
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: start,
              end: end,
              scrub: 1,
              onUpdate: (self) => {
                // Trigger haptic when scroll progress is actively changing
                if (self.progress > 0 && self.progress < 1) {
                  triggerHaptic();
                }
              }
            }
          }
        );
      }, containerRef);

      return () => {
        ctx.revert();
      };
    });
  }, [highlightColor, dimColor, start, end, prefersReducedMotion, enableHaptic, hapticIntensity]);

  // If user prefers reduced motion, show text normally
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
