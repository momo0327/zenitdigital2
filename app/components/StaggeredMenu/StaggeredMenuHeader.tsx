import React from 'react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '@/app/utils/image';
import { StaggeredMenuToggle } from './StaggeredMenuToggle';

interface StaggeredMenuHeaderProps {
  logoUrl: string;
  open: boolean;
  toggleBtnRef: React.RefObject<HTMLButtonElement>;
  textWrapRef: React.RefObject<HTMLSpanElement>;
  textInnerRef: React.RefObject<HTMLSpanElement>;
  iconRef: React.RefObject<HTMLSpanElement>;
  plusHRef: React.RefObject<HTMLSpanElement>;
  plusVRef: React.RefObject<HTMLSpanElement>;
  textLines: string[];
  onToggle: () => void;
}

/**
 * Menu header with logo and toggle button
 */
export const StaggeredMenuHeader: React.FC<StaggeredMenuHeaderProps> = ({
  logoUrl,
  open,
  toggleBtnRef,
  textWrapRef,
  textInnerRef,
  iconRef,
  plusHRef,
  plusVRef,
  textLines,
  onToggle,
}) => {
  return (
    <header
      className="staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20"
      aria-label="Main navigation header"
    >
      <div className="sm-logo flex items-center select-none pointer-events-auto" aria-label="Logo">
        <OptimizedImage
          src={logoUrl}
          alt="Zenit Digital Logo"
          width={110}
          height={32}
          className="sm-logo-img block h-8 w-auto object-contain"
          quality={IMAGE_QUALITY.HIGH}
          priority
        />
      </div>

      <StaggeredMenuToggle
        open={open}
        toggleBtnRef={toggleBtnRef}
        textWrapRef={textWrapRef}
        textInnerRef={textInnerRef}
        iconRef={iconRef}
        plusHRef={plusHRef}
        plusVRef={plusVRef}
        textLines={textLines}
        onClick={onToggle}
      />
    </header>
  );
};
