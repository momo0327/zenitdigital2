import React from 'react';

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
      className="sm-toggle relative inline-flex items-center gap-[0.3rem] bg-transparent border-0 cursor-pointer text-[#e9e9ef] font-medium leading-none overflow-visible pointer-events-auto"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="staggered-menu-panel"
      onClick={onClick}
      type="button"
    >
      <span
        ref={textWrapRef}
        className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-[var(--sm-toggle-width,auto)] min-w-[var(--sm-toggle-width,auto)]"
        aria-hidden="true"
      >
        <span ref={textInnerRef} className="sm-toggle-textInner flex flex-col leading-none">
          {textLines.map((l, i) => (
            <span className="sm-toggle-line block h-[1em] leading-none" key={i}>
              {l}
            </span>
          ))}
        </span>
      </span>

      <span
        ref={iconRef}
        className="sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center [will-change:transform]"
        aria-hidden="true"
      >
        <span
          ref={plusHRef}
          className="sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
        />
        <span
          ref={plusVRef}
          className="sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 [will-change:transform]"
        />
      </span>
    </button>
  );
};
