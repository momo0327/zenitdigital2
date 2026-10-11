"use client";

// Shared chrome ported from the Vite App.jsx: header, menu, footer, dialogs.
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery, useScrollReveal } from "./hooks";
import { BrandDefinitions, Footer } from "./components/Sections";
import { Header, Menu } from "./components/Navigation";
import CaseStudy from "./components/CaseStudy";
import "./styles.css";
import "./hero-cards.css";
import "./modo.css";

export default function ZeniaShell({ children, dark, transparent }) {
  const [menuOpen, setMenuOpen] = useState(false),
    [dialog, setDialog] = useState(null);
  // Centre of the menu button, so the overlay can expand from it.
  const [menuOrigin, setMenuOrigin] = useState(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const router = useRouter();
  // Contact used to open a modal brief form; it is a page now. Kept under the
  // same name so every existing trigger keeps working.
  const openContact = useCallback(() => router.push("/contact"), [router]);
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
        onMenu={(origin) => {
          setMenuOrigin(origin);
          setMenuOpen(true);
        }}
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
          origin={menuOrigin}
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
    </>
  );
}
