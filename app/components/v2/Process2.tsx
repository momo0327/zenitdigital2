'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';
import styles from './Process2.module.css';

type Slide =
  | {
      type: 'intro';
      title: string;
      subtitle: string;
    }
  | {
      type: 'step';
      number: string;
      title: string;
      subtitle: string;
      bg: string;
      textColor: string;
      numberColor: string;
    };

const SLIDES: Slide[] = [
  {
    type: 'intro',
    title: 'Vår process',
    subtitle:
      'Från idé till lansering – så jobbar vi tillsammans för att bygga digitala produkter som faktiskt levererar resultat.',
  },
  {
    type: 'step',
    number: '01',
    title: 'Research',
    subtitle:
      'Vi sätter oss in i er verksamhet, era användare och er marknad för att förstå vad som verkligen behöver byggas.',
    bg: '#F8F9F6',
    textColor: '#021100',
    numberColor: '#021100',
  },
  {
    type: 'step',
    number: '02',
    title: 'Design',
    subtitle:
      'Vi formger upplevelsen och gränssnittet – snyggt, tydligt och byggt för att konvertera besökare till kunder.',
    bg: '#B4FFA8',
    textColor: '#021100',
    numberColor: '#021100',
  },
  {
    type: 'step',
    number: '03',
    title: 'Build',
    subtitle:
      'Vi utvecklar, testar och lanserar produkten – snabbt, skalbart och redo att växa tillsammans med er verksamhet.',
    bg: '#021100',
    textColor: '#ffffff',
    numberColor: '#B4FFA8',
  },
];

const Process2 = () => {
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);
  const debouncedScrollProgress = useDebounce(scrollProgress, 16);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const progress = slideRefs.current.map((_ref, i) => {
        const nextRef = slideRefs.current[i + 1];
        if (!nextRef) return 0;

        const nextRect = nextRef.getBoundingClientRect();
        const coverage = Math.max(
          0,
          Math.min(1, (window.innerHeight - nextRect.top) / window.innerHeight)
        );
        return coverage;
      });

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {SLIDES.map((slide, i) => {
        const progress = debouncedScrollProgress[i] || 0;
        const blur = progress * 10;
        const scale = 1 - progress * 0.15;
        const opacity = 1 - progress * 0.6;

        return (
          <div
            key={slide.type === 'intro' ? 'intro' : slide.number}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className={styles.slide}
            style={{ zIndex: i + 1 }}
          >
            {slide.type === 'intro' ? (
              <div
                className={styles.introInner}
                style={{
                  filter: `blur(${blur}px)`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                }}
              >
                <div className={styles.introContent} style={{ opacity }}>
                  <h2 className={styles.introTitle}>{slide.title}</h2>
                  <div className={styles.introSubtitleRow}>
                    <p className={styles.introSubtitle}>{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={styles.stepInner}
                style={{
                  backgroundColor: slide.bg,
                  filter: `blur(${blur}px)`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                }}
              >
                <div className={styles.stepContent} style={{ opacity }}>
                  <span
                    className={styles.stepNumber}
                    style={{ color: slide.numberColor }}
                  >
                    {slide.number}
                  </span>
                  <div className={styles.stepText}>
                    <h3
                      className={styles.stepTitle}
                      style={{ color: slide.textColor }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      className={styles.stepSubtitle}
                      style={{ color: slide.textColor }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Process2;
