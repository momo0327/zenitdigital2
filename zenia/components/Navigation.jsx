"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Modal from "./Modal";

export function Header({ onContact, onMenu, menuOpen, dark, transparent }) {
  const triggerRef = useRef(null);
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
        ref={triggerRef}
        className="menu-button"
        aria-label="Open menu"
        aria-controls="site-menu"
        aria-haspopup="dialog"
        aria-expanded={menuOpen}
        onClick={(event) => {
          // The overlay's circular reveal grows from the button's centre.
          const rect = event.currentTarget.getBoundingClientRect();
          onMenu({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          });
        }}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function Menu({ onClose, onContact, onProject, reducedMotion, origin }) {
  const [closing, setClosing] = useState(false);
  // Drives the circular clip-path reveal: false on mount so the first paint is
  // a zero-radius circle, flipped on after two frames so the transition runs.
  const [expanded, setExpanded] = useState(false);
  const timer = useRef(null);
  const closingRef = useRef(false);
  function close(after) {
    if (closingRef.current) return;
    closingRef.current = true;
    const finish = () => {
      onClose();
      if (after) setTimeout(after, 0);
    };
    setExpanded(false);
    if (reducedMotion) return finish();
    setClosing(true);
    timer.current = setTimeout(finish, 420);
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
    const id = anchor.getAttribute("href");
    // A bare "#" is a placeholder, not a target; querySelector("#") throws.
    if (id === "#") return;
    event.preventDefault();
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
      className={`menu-overlay${closing ? " is-closing" : ""}${
        expanded ? " is-expanded" : ""
      }`}
      labelledBy="menu-title"
      onClose={() => close()}
      onReveal={() => setExpanded(true)}
      style={{
        "--menu-x": `${origin?.x ?? 0}px`,
        "--menu-y": `${origin?.y ?? 40}px`,
      }}
    >
      <div className="menu-shell" onClick={navigate}>
        <div className="menu-top container">
          <Logo />
          <button
            className="menu-close"
            aria-label="Close menu"
            onClick={() => close()}
          >
            <span className="menu-close-icon" aria-hidden="true" />
          </button>
        </div>
        <div className="menu-main container">
          <h2 id="menu-title" className="sr-only">
            Explore Zenia
          </h2>
          <nav className="menu-links" aria-label="Expanded navigation">
            <a style={{ "--link-index": 0 }} href="/#cases">
              Work
            </a>
            <Link
              style={{ "--link-index": 1 }}
              href="/#services"
              onClick={() => close()}
            >
              Services
            </Link>
            <Link
              style={{ "--link-index": 2 }}
              href="/#about"
              onClick={() => close()}
            >
              About us
            </Link>
            <Link
              style={{ "--link-index": 3 }}
              href="/portal"
              onClick={() => close()}
            >
              Client portal
            </Link>
            <button
              style={{ "--link-index": 4 }}
              type="button"
              onClick={() => close(() => onContact())}
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </Modal>
  );
}
