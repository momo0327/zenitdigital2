import React from 'react';
import { OptimizedImage } from '../ui/OptimizedImage';
import { IMAGE_QUALITY } from '@/app/utils/image';
import { StaggeredMenuToggle } from './StaggeredMenuToggle';
import styles from './StaggeredMenu.module.css';

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
      className={styles.header}
      aria-label="Main navigation header"
      data-sm="header"
    >
      <div className={styles.logo} aria-label="Logo" data-sm="logo">
        <OptimizedImage
          src={logoUrl}
          alt="Zenit Digital Logo"
          width={110}
          height={32}
          className={styles.logoImg}
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
