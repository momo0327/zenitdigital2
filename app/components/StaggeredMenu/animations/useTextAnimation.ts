import { useState, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { killTweens } from '@/app/utils/gsapHelpers';
import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from '../StaggeredMenu.constants';

/**
 * Hook for managing menu text cycling animation (Menu ↔ Close)
 */
export const useTextAnimation = (
  textInnerRef: React.RefObject<HTMLSpanElement>,
  prefersReducedMotion: boolean
) => {
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);
  const textCycleAnimRef = useRef<gsap.core.Tween | undefined>(undefined);

  const animateText = useCallback(
    (opening: boolean) => {
      const inner = textInnerRef.current;
      if (!inner) {
        console.log('⚠️ textInnerRef.current is null');
        return;
      }

      console.log('🎬 animateText called:', { opening, currentTextLines: textLines });

      // Kill existing animation using helper
      killTweens(textCycleAnimRef.current);

      const currentLabel = opening ? 'Menu' : 'Close';
      const targetLabel = opening ? 'Close' : 'Menu';
      const cycles = 3;

      const seq: string[] = [currentLabel];
      let last = currentLabel;
      for (let i = 0; i < cycles; i++) {
        last = last === 'Menu' ? 'Close' : 'Menu';
        seq.push(last);
      }
      if (last !== targetLabel) seq.push(targetLabel);
      seq.push(targetLabel);

      console.log('📝 New textLines sequence:', seq);

      setTextLines(seq);
      gsap.set(inner, { yPercent: 0 });

      const lineCount = seq.length;
      const finalShift = ((lineCount - 1) / lineCount) * 100;
      const duration = prefersReducedMotion
        ? ANIMATION_DURATIONS.reduced
        : ANIMATION_DURATIONS.text + lineCount * 0.07;

      console.log('✨ Starting animation:', { finalShift, duration, finalText: seq[seq.length - 1] });

      textCycleAnimRef.current = gsap.to(inner, {
        yPercent: -finalShift,
        duration,
        ease: ANIMATION_EASINGS.text,
        onComplete: () => {
          console.log('✅ Text animation complete. Final text should be:', seq[seq.length - 1]);
        }
      });
    },
    [textInnerRef, prefersReducedMotion, textLines]
  );

  return { animateText, textLines, textCycleAnimRef };
};
