'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePrefersReducedMotion } from '@/app/hooks/usePrefersReducedMotion';
import { CARD_STACK } from '@/app/constants/content';
import { Palette, Code, Rocket, TrendingUp, Settings } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  buttonText?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

interface CardStackProps {
  cards?: readonly Card[] | Card[];
}

const iconMap: { [key: number]: React.ComponentType<any> } = {
  1: Palette,
  2: Code,
  3: Rocket,
  4: TrendingUp,
  5: Settings,
};

export default function CardStack({ cards = CARD_STACK.cards }: CardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const getCardIndex = (virtualIndex: number) => {
    return ((virtualIndex % cards.length) + cards.length) % cards.length;
  };

  const updateCardPositions = (centerIndex: number, dragOffset = 0) => {
    if (prefersReducedMotion) return;

    const visibleRange = 4;

    for (let i = -visibleRange; i <= visibleRange; i++) {
      const virtualIndex = centerIndex + i;
      const card = cardsRef.current.get(virtualIndex);

      if (!card) continue;

      const offset = i + dragOffset / 400;
      const absOffset = Math.abs(offset);

      let x = 0;
      let y = 0;
      let rotation = 0;
      let scale = 1;
      let opacity = 1;

      if (absOffset <= 1) {
        x = offset * 140;
        y = absOffset * 25;
        rotation = offset * 10;
        scale = 1 - absOffset * 0.15;
      } else if (absOffset <= 2) {
        const sign = offset > 0 ? 1 : -1;
        x = sign * (140 + (absOffset - 1) * 100);
        y = 16 + (absOffset - 1) * 24;
        rotation = sign * (10 + (absOffset - 1) * 8);
        scale = 0.85 - (absOffset - 1) * 0.1;
      } else {
        const sign = offset > 0 ? 1 : -1;
        x = sign * (240 + (absOffset - 2) * 60);
        y = 40 + (absOffset - 2) * 20;
        rotation = sign * (18 + (absOffset - 2) * 2);
        scale = 0.75 - (absOffset - 2) * 0.25;
        // Smooth fade out/in
        opacity = Math.max(0, Math.min(1, 1 - (absOffset - 2) * 1.5));
      }

      // Make center card appear in front earlier based on offset
      let zIndex;
      if (absOffset < 0.5) {
        zIndex = 10;
      } else {
        zIndex = 10 - Math.ceil(absOffset);
      }

      gsap.to(card, {
        x,
        y,
        rotation,
        scale,
        opacity,
        zIndex,
        duration: isDragging ? 0.1 : 0.5,
        ease: 'power2.out',
      });
    }
  };

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      // Set initial positions without animation
      const visibleRange = 4;
      for (let i = -visibleRange; i <= visibleRange; i++) {
        const virtualIndex = currentIndex + i;
        const card = cardsRef.current.get(virtualIndex);
        if (!card) continue;

        const offset = i;
        const absOffset = Math.abs(offset);
        let x = 0, y = 0, rotation = 0, scale = 1, opacity = 1;

        if (absOffset <= 1) {
          x = offset * 140;
          y = absOffset * 25;
          rotation = offset * 10;
          scale = 1 - absOffset * 0.15;
        } else if (absOffset <= 2) {
          const sign = offset > 0 ? 1 : -1;
          x = sign * (140 + (absOffset - 1) * 100);
          y = 25 + (absOffset - 1) * 24;
          rotation = sign * (10 + (absOffset - 1) * 8);
          scale = 0.85 - (absOffset - 1) * 0.1;
        } else {
          const sign = offset > 0 ? 1 : -1;
          x = sign * (240 + (absOffset - 2) * 60);
          y = 49 + (absOffset - 2) * 20;
          rotation = sign * (18 + (absOffset - 2) * 2);
          scale = 0.75 - (absOffset - 2) * 0.25;
          opacity = Math.max(0, Math.min(1, 1 - (absOffset - 2) * 1.5));
        }

        const zIndex = absOffset < 0.5 ? 10 : 10 - Math.ceil(absOffset);

        gsap.set(card, { x, y, rotation, scale, opacity, zIndex });
      }
      setIsInitialized(true);
    } else {
      updateCardPositions(currentIndex);
    }
  }, [currentIndex, prefersReducedMotion, isInitialized]);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragCurrentX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;

    dragCurrentX.current = clientX;
    const diff = dragCurrentX.current - dragStartX.current;
    updateCardPositions(currentIndex, diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const diff = dragCurrentX.current - dragStartX.current;
    const threshold = 120;

    if (diff < -threshold) {
      setCurrentIndex(currentIndex + 1);
    } else if (diff > threshold) {
      setCurrentIndex(currentIndex - 1);
    } else {
      updateCardPositions(currentIndex);
    }

    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  // Disabled wheel scroll to prevent rotation on page scroll
  // const handleWheel = (e: React.WheelEvent) => {
  //   e.preventDefault();

  //   const now = Date.now();
  //   if (now - lastWheelTime.current < 300) return;

  //   const delta = e.deltaY || e.deltaX;

  //   if (Math.abs(delta) > 10) {
  //     lastWheelTime.current = now;
  //     if (delta > 0) {
  //       setCurrentIndex(currentIndex + 1);
  //     } else {
  //       setCurrentIndex(currentIndex - 1);
  //     }
  //   }
  // };

  useEffect(() => {
    const handleGlobalMouseUp = () => handleDragEnd();
    const handleGlobalTouchEnd = () => handleDragEnd();

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging, currentIndex]);

  const setCardRef = (virtualIndex: number) => (el: HTMLDivElement | null) => {
    if (el) {
      cardsRef.current.set(virtualIndex, el);
    } else {
      cardsRef.current.delete(virtualIndex);
    }
  };

  const visibleRange = 4;
  const visibleCards = [];
  for (let i = -visibleRange; i <= visibleRange; i++) {
    const virtualIndex = currentIndex + i;
    const cardIndex = getCardIndex(virtualIndex);
    const card = cards[cardIndex];
    visibleCards.push({ virtualIndex, card });
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 bg-white overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-12 text-black md:mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-antonio uppercase tracking-tight leading-none">
          OUR
        </h2>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-antonio uppercase tracking-tight leading-none">
          PACKAGES
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '2000px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[400px] md:h-[550px]">
          {visibleCards.map(({ virtualIndex, card }) => (
            <div
              key={virtualIndex}
              ref={setCardRef(virtualIndex)}
              className="absolute left-1/2 top-1/2 w-[280px] h-[420px] -ml-[140px] -mt-[210px] sm:w-[320px] sm:h-[480px] sm:-ml-[160px] sm:-mt-[240px] md:w-[400px] md:h-[550px] md:-ml-[200px] md:-mt-[275px] rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col text-center select-none"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                opacity: 1,
                backgroundColor: card.bgColor,
              }}
            >
              <div className="flex-1 flex flex-col justify-between pointer-events-none">
                {/* Icon at top */}
                <div className="flex justify-center mb-0">
                  {(() => {
                    const IconComponent = iconMap[card.id];
                    return IconComponent ? (
                      <IconComponent
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        style={{ color: card.textColor, strokeWidth: 1.5 }}
                      />
                    ) : null;
                  })()}
                </div>

                {/* Title and subtitle in center */}
                <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-3 md:gap-4">
                  <h3
                    className="text-xl sm:text-4xl md:text-5xl font-bold font-antonio uppercase tracking-wide"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base md:text-lg font-light leading-relaxed px-2 sm:px-3 md:px-4"
                    style={{ color: card.textColor }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Button at bottom */}
              <div className="flex justify-center">
                <button
                  className="mt-4 sm:mt-5 md:mt-6 px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-colors pointer-events-auto w-auto"
                  style={{
                    backgroundColor: card.buttonBgColor || '#000',
                    color: card.buttonTextColor || '#fff',
                  }}
                >
                  {card.buttonText || 'Join'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
