import React from 'react';
import Link from 'next/link';
import { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu.types';

interface StaggeredMenuPanelProps {
  ref?: React.Ref<HTMLElement>;
  open: boolean;
  items: StaggeredMenuItem[];
  socialItems: StaggeredMenuSocialItem[];
  displaySocials: boolean;
  displayItemNumbering: boolean;
}

/**
 * Menu panel with navigation items and social links
 */
export const StaggeredMenuPanel = ({
  ref,
  open,
  items,
  socialItems,
  displaySocials,
  displayItemNumbering,
}: StaggeredMenuPanelProps) => {
    return (
      <aside
        id="staggered-menu-panel"
        ref={ref}
        className="staggered-menu-panel absolute top-0 right-0 h-full bg-[#F5F5F5] flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[8px] will-change-transform"
        style={{ WebkitBackdropFilter: 'blur(8px)' }}
        aria-hidden={!open}
      >
        <div className="sm-panel-inner flex-1 flex flex-col gap-5">
          <ul
            className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
            role="list"
            data-numbering={displayItemNumbering || undefined}
          >
            {items && items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" key={it.label + idx}>
                  <Link
                    className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]"
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                  >
                    <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                      {it.label}
                    </span>
                  </Link>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                <span className="sm-panel-item relative text-black font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                  <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                    No items
                  </span>
                </span>
              </li>
            )}
          </ul>

          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials mt-auto pt-8 flex flex-col gap-3" aria-label="Social links">
              <h3 className="sm-socials-title m-0 text-base font-medium [color:var(--sm-accent,#ff0000)]">
                Socials
              </h3>
              <ul
                className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                role="list"
              >
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    );
};
