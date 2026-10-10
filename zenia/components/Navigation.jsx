"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Modal from "./Modal";

export function Header({ onContact, onMenu, menuOpen, dark, transparent }) {
  // On sub-pages the in-page anchors have to travel back to the homepage first.
  const home = usePathname() === "/" ? "" : "/";
  return (
    <header
      className={`header container${dark ? " header-dark" : ""}${
        transparent ? " header-transparent" : ""
      }`}
    >
      <Logo />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href={`${home}#cases`}>Work</a>
        <a href={`${home}#services`}>Services</a>
        <a href={`${home}#about`}>About us</a>
        <Link href="/portal">Client portal</Link>
      </nav>
      <button
        className="button button-dark header-cta"
        onClick={() => onContact()}
      >
        Let’s talk
      </button>
      <button
        className="menu-button"
        aria-label="Open menu"
        aria-controls="site-menu"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        onClick={onMenu}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function Menu({ onClose, onContact, onProject, reducedMotion }) {
  const [closing, setClosing] = useState(false);
  const timer = useRef(null);
  const closingRef = useRef(false);
  function close(after) {
    if (closingRef.current) return;
    closingRef.current = true;
    const finish = () => {
      onClose();
      if (after) setTimeout(after, 0);
    };
    if (reducedMotion) return finish();
    setClosing(true);
    timer.current = setTimeout(finish, 360);
  }
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    const query = window.matchMedia("(min-width:761px)");
    const resize = () => {
      if (query.matches) onClose();
    };
    query.addEventListener("change", resize);
    return () => query.removeEventListener("change", resize);
  }, [onClose]);
  function navigate(event) {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    event.preventDefault();
    const id = anchor.getAttribute("href");
    close(() => {
      const target = document.querySelector(id);
      target?.scrollIntoView({
        behavior: reducedMotion ? "instant" : "smooth",
        block: "start",
      });
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.addEventListener(
          "blur",
          () => target.removeAttribute("tabindex"),
          { once: true },
        );
      }
    });
  }
  return (
    <Modal
      id="site-menu"
      className={`menu-overlay${closing ? " is-closing" : ""}`}
      labelledBy="menu-title"
      onClose={() => close()}
    >
      <div className="menu-shell" onClick={navigate}>
        <div className="menu-top container">
          <Logo />
          <button
            className="menu-close"
            aria-label="Close menu"
            onClick={() => close()}
          >
            <span>Close</span>
            <span className="menu-close-icon" aria-hidden="true" />
          </button>
        </div>
        <div className="menu-main container">
          <h2 id="menu-title" className="sr-only">
            Explore Zenia
          </h2>
          <nav className="menu-links" aria-label="Expanded navigation">
            <a href="/#cases">
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="8" height="7" rx="1.6" />
                  <rect x="13" y="4" width="8" height="7" rx="1.6" />
                  <rect x="3" y="13" width="8" height="7" rx="1.6" />
                  <rect x="13" y="13" width="8" height="7" rx="1.6" />
                </svg>
              </span>
              <span className="menu-text">
                <strong>Work</strong>
                <span>Projects we have built</span>
              </span>
            </a>
            <Link href="/#services" onClick={() => close()}>
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6z" />
                  <path d="M12 3.2v17.6M4 7.6l8 4.4 8-4.4" />
                </svg>
              </span>
              <span className="menu-text">
                <strong>Services</strong>
                <span>What we do</span>
              </span>
            </Link>
            <Link href="/#about" onClick={() => close()}>
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8.4" r="3.6" />
                  <path d="M4.8 20c0-3.6 3.2-5.8 7.2-5.8s7.2 2.2 7.2 5.8" />
                </svg>
              </span>
              <span className="menu-text">
                <strong>About</strong>
                <span>Who we are</span>
              </span>
            </Link>
            <Link href="/portal" onClick={() => close()}>
              <span className="menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4.6" width="18" height="12.6" rx="1.8" />
                  <path d="M8 20.4h8M3 14.2h18" />
                </svg>
              </span>
              <span className="menu-text">
                <strong>Client portal</strong>
                <span>Your project, in one place</span>
              </span>
            </Link>
          </nav>
          <div className="menu-actions">
            <button
              className="button button-white"
              onClick={() => close(() => onContact())}
            >
              Contact us
            </button>
            <Link
              className="button button-lavender"
              href="/portal"
              onClick={() => close()}
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
