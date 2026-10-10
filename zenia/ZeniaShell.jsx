"use client";

// Shared chrome ported from the Vite App.jsx: header, menu, footer, dialogs.
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery, useScrollReveal } from "./hooks";
import { BrandDefinitions, Footer } from "./components/Sections";
import { Header, Menu } from "./components/Navigation";
import CaseStudy from "./components/CaseStudy";
import ContactForm from "./components/ContactForm";
import "./styles.css";
import "./hero-cards.css";
import "./modo.css";

export default function ZeniaShell({ children, dark, transparent }) {
  const [menuOpen, setMenuOpen] = useState(false),
    [dialog, setDialog] = useState(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openContact = useCallback(
    (service) => setDialog({ type: "contact", service }),
    [],
  );
  const openProject = useCallback(
    (project) => setDialog({ type: "case", project }),
    [],
  );
  const closeDialog = useCallback(() => setDialog(null), []);
  useScrollReveal(reducedMotion);
  useEffect(() => {
    document.body.classList.toggle("dialog-open", !!dialog);
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("dialog-open", "menu-open");
  }, [dialog, menuOpen]);

  return (
    <>
      <BrandDefinitions />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        onContact={openContact}
        onMenu={() => setMenuOpen(true)}
        menuOpen={menuOpen}
        dark={dark}
        transparent={transparent}
      />
      {menuOpen && (
        <Menu
          onClose={closeMenu}
          onContact={openContact}
          onProject={openProject}
          reducedMotion={reducedMotion}
        />
      )}
      <main id="main">
        {typeof children === "function"
          ? children({
              openContact,
              openProject,
              reducedMotion,
              menuOpen,
              dialog,
            })
          : children}
      </main>
      <Footer onContact={openContact} />
      {dialog?.type === "case" && (
        <CaseStudy
          project={dialog.project}
          onProject={openProject}
          onClose={closeDialog}
        />
      )}
      {dialog?.type === "contact" && (
        <ContactForm service={dialog.service} onClose={closeDialog} />
      )}
    </>
  );
}
