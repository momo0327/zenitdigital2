'use client'
import React from 'react';
import { useIntersectionObserver } from '@/app/hooks/useIntersectionObserver';

export interface FadeInOnScrollProps {
  children: React.ReactNode;
  /**
   * Animation direction
   * @default 'up'
   */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /**
   * Animation duration in milliseconds
   * @default 600
   */
  duration?: number;
  /**
   * Animation delay in milliseconds
   * @default 0
   */
  delay?: number;
  /**
   * Percentage of element that must be visible to trigger animation
   * @default 0.2
   */
  threshold?: number;
  /**
   * If true, animation only plays once
   * @default true
   */
  once?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Component that fades in and slides when scrolled into view
 *
 * Uses Intersection Observer for performance-optimized scroll animations
 *
 * @example
 * ```tsx
 * <FadeInOnScroll direction="up" delay={200}>
 *   <div>This content will fade in from below</div>
 * </FadeInOnScroll>
 * ```
 */
export const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  direction = 'up',
  duration = 600,
  delay = 0,
  threshold = 0.2,
  once = true,
  className = '',
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: once,
  });

  // Calculate transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(40px)';
      case 'down':
        return 'translateY(-40px)';
      case 'left':
        return 'translateX(40px)';
      case 'right':
        return 'translateX(-40px)';
      case 'none':
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
