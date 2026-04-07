import React, { forwardRef } from 'react';
import { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu.types';
import styles from './StaggeredMenu.module.css';

interface StaggeredMenuPanelProps {
  open: boolean;
  items: StaggeredMenuItem[];
  socialItems: StaggeredMenuSocialItem[];
  displaySocials: boolean;
  displayItemNumbering: boolean;
}

/**
 * Menu panel with navigation items and social links
 */
export const StaggeredMenuPanel = forwardRef<HTMLElement, StaggeredMenuPanelProps>(
  ({ open, items, socialItems, displaySocials, displayItemNumbering }, ref) => {
    return (
      <aside
        id="staggered-menu-panel"
        ref={ref}
        className={styles.panel}
        aria-hidden={!open}
      >
        <div className={styles.panelInner}>
          <ul
            className={styles.panelList}
            role="list"
            data-numbering={displayItemNumbering || undefined}
            data-sm="panel-list"
          >
            {items && items.length ? (
              items.map((it, idx) => (
                <li className={styles.panelItemWrap} key={it.label + idx}>
                  <a
                    className={styles.panelItem}
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                    data-sm="panel-item"
                  >
                    <span className={styles.panelItemLabel} data-sm="panel-itemLabel">
                      {it.label}
                    </span>
                  </a>
                </li>
              ))
            ) : (
              <li className={styles.panelItemWrap} aria-hidden="true">
                <span className={styles.panelItem}>
                  <span className={styles.panelItemLabel} data-sm="panel-itemLabel">
                    No items
                  </span>
                </span>
              </li>
            )}
          </ul>

          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className={styles.socials} aria-label="Social links">
              <h3 className={styles.socialsTitle} data-sm="socials-title">
                Socials
              </h3>
              <ul
                className={styles.socialsList}
                role="list"
              >
                {socialItems.map((s, i) => (
                  <li key={s.label + i}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialsLink}
                      data-sm="socials-link"
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
  }
);

StaggeredMenuPanel.displayName = 'StaggeredMenuPanel';
