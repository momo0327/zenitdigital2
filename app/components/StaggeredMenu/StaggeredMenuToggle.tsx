import React from 'react';
import styles from './StaggeredMenu.module.css';

interface StaggeredMenuToggleProps {
  open: boolean;
  toggleBtnRef: React.RefObject<HTMLButtonElement>;
  textWrapRef: React.RefObject<HTMLSpanElement>;
  textInnerRef: React.RefObject<HTMLSpanElement>;
  iconRef: React.RefObject<HTMLSpanElement>;
  plusHRef: React.RefObject<HTMLSpanElement>;
  plusVRef: React.RefObject<HTMLSpanElement>;
  textLines: string[];
  onClick: () => void;
}

/**
 * Menu toggle button with animated text and plus icon
 */
export const StaggeredMenuToggle: React.FC<StaggeredMenuToggleProps> = ({
  open,
  toggleBtnRef,
  textWrapRef,
  textInnerRef,
  iconRef,
  plusHRef,
  plusVRef,
  textLines,
  onClick,
}) => {
  return (
    <button
      ref={toggleBtnRef}
      className={styles.toggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="staggered-menu-panel"
      onClick={onClick}
      type="button"
      data-sm="toggle"
    >
      <span
        ref={textWrapRef}
        className={styles.toggleTextWrap}
        aria-hidden="true"
        data-sm="toggle-textWrap"
      >
        <span ref={textInnerRef} className={styles.toggleTextInner} data-sm="toggle-textInner">
          {textLines.map((l, i) => (
            <span className={styles.toggleLine} key={i} data-sm="toggle-line">
              {l}
            </span>
          ))}
        </span>
      </span>

      <span
        ref={iconRef}
        className={styles.icon}
        aria-hidden="true"
        data-sm="icon"
      >
        <span
          ref={plusHRef}
          className={styles.iconLine}
          data-sm="icon-line"
        />
        <span
          ref={plusVRef}
          className={styles.iconLine}
          data-sm="icon-line"
        />
      </span>
    </button>
  );
};
